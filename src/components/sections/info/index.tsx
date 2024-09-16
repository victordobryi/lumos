import { FC } from 'react';
import InfoItem, { InfoItemProps } from './info-item';

const InfoData: InfoItemProps[] = [
  {
    imgSrc: '/images/info/eye.png',
    markedTitle: 'Unlimited',
    title: 'access to content',
    description: `Enjoy unlimited bandwidth to stay connected to the world's best shows, apps, and games!`,
  },
  {
    imgSrc: '/images/info/rocket.png',
    markedTitle: 'Flashing',
    title: 'connecting speed',
    description: `VPN Lumos offers unlimited bandwidth for faster loading and no buffering!`,
  },
  {
    imgSrc: '/images/info/location.png',
    markedTitle: 'Hide',
    title: 'your location',
    description: `Get your own unique IP for added security and access to restricted sites, apps, and services!`,
  },
  {
    imgSrc: '/images/info/lock.png',
    markedTitle: 'Bypass',
    title: 'blocked sites',
    description: `Access any website safely and anonymously!`,
  },
];

const Information: FC = () => {
  return (
    <section>
      <div className='grid grid-cols-2 gap-x-8 gap-y-2 information md:grid-cols-1'>
        {InfoData.map((item) => (
          <InfoItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Information;
