import { Image } from 'react-bootstrap';
import { AvatarProps } from '../../types/Avatar';

const Avatar = ({
  src,
  alt,
  width = 33,
  height = 33,
  className,
}: AvatarProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className} rounded-circle`}
    />
  );
};

export default Avatar;
