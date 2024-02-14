import imgBroadcastUrl from '../../assets/program/Broadcasting audio from podcast studio.png';
import imgMobileUrl from '../../assets/program/Mobile app development and mobile user interface.png';
import imgKeyUrl from '../../assets/program/key.png';
import data from './../../data/programData.json';
import ProgramCard from './ProgramCard';
import './index.scss';

export default function ProgramSection() {
  const imgSrcArray = [imgBroadcastUrl, imgKeyUrl, imgMobileUrl];
  return (
    <>
      <div className="program-section">
        <h1>What awaits you?</h1>
        <div className="program-section-grid">
          {data.programCardsData.map((program, index) => (
            <ProgramCard
              key={index}
              description={program.description}
              imageAlt={program.imageAlt}
              imageSrc={imgSrcArray[index]}
              title={program.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}
