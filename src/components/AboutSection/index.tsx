import { CameraIcon } from '../common/icons/about/CameraIcon';
import { EyesIcon } from '../common/icons/about/EyesIcon';
import { ViewsIcon } from '../common/icons/about/ViewsIcon';
import aboutImg from './../../assets/backgrounds/unsplash_PUY7JEnobzg.png';
import AboutTopic from './AboutTopic';

import './index.scss';

export default function AboutSection() {
  return (
    <>
      <div className="about-section">
        <div className="about-container">
          <div className="about-section-text">
            <h1>Who am I?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Gravida suspendisse neque
              in lacus odio. Malesuada dictumst erat pulvinar posuere interdum
              velit felis.
            </p>
            <div className="about-group">
              <AboutTopic
                Icon={<ViewsIcon />}
                description="social media audience"
                title="250.000+"
              />
              <AboutTopic
                Icon={<CameraIcon />}
                description="edited by me"
                title="750+ videos"
              />
              <AboutTopic
                Icon={<EyesIcon />}
                description="collected by my videos"
                title="30.000.000+ views"
              />
            </div>
          </div>
          <img
            className="about-section-img"
            src={aboutImg}
            alt="Video editor's room with Jaws poster hanging before a computer "
          />
        </div>
      </div>
    </>
  );
}
