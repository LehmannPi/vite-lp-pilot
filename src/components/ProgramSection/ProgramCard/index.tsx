type ProgramCardProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
};

export default function ProgramCard({
  description,
  imageAlt,
  imageSrc,
  title,
}: ProgramCardProps) {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>{title}</h2>
        <img src={imageSrc} alt={imageAlt} />
        <p>{description}</p>
      </div>
    </>
  );
}
