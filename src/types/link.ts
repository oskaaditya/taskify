export type LinksProps = {
  url: string;
  name: string;
  icon?: React.ReactNode;
};

export type FooterLinks = {
  title: string;
  links: LinksProps[];
};
