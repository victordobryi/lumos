'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Image from 'next/image';
import Lock from '@/assets/images/lock.png';

const ModalFormSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email({
      message: 'Invalid email address.',
    }),
});

interface ModalFormProps {
  name: string;
}

const ModalForm: FC<ModalFormProps> = ({ name }) => {
  const modalForm = useForm<z.infer<typeof ModalFormSchema>>({
    resolver: zodResolver(ModalFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleModalSubmit = (data: z.infer<typeof ModalFormSchema>) => {
    console.log(data);
    handleResetForm();
  };

  const handleResetForm = () => modalForm.reset();

  const handleButtonClick = () => {
    if (name) setIsDialogOpen(true);
  };

  return (
    <>
      <Button
        className='bg-secondary rounded-2xl hover:bg-main w-full p-[17px] text-2xl leading-8 h-auto'
        onClick={handleButtonClick}
      >
        Get VPN
      </Button>

      <Dialog
        open={isDialogOpen}
        onOpenChange={(isOpen) => {
          setIsDialogOpen(isOpen);
          if (!isOpen) handleResetForm();
        }}
      >
        <DialogContent className='!rounded-none w-full  max-w-[892px] !shadow-none border-none'>
          <DialogDescription className='hidden' />
          <div className='flex flex-col gap-y-4 w-full  justify-center items-start m-center '>
            <DialogHeader>
              <DialogTitle className='uppercase text-[28px] leading-[34px] font-bold'>
                Your name
              </DialogTitle>
            </DialogHeader>
            <span className='py-4 border-y-1 border-[#F8F8F8] border-solid font-medium'>
              {name}
            </span>
            <Form {...modalForm}>
              <form onSubmit={modalForm.handleSubmit(handleModalSubmit)} className='w-full'>
                <FormField
                  control={modalForm.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className='border-gray rounded-2xl py-4 h-auto'
                          placeholder='Enter your email'
                          {...field}
                        />
                      </FormControl>
                      <div className='flex items-center gap-x-2'>
                        <Image src={Lock} alt='lock' width={16} height={16} />
                        <FormDescription>
                          Your information is 100% secure. We don’t share your personal information.
                        </FormDescription>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type='submit'
                  className='bg-secondary rounded-2xl hover:bg-main w-full p-[17px] text-2xl leading-8 h-auto mt-10'
                >
                  Continue
                </Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ModalForm;
