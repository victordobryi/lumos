import { FC, PropsWithChildren } from 'react';
import SVGIcon from './icon';

const Decor: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex items-center gap-x-2 mb-1'>
      <SVGIcon size={22} secondSize={42} name='left' />
      {children}
      <SVGIcon size={22} secondSize={42} name='right' />
    </div>
  );
};

export default Decor;
