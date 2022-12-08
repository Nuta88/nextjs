import Image from 'next/image';

export const OptimizedImage = ({src, alt, width=500, height=500}) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    blurDataURL="URL"
    placeholder="blur"
  />
);
