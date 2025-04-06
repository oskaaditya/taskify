'use client';
import { containerVariants, fadeUpChildVariants } from '@/animations/variants';
import { productsList } from '@/app/constants';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { motion } from 'framer-motion';
import CardProducts from './ui/CardProducts';
import Slider from './ui/Slider';

const ProductSection = () => {
  const [ref, animationState] = useInViewAnimation(containerVariants);
  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="initial"
      animate={animationState}
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="relative overflow-hidden bg-neutral-50 px-5 pt-14 md:py-20"
    >
      {/* <BackgroundHero /> */}
      <div className="container mx-auto">
        <div className="space-y-14">
          <div className="space-y-4">
            <motion.p variants={fadeUpChildVariants} className="font-medium uppercase text-primary-500">
              PRODUCTS
            </motion.p>
            <div className="item-start flex w-full flex-col justify-between gap-4">
              <motion.h1 variants={fadeUpChildVariants} className="max-w-[647px] text-[28px] font-medium md:text-h2">
                Manage complex work easily
              </motion.h1>
              <div className="space-y-6">
                <motion.p
                  variants={fadeUpChildVariants}
                  className="max-w-[490px] text-base font-medium text-neutral-500"
                >
                  Tweak anything and everything to ensure we will fits your business, not the other way around.
                </motion.p>
              </div>
            </div>
          </div>
          <div className="hidden grid-cols-2 gap-8 lg:grid">
            {productsList.map((item) => (
              <CardProducts
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
          <div className="md:hidden">
            <Slider data={productsList} />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProductSection;
