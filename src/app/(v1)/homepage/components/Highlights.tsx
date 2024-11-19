import { highlightTagList } from '@/app/constants';
import { BackgroundHiglight } from './ui/Background';

const Highlights = () => {
  return (
    <section className="relative bg-primary-500 py-14 md:px-5">
      <BackgroundHiglight />
      <div className="container mx-auto">
        <div className="flex justify-center gap-10 lg:grid-cols-3 lg:gap-24">
          {highlightTagList.map((item, index) => (
            <div
              key={index}
              className="flex w-auto flex-col items-start gap-2 font-medium text-white md:gap-6 lg:flex-row"
            >
              {item.Icon && <item.Icon className="size-12" />}
              <div className="space-y-1 text-center md:text-start">
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
