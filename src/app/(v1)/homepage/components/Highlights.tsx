import { highlightTagList } from '@/app/constants';
import { BackgroundHiglight } from './ui/Background';

const Highlights = () => {
  return (
    <section className="relative bg-primary-500 px-5 py-14">
      <BackgroundHiglight />
      <div className="container mx-auto">
        <div className="relative flex flex-col justify-center gap-10 px-6 md:flex-row md:px-0 lg:gap-24">
          {highlightTagList.map((item, index) => (
            <div key={index} className="flex w-auto items-start gap-4 font-medium text-white md:gap-6">
              {item.Icon && <item.Icon className="size-6 md:size-12" />}
              <div className="space-y-1 text-start">
                <p className="text-2xl">{item.title}</p>
                <p className="text-lg text-primary-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
