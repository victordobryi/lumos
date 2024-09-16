import Image from 'next/image';
import { FC } from 'react';
import WelcomeImg from '@/assets/images/welcome.png';
import { Button } from '@/components/ui/button';
import Decor from '@/components/ui/decor';
import AboutInfo from './about-info';
import { Separator } from '@/components/ui/separator';

const Welcome: FC = () => {
  return (
    <section className='flex flex-col items-center gap-y-6 pt-[75px] welcome md:pt-6'>
      <div className='flex flex-col items-center'>
        <h1 className='text-[32px] leading-[46px] font-bold max-w-96 text-center'>
          Access <span className='text-main'>everything securely</span> with <br /> VPN
        </h1>
        <Image src={WelcomeImg} alt='welcome' width={540} height={209} />
        <Button className='mt-5 bg-secondary rounded-2xl hover:bg-main max-w-96 w-full p-[17px] text-2xl leading-8 h-auto md:max-w-none'>
          Get VPN
        </Button>
      </div>
      <Decor>
        <div className='flex flex-col text-sm leading-[18px] text-main items-center'>
          <span>Trusted by</span>
          <span className='font-bold'>50M+ Users</span>
        </div>
      </Decor>
      <div className='shadow-section rounded-2xl flex justify-center gap-x-24 items-center p-4 w-full md:gap-x-14 sm:gap-x-4 sm:justify-between '>
        <AboutInfo svgName='location' subtitle='Locations' title='50+' />
        <Separator orientation='vertical' className='py-2 h-8 bg-gray' />
        <AboutInfo svgName='servers' subtitle='Servers' title='1000+' />
      </div>
      <p className='text-gray font-medium leading-6 md:text-center'>
        VPN-your <span className='text-main'>ultimate</span> solution for a private and secure
        online experience!
      </p>
    </section>
  );
};

export default Welcome;
