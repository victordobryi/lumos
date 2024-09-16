import Image from 'next/image';
import { FC } from 'react';

export interface InfoItemProps {
  imgSrc: string;
  markedTitle: string;
  title: string;
  description: string;
}

const InfoItem: FC<InfoItemProps> = ({ description, imgSrc, markedTitle, title }) => {
  return (
    <div className='flex flex-col gap-y-2 text-center items-center justify-start py-4 border-solid border-gray border-t-1 info-item'>
      <Image width={104} height={52} src={imgSrc} alt='info' />
      <div className='flex flex-col text-[28px] leading-[34px] font-bold uppercase'>
        <span className='text-secondary'>{markedTitle}</span>
        <span className='text-main'>{title}</span>
      </div>
      <p className='text-gray font-semibold leading-6 text-base'>{description}</p>
    </div>
  );
};

export default InfoItem;
