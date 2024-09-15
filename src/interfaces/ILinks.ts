export interface ILinks {
  url: string;
  name: string;
}

export interface LinksProps {
  url: string;
  name: string;
  icon?: React.ReactNode;
  submenu?: ILinks[];
}

export interface FooterLinks {
  title: string;
  links: LinksProps[];
}
