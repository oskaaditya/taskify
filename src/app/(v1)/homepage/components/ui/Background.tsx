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
      <svg width="274" height="156" viewBox="0 0 274 156" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M-4 155H173C228.228 155 273 110.228 273 55V-82"
          stroke="url(#paint0_linear_7084_13268)"
          strokeOpacity="0.32"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7084_13268"
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
      <svg width="172" height="66" viewBox="0 0 172 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M-106 1H71C126.228 1 171 45.7715 171 101V238"
          stroke="url(#paint0_linear_7084_13270)"
          strokeOpacity="0.56"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7084_13270"
            x1="-106"
            y1="1"
            x2="171.35"
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
    <div className="absolute -left-[100%] bottom-0 md:-bottom-[120px] md:-left-[20%]">
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

const FirstProductsBottomLeft = () => {
  return (
    <div className="absolute bottom-0 left-0">
      <svg width="199" height="231" viewBox="0 0 199 231" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M0 1H98C153.228 1 198 45.7715 198 101V238"
          stroke="url(#paint0_linear_7141_6380)"
          strokeOpacity="0.56"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7141_6380"
            x1="0"
            y1="1"
            x2="249.681"
            y2="153.244"
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

const FirstProductsBottomRight = () => {
  return (
    <div className="absolute -bottom-10 right-0">
      <svg width="165" height="218" viewBox="0 0 165 218" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M278 1H101C45.7715 1 1.00001 45.7715 1.00001 101V338"
          stroke="url(#paint0_linear_7141_6379)"
          strokeOpacity="0.32"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7141_6379"
            x1="278"
            y1="1"
            x2="-74.3585"
            y2="212.384"
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

const FirstProductsTopRight = () => {
  return (
    <div className="absolute right-0 top-0">
      <svg width="165" height="238" viewBox="0 0 165 238" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M278 237H101C45.7715 237 1.00001 192.228 1.00001 137V7.689e-06"
          stroke="url(#paint0_linear_7141_6378)"
          strokeOpacity="0.56"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7141_6378"
            x1="278"
            y1="237"
            x2="0.650367"
            y2="0.409868"
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

const SecondProductsBottomRight = () => {
  return (
    <div className="absolute bottom-0 right-0">
      <svg width="190" height="257" viewBox="0 0 190 257" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M190 1H101C45.7715 1 1 45.7715 1 101V382"
          stroke="url(#paint0_linear_7139_6366)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7139_6366"
            x1="1.00001"
            y1="130.54"
            x2="-44.6254"
            y2="277.765"
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
const SecondProductsTopRight = () => {
  return (
    <div className="absolute right-0 top-0">
      <svg width="209" height="213" viewBox="0 0 209 213" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M209 212H101C45.7715 212 1 167.228 1 112V7.27177e-06"
          stroke="url(#paint0_linear_7139_6365)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7139_6365"
            x1="141.718"
            y1="212"
            x2="85.5445"
            y2="180.861"
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

const SecondProductsTopLeft = () => {
  return (
    <div className="absolute left-0 top-0">
      <svg width="217" height="453" viewBox="0 0 217 453" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M0 452H116C171.228 452 216 407.228 216 352V-7.39098e-06"
          stroke="url(#paint0_linear_7139_6364)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7139_6364"
            x1="216"
            y1="298.32"
            x2="271.808"
            y2="124.838"
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

const SecondProductsBottomLeft = () => {
  return (
    <div className="absolute bottom-0 left-0 z-0">
      <svg width="252" height="192" viewBox="0 0 252 192" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M-1 1H151C206.228 1 251 45.7715 251 101V476"
          stroke="url(#paint0_linear_7139_6363)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7139_6363"
            x1="168.391"
            y1="1.00001"
            x2="265.749"
            y2="60.1554"
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

const ThirdProductsTopLeft = () => {
  return (
    <div className="absolute left-0">
      <svg width="198" height="416" viewBox="0 0 198 416" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M-48 1H97C152.228 1 197 45.7715 197 101V496"
          stroke="url(#paint0_linear_7141_6387)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7141_6387"
            x1="197"
            y1="169.3"
            x2="256.387"
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

const ThirdProductsTopRight = () => {
  return (
    <div className="absolute right-0 top-0">
      <svg width="175" height="149" viewBox="0 0 175 149" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M244 148H101C45.7715 148 1 103.228 1 48V-58"
          stroke="url(#paint0_linear_7141_6385)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7141_6385"
            x1="165.396"
            y1="148"
            x2="105.992"
            y2="108.408"
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

const IntegratedTopRight = () => {
  return (
    <div className="absolute right-0 top-0">
      <svg width="162" height="129" viewBox="0 0 162 129" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M243.5 128H100.5C45.2715 128 0.500002 83.2285 0.500002 28V-78"
          stroke="url(#paint0_linear_7088_14844)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7088_14844"
            x1="164.896"
            y1="128"
            x2="105.492"
            y2="88.4077"
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

const IntegratedBottomLeft = () => {
  return (
    <div className="absolute bottom-0 left-0">
      <svg width="63" height="302" viewBox="0 0 63 302" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M-182.5 1H-37.5C17.7285 1 62.5 45.7715 62.5 101V496"
          stroke="url(#paint0_linear_7088_14846)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7088_14846"
            x1="62.5"
            y1="169.3"
            x2="121.887"
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

const IntegratedBottom = () => {
  return (
    <div className="absolute bottom-0 left-0">
      <svg width="341" height="107" viewBox="0 0 341 107" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={pathMotion}
          initial="hidden"
          animate="visible"
          d="M-215.5 1H240.5C295.728 1 340.5 45.7715 340.5 101V476"
          stroke="url(#paint0_linear_7088_14845)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7088_14845"
            x1="158.235"
            y1="1.00001"
            x2="263.38"
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

export const BackgroundFirstProducts = () => {
  return (
    <>
      <FirstProductsBottomLeft />
      <FirstProductsBottomRight />
      <FirstProductsTopRight />
    </>
  );
};

export const BackgroundSecondProducts = () => {
  return (
    <>
      <SecondProductsBottomRight />
      <SecondProductsTopRight />
      <SecondProductsTopLeft />
      <SecondProductsBottomLeft />
    </>
  );
};

export const BackgroundThirdProducts = () => {
  return (
    <>
      <ThirdProductsTopLeft />
      <ThirdProductsTopRight />
    </>
  );
};

export const BackgroundIntegrated = () => {
  return (
    <>
      <IntegratedTopRight />
      <IntegratedBottomLeft />
      <IntegratedBottom />
    </>
  );
};
