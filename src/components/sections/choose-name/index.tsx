'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import ModalForm from '@/components/ui/modal-form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import useFetchUsers from '@/hooks/useFetchUsers';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
  name: z.string({
    required_error: 'You need to choose a name.',
  }),
});

interface ChooseNameProps {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

const ChooseName: FC<ChooseNameProps> = ({ isActive, setIsActive }) => {
  const data = useFetchUsers();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = () => setIsActive(!isActive);

  return (
    <section className='pb-20 choose'>
      <div className='flex flex-col gap-y-4'>
        <div className='uppercase text-[28px] leading-[34px] font-bold'>
          Choose <span className='text-main'>your Name</span>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-y-4'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='space-y-3 '>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex flex-col '
                    >
                      {data.users.map(({ name: { first, last }, id }) => (
                        <FormItem
                          className='flex items-center gap-x-2 shadow-section rounded-2xl px-3 py-7'
                          key={id.value}
                        >
                          <FormControl>
                            <RadioGroupItem value={`${first} ${last}`} />
                          </FormControl>
                          <FormLabel className='font-semibold leading-6 !m-0'>
                            {`${first} ${last}`}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <ModalForm name={form.watch('name')} />
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ChooseName;
