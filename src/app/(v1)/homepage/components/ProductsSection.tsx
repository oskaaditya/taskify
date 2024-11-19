import { productsHomeV1List } from '@/app/constants';
import CardProducts from './ui/CardProducts';

const ProductsSection = () => {
  return (
    <div className="relative overflow-hidden bg-neutral-50 px-5 pt-14 md:py-20 md:pb-40">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[647px] space-y-4 text-center">
          <p className="text-sm font-medium uppercase text-primary-500 md:text-base">PRODUCTS</p>
          <h2 className="text-h3 font-medium md:text-h2">Manage complex work easily</h2>
          <p className="mx-auto max-w-[495px] text-sm text-neutral-500 md:px-12 md:text-base">
            Tweak anything and everything to ensure we will fits your business, not the other way around.
          </p>
        </div>
        <div className="mt-14">
          <div className="space-y-16">
            {productsHomeV1List.map((feature) => {
              return (
                <CardProducts
                  key={feature.id}
                  id={feature.id}
                  title={feature.title}
                  description={feature.description}
                  image={feature.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
