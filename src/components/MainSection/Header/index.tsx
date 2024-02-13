import { InstagramIcon } from '../../common/icons/header/FacebookIcon';
import { FacebookIcon } from '../../common/icons/header/InstagramIcon';
import { LinkedInIcon } from '../../common/icons/header/LinkedInIcon';
import './index.scss';

export default function Header() {
  function scrollToSection(section: string) {
    const sectionName = section + '-section';
    const matches = document.getElementsByClassName(sectionName);
    const positionTop = matches[0].getBoundingClientRect().top;
    window.scrollTo({ top: positionTop, behavior: 'smooth' });
  }
  return (
    <div
      style={{
        display: 'flex',
        width: 'full',
        justifyContent: 'space-around',
        paddingTop: '37px',
      }}
    >
      <p className="header-title">Filipe's Editor</p>
      <div className="header-central">
        <span onClick={() => scrollToSection('main')}>Main</span>
        <span onClick={() => scrollToSection('about')}>About</span>
        <span onClick={() => scrollToSection('program')}>Program</span>
        <span onClick={() => scrollToSection('price')}>Price</span>
        <span onClick={() => scrollToSection('contact')}>Contact</span>
      </div>
      <div className="header-social">
        <InstagramIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>
    </div>
  );
}
