import { BackgroundHiglight } from './ui/Background';

interface IHightlights {
  total: number;
  title: string;
  description: string;
}
const highlightList: IHightlights[] = [
  {
    total: 200,
    title: 'Companies',
    description: 'using our products',
  },
  {
    total: 100,
    title: 'Active',
    description: 'Product Manager',
  },
  {
    total: 4.8,
    title: 'Rating',
    description: 'from over 500K users',
  },
];

const Highlights = () => {
  return (
    <section className="relative bg-primary-500 py-14 md:px-5">
      <BackgroundHiglight />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-24">
          {highlightList.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2 font-medium text-white md:gap-6 lg:flex-row">
              <p className="inline-flex text-[56px]">
                {item.title === 'Companies'
                  ? `${item.total}+`
                  : item.title === 'Active'
                    ? `${item.total}K+`
                    : item.total}
              </p>
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
