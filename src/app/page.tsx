'use client';
import ChooseName from '@/components/sections/choose-name';
import Information from '@/components/sections/info';
import Welcome from '@/components/sections/welcome';

import { useState } from 'react';

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className='container-sm flex flex-col gap-y-[72px] md:gap-y-10'>
      <Welcome />
      <Information />
      <h3 className='text-main text-2xl font-bold text-center'>Millions of people trust us!</h3>
      <ChooseName setIsActive={setIsActive} isActive={isActive} />
    </div>
  );
}
