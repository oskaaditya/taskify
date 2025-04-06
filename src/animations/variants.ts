import { Variants } from 'framer-motion';

export const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3,
      duration: 0.2,
    },
  },
};

export const containerFastVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      duration: 0.1,
    },
  },
};

export const fadeUpChildVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.2 } },
};

export const fadeInVariants: Variants = {
  initial: { opacity: 0, y: 0 },
  animate: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.2 } },
};

export const reduceWidthAnimation = {
  initial: { width: '100%' },
  animate: {
    width: 0,
    transition: { duration: 2, ease: 'easeOut' },
  },
};

export const fadeUpChildImageVariants: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeOut', duration: 0.7, delay: 1 },
  },
};

export const fadeLeftVariants: Variants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0, transition: { ease: 'easeOut', duration: 0.8 } },
};

export const fadeRightVariants: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0, transition: { ease: 'easeOut', duration: 0.8 } },
};

export const expandedVertical: Variants = {
  initial: { opacity: 0, height: 0 },
  animate: {
    opacity: 1,
    height: 612,
    transition: { ease: 'easeOut', duration: 0.5 },
  },
};

export const fadeUpChildfastVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.3 } },
};

export const cardContentVariant: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.8 } },
};

export const zoomOutVariants: Variants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { ease: 'easeOut', duration: 0.2 },
  },
};

export const firstContainerVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.4,
      delay: 0.5,
      staggerChildren: 0.6,
    },
  },
};

export const secondContainerVariants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0, transition: { ease: 'easeOut', duration: 0.4 } },
};

export const pageTransitionVariants = {
  initial: { opacity: 0, y: 50 }, // Start hidden and below
  animate: { opacity: 1, y: 0 }, // Fade in and move up
  exit: { opacity: 0, y: -50 }, // Fade out and move up
};
