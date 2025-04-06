'use client';
import { containerVariants, fadeUpChildVariants } from '@/animations/variants';
import { highlightList } from '@/app/constants';
import CountUp from '@/components/counts-up';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { motion } from 'framer-motion';
import { BackgroundHiglight } from './ui/Background';

const Highlights = () => {
  const [ref, animationState] = useInViewAnimation(containerVariants);
  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="initial"
      animate={animationState}
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-primary-500 py-14 md:px-5"
    >
      <BackgroundHiglight />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-24">
          {highlightList.map((item, index) => (
            <motion.div
              variants={fadeUpChildVariants}
              key={index}
              className="flex flex-col items-center gap-2 font-medium text-white md:gap-6 lg:flex-row"
            >
              <p className="inline-flex text-[56px]">
                {item.title === 'Companies' ? (
                  <>
                    <CountUp
                      from={0}
                      to={item.total}
                      separator=","
                      direction="up"
                      duration={0.2}
                      className="count-up-text"
                    />
                    +
                  </>
                ) : item.title === 'Active' ? (
                  <>
                    <CountUp
                      from={0}
                      to={item.total}
                      separator=","
                      direction="up"
                      duration={0.2}
                      className="count-up-text"
                    />
                    K+
                  </>
                ) : (
                  <CountUp
                    from={0}
                    to={item.total}
                    separator="."
                    direction="up"
                    duration={0.2}
                    className="count-up-text"
                  />
                )}
              </p>
              <div className="space-y-1 text-center md:text-start">
                <p className="text-2xl">{item.title}</p>
                <p className="text-lg text-primary-200">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Highlights;
