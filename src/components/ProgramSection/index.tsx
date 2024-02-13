import data from './../../data/programData.json';
import ProgramCard from './ProgramCard';
import './index.scss';

export default function ProgramSection() {
  return (
    <>
      <div className="program-section">
        <h1>What awaits you?</h1>
        <div className="program-section-grid">
          {data.programCardsData.map((program) => (
            <ProgramCard
              description={program.description}
              imageAlt={program.imageAlt}
              imageSrc={program.imageSrc}
              title={program.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}
