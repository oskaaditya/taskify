/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type AnimationState = 'initial' | 'animate';

export const useInViewAnimation = (variants: Variants, threshold = 0.5): [any, AnimationState] => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  const [animationState, setAnimationState] = useState<AnimationState>('initial');

  useEffect(() => {
    if (inView) {
      setAnimationState('animate');
    }
  }, [inView]);

  return [ref, animationState];
};
