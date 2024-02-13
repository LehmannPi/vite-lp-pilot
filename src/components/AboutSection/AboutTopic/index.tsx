import React from 'react';

type Props = {
  Icon?: React.ReactNode;
  title: string;
  description: string;
};

const AboutTopic = ({ description, Icon, title }: Props) => {
  return (
    <div className="about-topic">
      {Icon}
      <div className="about-topic-group">
        <p className="about-topic-group-title">{title}</p>{' '}
        <p className="about-topic-group-description"> {description}</p>
      </div>
    </div>
  );
};

export default AboutTopic;
