import { Button } from '../common/Button';
import { Section } from '../common/Section';
import { CTAArrow } from '../common/icons/CTAArrow';
import image from './../../assets/backgrounds/Pexels-Photo-by-Felix-Mittermeier.png';
import Header from './Header';
import { SkillButtons } from './SkillButtons';
import './index.scss';

export default function MainSection() {
  return (
    <main
      className="main-section"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <Section imageUrl={image} backgroundColor="black">
        <Header />
        <div className="main-group">
          <div className="title-group">
            <h1 className="title">edit like a pro</h1>
            <h2 className="subtitle">and make money</h2>

            <p>
              This is an intensive program designed for those who want to master
              the skills of professional video editing and graphic design
            </p>

            <div className="cta">
              <Button message={'Order'} />
              <div className="cta-arrow-group">
                <p className="cta-phrase">
                  Order from
                  <br /> here
                </p>
                <CTAArrow />
              </div>
            </div>
          </div>
          <SkillButtons />
        </div>
      </Section>
    </main>
  );
}
