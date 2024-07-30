import { pricingPlanList } from '@/app/constants';
import CardPlan from './ui/CardPlan';

const PlanSection = () => {
  return (
    <section className=" bg-neutral-50 px-5 py-10 md:pb-20 md:pt-6 xl:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <CardPlan data={pricingPlanList} />
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
