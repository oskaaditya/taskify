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

const BackgroundHeroTopLeft = () => {
  return (
    <div className="absolute right-0 top-0 hidden md:block">
      <svg xmlns="http://www.w3.org/2000/svg" width="287" height="205" viewBox="0 0 287 205" fill="none">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M444 204H101C45.7715 204 0.999991 159.228 0.999991 104V-131"
          stroke="url(#paint0_linear_7105_5963)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7105_5963"
            x1="146.222"
            y1="204"
            x2="75.0762"
            y2="96.2491"
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

const BackgroundHeroBottomRight = () => {
  return (
    <div className="absolute -right-[155px] -top-[100px] md:bottom-0 md:right-0 md:top-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="188" height="427" viewBox="0 0 188 427" fill="none">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M246 1H101C45.7715 1 0.999996 45.7715 0.999996 101V496"
          stroke="url(#paint0_linear_7105_5962)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7105_5962"
            x1="1.00001"
            y1="169.3"
            x2="-58.387"
            y2="360.502"
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

const BackgroundHeroBottomLeft = () => {
  return (
    <div className="absolute bottom-0 left-0 hidden md:block">
      <svg xmlns="http://www.w3.org/2000/svg" width="88" height="480" viewBox="0 0 88 480" fill="none">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M-156 482H-13C42.2285 482 87 437.228 87 382V-27"
          stroke="url(#paint0_linear_7105_5965)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7105_5965"
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

const BackgroundCardPlanEnterpriseTopRight = () => {
  return (
    <div className="absolute -right-[120px] top-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="159" height="223" viewBox="0 0 159 223" fill="none">
        <path
          d="M278 222H101C45.7715 222 1.00001 177.228 1.00001 122V-15"
          stroke="url(#paint0_linear_7116_6190)"
          strokeOpacity="0.56"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7116_6190"
            x1="278"
            y1="222"
            x2="0.650367"
            y2="-14.5901"
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

const BackgroundCardPlanEnterpriseBottomRight = () => {
  return (
    <div className="absolute -right-[120px] bottom-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="209" height="238" viewBox="0 0 209 238" fill="none">
        <path
          d="M278 1H101C45.7715 1 1.00001 45.7715 1.00001 101V238"
          stroke="url(#paint0_linear_7116_6188)"
          strokeOpacity="0.32"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7116_6188"
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

const BackgroundCardPlanEnterpriseBottomLeft = () => {
  return (
    <div className="absolute -bottom-full -left-[120px]">
      <svg xmlns="http://www.w3.org/2000/svg" width="278" height="509" viewBox="0 0 278 509" fill="none">
        <path
          d="M0 1H177C232.228 1 277 45.7715 277 101V511"
          stroke="url(#paint0_linear_7116_6191)"
          strokeOpacity="0.56"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7116_6191"
            x1="0"
            y1="1"
            x2="414.098"
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
const BackgroundCardPlanEnterpriseTopLeft = () => {
  return (
    <div className="absolute -left-[120px] -top-8">
      <svg xmlns="http://www.w3.org/2000/svg" width="278" height="103" viewBox="0 0 278 103" fill="none">
        <path
          d="M0 102H177C232.228 102 277 57.2285 277 2V-135"
          stroke="url(#paint0_linear_7116_6189)"
          strokeOpacity="0.32"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7116_6189"
            x1="0"
            y1="102"
            x2="277.35"
            y2="-134.59"
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

export const BackgroundHeroPattern = () => {
  return (
    <>
      <BackgroundHeroTopLeft />
      <BackgroundHeroBottomLeft />
      <BackgroundHeroBottomRight />
    </>
  );
};

export const BackgroundPlanEnterprisePattern = () => {
  return (
    <>
      <BackgroundCardPlanEnterpriseTopRight />
      <BackgroundCardPlanEnterpriseBottomRight />
      <BackgroundCardPlanEnterpriseBottomLeft />
      <BackgroundCardPlanEnterpriseTopLeft />
    </>
  );
};
