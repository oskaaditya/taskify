import { productsList } from '@/app/constants';
import CardProducts from './ui/CardProducts';

const ProductSection = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-50 px-5 pt-14 md:py-20">
      {/* <BackgroundHero /> */}
      <div className="container mx-auto">
        <div className="space-y-14">
          <div className="space-y-4">
            <p className="font-medium uppercase text-primary-500">PRODUCTS</p>
            <div className="item-start flex w-full flex-col justify-between gap-4">
              <h1 className="max-w-[647px] text-[28px] font-medium md:text-h2">Manage complex work easily</h1>
              <div className="space-y-6">
                <p className="max-w-[490px] text-base font-medium text-neutral-500">
                  Tweak anything and everything to ensure we will fits your business, not the other way around.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
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
        </div>
      </div>
    </section>
  );
};

export default ProductSection;