'use client';
import { FC } from 'react';
import Logo from './logo';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';

const Header: FC = () => {
  return (
    <header className='sticky top-0 z-100 w-full container shadow-default bg-white'>
      <div className='flex items-center justify-between py-[18px]'>
        <Link to='welcome' smooth={true} className='cursor-pointer'>
          <Logo />
        </Link>
        <Link to='choose' smooth={true} className='cursor-pointer'>
          <Button className='rounded-3xl bg-main px-6 py-3 hover:bg-secondary'>Get VPN</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
