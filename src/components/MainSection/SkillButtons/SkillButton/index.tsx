import React from 'react';

type Props = {
  text: string;
  icon: React.ReactNode;
};

export const SkillButton = ({ icon, text }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {icon}
      {/* <Icon /> */}
      <p>{text}</p>
    </div>
  );
};
