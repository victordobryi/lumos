import { FC, MouseEventHandler } from 'react';

const SVGIcon: FC<{
  name: string;
  size?: number;
  secondSize?: number;
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}> = ({ name, size, secondSize, className, onClick }) => {
  return (
    <svg onClick={onClick} className={className} width={size} height={secondSize || size}>
      <use xlinkHref={`/sprite.svg#${name}`}></use>
    </svg>
  );
};

export default SVGIcon;
