type PriceImageProps = {
  src: string;
  imgAlt: string;
  maxWidth?: number;
  className: string;
};

export default function PriceImage({
  className,
  src,
  imgAlt,
  maxWidth,
}: PriceImageProps) {
  return (
    <>
      <img
        className={className}
        src={src}
        alt={imgAlt}
        style={{ maxWidth: maxWidth ? maxWidth : 141, height: 'auto' }}
      />
    </>
  );
}
