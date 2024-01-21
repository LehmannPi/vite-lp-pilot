type Props = {
  linkToArts: string;
};

const Footer = ({ linkToArts }: Props) => {
  return (
    <footer>
      Designed by Filipe Lehmann. Arts by <a href={linkToArts}>Icon8</a>
    </footer>
  );
};

export default Footer;
