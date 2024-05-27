type TPlanFeature = {
  name: string;
};

export type TPlan = {
  id: number;
  name: string;
  price: string;
  description: string;
  features: TPlanFeature[];
};

export type TFaq = {
  title: string;
  description: string;
};
