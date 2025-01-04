import HeroSection from './homepage/components/HeroSection';
import IntegrateSection from './homepage/components/IntegrateSection';
import ProductSection from './homepage/components/ProductSection';
import ResponsiveSection from './homepage/components/ResponsiveSection';
import StoriesSection from './homepage/components/StoriesSection';
import TimelineSection from './homepage/components/TimelineSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductSection />
      <TimelineSection />
      <ResponsiveSection />
      <IntegrateSection />
      <StoriesSection />
    </>
  );
};

export default Home;
