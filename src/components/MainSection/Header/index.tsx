import { useState } from 'react';
import { NavbarIcon } from '../../common/icons/NavbarIcon';
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

  const [mobile, setMobile] = useState(false);

  function handleMobileNav() {
    setMobile(!mobile);
  }

  return (
    <>
      <div className="header-desktop">
        <p className="header-desktop-title">Filipe's Editor</p>
        <div className="header-desktop-central">
          <button onClick={() => scrollToSection('main')}>Main</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('program')}>Program</button>
          <button onClick={() => scrollToSection('price')}>Price</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
        <div className="header-desktop-social">
          <InstagramIcon />
          <FacebookIcon />
          <LinkedInIcon />
        </div>
      </div>
      {mobile ? null : (
        <div className="header-mobile">
          <p className="header-mobile-title">Filipe's Editor</p>
          <button
            onClick={handleMobileNav}
            className="header-mobile-nav-button"
          >
            <NavbarIcon />
          </button>

          {/* <div className="header-mobile-social">
          <InstagramIcon />
          <FacebookIcon />
          <LinkedInIcon />
        </div> */}
        </div>
      )}
      {mobile ? (
        <>
          <div onClick={handleMobileNav} className="mobile-overlay" />
          <div className="header-mobile-central">
            <button onClick={() => scrollToSection('main')}>Main</button>
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('program')}>Program</button>
            <button onClick={() => scrollToSection('price')}>Price</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </div>
        </>
      ) : null}
    </>
  );
}
