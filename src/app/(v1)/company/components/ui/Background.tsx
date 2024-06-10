'use client';

import React from 'react';
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

const HeroTopLeft = () => {
  return (
    <div className="absolute -top-1/2 left-0 md:-top-12">
      <svg xmlns="http://www.w3.org/2000/svg" width="88" height="483" viewBox="0 0 88 483" fill="none">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M-156 482H-13C42.2285 482 87 437.228 87 382V-27"
          stroke="url(#paint0_linear_7100_2013)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7100_2013"
            x1="-77.396"
            y1="482"
            x2="2.57723"
            y2="460.428"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F59E0B" stopOpacity="0.4" />
            <stop offset="0.369792" stopColor="#F59E0B" />
            <stop offset="0.640625" stopColor="#F59E0B" />
            <stop offset="1" stopColor="#F59E0B" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const HeroTopRight = () => {
  return (
    <div className="absolute right-0 top-0 md:-top-12 md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="31" height="205" viewBox="0 0 31 205" fill="none">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M105 204H101C45.7715 204 1 159.228 1 104V-95"
          stroke="url(#paint0_linear_7204_20031)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7204_20031"
            x1="35.0927"
            y1="204"
            x2="-12.3862"
            y2="185.086"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0171FF" stopOpacity="0.4" />
            <stop offset="0.369792" stopColor="#0171FF" />
            <stop offset="0.640625" stopColor="#0171FF" />
            <stop offset="1" stopColor="#0171FF" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const HeroBottomLeft = () => {
  return (
    <div className="absolute bottom-0 left-0 hidden md:block">
      <svg xmlns="http://www.w3.org/2000/svg" width="580" height="207" viewBox="0 0 580 207" fill="none">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M-31 1H479C534.228 1 579 45.7715 579 101V476"
          stroke="url(#paint0_linear_7100_2012)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7100_2012"
            x1="379.033"
            y1="1.00001"
            x2="481.041"
            y2="151.033"
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

const HeroBottomRight = () => {
  return (
    <div className="absolute bottom-10 right-0 md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="496" viewBox="0 0 21 496" fill="none">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M176 1H101C45.7715 1 0.999996 45.7715 0.999996 101V496"
          stroke="url(#paint0_linear_7204_20032)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7204_20032"
            x1="1.00001"
            y1="169.3"
            x2="-75.6663"
            y2="345.61"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#14B8A6" stopOpacity="0.4" />
            <stop offset="0.369792" stopColor="#14B8A6" />
            <stop offset="0.640625" stopColor="#14B8A6" />
            <stop offset="1" stopColor="#14B8A6" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const BackgroundHero = () => {
  return (
    <>
      <HeroTopLeft />
      <HeroTopRight />
      <HeroBottomLeft />
      <HeroBottomRight />
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
