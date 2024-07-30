interface IPlanFeature {
  name: string;
}

export interface IPlan {
  id: number;
  name: string;
  price: string;
  description: string;
  features: IPlanFeature[];
}

export interface IFaq {
  title: string;
  description: string;
}
