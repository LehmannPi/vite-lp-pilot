import { ColoredIG } from '../common/icons/contact/ColooredIG';
import { ColoredFB } from '../common/icons/contact/ColoredFB';
import { ColoredLinkedIn } from '../common/icons/contact/ColoredLinkedIn';
import { ColoredX } from '../common/icons/contact/ColoredX';
import { ContactForm } from './ContactForm';
import Footer from './Footer';
import './index.scss';

export default function ContactSection() {
  return (
    <div className="contact-section">
      <h1>Contact me</h1>
      <ContactForm submit={() => alert('Simulação de mensagem enviada.')} />
      {/* <ContactForm submit={(values) => alert(JSON.stringify(values))} /> */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          cursor: 'pointer',
          margin: '40px auto',
          flexWrap: 'wrap',
        }}
      >
        <ColoredFB />
        <ColoredLinkedIn />
        <ColoredIG />
        <ColoredX />
      </div>
      <Footer linkToArts="" />
    </div>
  );
}
