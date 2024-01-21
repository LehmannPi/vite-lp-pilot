import ProgramCard from './ProgramCard';

export default function ProgramSection() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>What awaits you?</h1>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <ProgramCard
            description="Is an intensive program designed for those who dream of mastering video editing and graphic design skills."
            imageAlt=""
            imageSrc=""
            title="For whom?"
          />
          <ProgramCard
            description="This course offers participants a unique opportunity to immerse in a fascinating world of creativity."
            imageAlt=""
            imageSrc=""
            title="What it gives"
          />
          <ProgramCard
            description="You will create your own video projects and graphic compositions, combining various style and effects."
            imageAlt=""
            imageSrc=""
            title="Experience"
          />
        </div>
      </div>
    </>
  );
}
