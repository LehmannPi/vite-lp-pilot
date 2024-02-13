import { ReactNode } from 'react';

type Props = {
  imageUrl: string;
  children: ReactNode;
  backgroundColor?: string;
  backgroundPosition?: string;
};

export const Section = ({
  backgroundColor,
  backgroundPosition,
  children,
  imageUrl,
}: Props) => (
  <section
    style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundColor: backgroundColor ? backgroundColor : 'inherit',
      backgroundPosition: backgroundPosition ? backgroundPosition : 'center',
    }}
  >
    {children}
  </section>
);
