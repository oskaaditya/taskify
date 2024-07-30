export interface LinksProps {
  url: string;
  name: string;
  icon?: React.ReactNode;
}

export interface FooterLinks {
  title: string;
  links: LinksProps[];
}
