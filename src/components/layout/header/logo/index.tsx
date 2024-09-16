import { FC } from 'react';
import LogoImg from '@/assets/images/logo.png';
import Image from 'next/image';

const Logo: FC = () => {
  return (
    <div className='flex items-center gap-x-1'>
      <Image width={31} height={31} src={LogoImg} alt='logo' />
      <span className='font-semibold'>VPN</span>
    </div>
  );
};

export default Logo;
