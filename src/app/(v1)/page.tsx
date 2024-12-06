import HeroSection from './homepage/components/HeroSection';
import Highlights from './homepage/components/Highlights';
import IntegrateSection from './homepage/components/IntegrateSection';
import ProductsSection from './homepage/components/ProductsSection';
import ScaleSection from './homepage/components/ScaleSection';
import StoriesSection from './homepage/components/StoriesSection';

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <Highlights />
      <ProductsSection />
      <ScaleSection />
      <IntegrateSection />
      <StoriesSection />
    </>
  );
};

export default Homepage;
