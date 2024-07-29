import { extendTailwindMerge } from 'tailwind-merge';
import { withExtendedShadows } from 'tailwind-extended-shadows-merge';
import { type ClassValue, clsx } from 'clsx';

export const twMerge = extendTailwindMerge(withExtendedShadows);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
