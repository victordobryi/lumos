import SVGIcon from '@/components/ui/icon';
import { FC } from 'react';

interface AboutInfoProps {
  svgName: string;
  title: string;
  subtitle: string;
}

const AboutInfo: FC<AboutInfoProps> = ({ subtitle, svgName, title }) => {
  return (
    <div className='flex items-center gap-x-3'>
      <SVGIcon size={24} name={svgName} />
      <div className='flex flex-col'>
        <span className='text-2xl leading-8 font-bold'>{title}</span>
        <span className=' text-gray text-sm leading-default'>{subtitle}</span>
      </div>
    </div>
  );
};

export default AboutInfo;
