'use client';

import { motion } from 'framer-motion';

const pathMotion = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

const HightlightTopRight = () => {
  return (
    <div className="absolute right-0 top-0 hidden md:block">
      <svg xmlns="http://www.w3.org/2000/svg" width="129" height="124" viewBox="0 0 129 124" fill="none">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M278 123H101C45.7715 123 1.00001 78.2285 1.00001 23V-114"
          stroke="url(#paint0_linear_7100_2563)"
          strokeOpacity="0.56"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7100_2563"
            x1="278"
            y1="123"
            x2="0.650367"
            y2="-113.59"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.54" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.428571" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const HightlightTopLeft = () => {
  return (
    <div className="absolute left-0 top-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="274" height="156" viewBox="0 0 274 156" fill="none">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M-4 155H173C228.228 155 273 110.228 273 55V-82"
          stroke="url(#paint0_linear_7100_2562)"
          strokeOpacity="0.32"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7100_2562"
            x1="-4"
            y1="155"
            x2="273.35"
            y2="-81.5901"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.54" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.428571" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const HightlightBottomLeft = () => {
  return (
    <div className="absolute bottom-0 left-0 hidden md:block">
      <svg xmlns="http://www.w3.org/2000/svg" width="94" height="319" viewBox="0 0 94 319" fill="none">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M-184 1H-7.00001C48.2285 1 93 45.7715 93 101V511"
          stroke="url(#paint0_linear_7100_2564)"
          strokeOpacity="0.56"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7100_2564"
            x1="-184"
            y1="1"
            x2="230.098"
            y2="165.154"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.54" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.428571" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const HightlightRight = () => {
  return (
    <div className="absolute right-0 hidden md:block">
      <svg width="231" height="238" viewBox="0 0 231 238" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M278 1H101C45.7715 1 1.00001 45.7715 1.00001 101V238"
          stroke="url(#paint0_linear_7100_2561)"
          strokeOpacity="0.32"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7100_2561"
            x1="278"
            y1="1"
            x2="0.650367"
            y2="237.59"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.54" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.428571" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
const HightlightLeft = () => {
  return (
    <div className="absolute bottom-0 left-0 md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="94" height="861" viewBox="0 0 94 861" fill="none">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M-184 1H-7.00001C48.2285 1 93 45.7715 93 101V861"
          stroke="url(#paint0_linear_7204_20588)"
          strokeOpacity="0.56"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7204_20588"
            x1="-184"
            y1="1"
            x2="270.076"
            y2="107.745"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.54" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const HeroBottomLeft = () => {
  return (
    <div className="absolute bottom-0 left-[0] md:block">
      <svg width="304" height="265" viewBox="0 0 304 265" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M-253 1H203C258.228 1 303 45.7715 303 101V476"
          stroke="url(#paint0_linear_7088_15013)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7088_15013"
            x1="120.735"
            y1="1.00001"
            x2="225.88"
            y2="141.957"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D946EF" stopOpacity="0.4" />
            <stop offset="0.369792" stopColor="#D946EF" />
            <stop offset="0.640625" stopColor="#D946EF" />
            <stop offset="1" stopColor="#D946EF" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const BackgroundHero = () => {
  return (
    <>
      <HeroBottomLeft />
    </>
  );
};

export const BackgroundHiglight = () => {
  return (
    <>
      <HightlightTopRight />
      <HightlightTopLeft />
      <HightlightRight />
      <HightlightLeft />
      <HightlightBottomLeft />
    </>
  );
};
