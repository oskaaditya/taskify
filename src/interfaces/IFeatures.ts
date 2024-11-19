import { LucideIcon } from 'lucide-react';

export interface IFeatures {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface IHightlights {
  total: number;
  title: string;
  description: string;
}

export interface IHightlightsTag {
  Icon?: LucideIcon;
  title: string;
  description?: string;
}
