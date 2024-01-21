type PriceImageProps = {
  src: string;
  imgAlt: string;
};

export default function PriceImages({ src, imgAlt }: PriceImageProps) {
  return (
    <>
      <img src={src} alt={imgAlt} />
    </>
  );
}
