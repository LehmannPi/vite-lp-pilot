import React from 'react';

type Props = {
  Icon?: typeof React.Component;
  title: string;
  description: string;
};

const AboutTopic = ({ description, Icon, title }: Props) => {
  return (
    <div>
      {Icon ? <Icon /> : null}
      <div>
        <p>{title}</p> <p> {description}</p>
      </div>
    </div>
  );
};

export default AboutTopic;
