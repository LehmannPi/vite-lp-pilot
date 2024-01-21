import AboutTopic from './AboutTopic';

export default function AboutSection() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Who am I?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Gravida suspendisse neque in
          lacus odio. Malesuada dictumst erat pulvinar posuere interdum velit
          felis.
        </p>
        <div>
          <AboutTopic description="social media audience" title="250.000+" />
          <AboutTopic description="edited by me" title="750+ videos" />
          <AboutTopic
            description="collected by my videos"
            title="30.000.000+ views"
          />
        </div>
        <img src="" alt="" />
      </div>
    </>
  );
}
