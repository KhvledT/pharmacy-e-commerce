import facts1 from '@/assets/icons/facts1.svg';
import facts2 from '@/assets/icons/facts2.svg';
import facts3 from '@/assets/icons/facts3.svg';
import Image from 'next/image';

interface Stat {
  id: number;
  icon: any;
  count: string;
  label1: string;
  label2: string;
}

const Facts = () => {
  const stats: Stat[] = [
    {
      id: 1,
      icon: facts1,
      count: '14K+',
      label1: 'Orders',      
      label2: 'Completed',
    },
    {
      id: 2,
      icon: facts2,
      count: '8K+',
      label1: 'Happy',      
      label2: 'Customers',
    },
    {
      id: 3,
      icon: facts3,
      count: '12K+',
      label1: 'Positive',     
      label2: 'Reviews',
    },
  ];

  return (
    <section className="w-full px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#1053D4] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 text-white flex flex-col items-start justify-between"
            >
              {/* Top Row: Icon + Count */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white bg-opacity-20 rounded-sm flex items-center justify-center">
                  <Image src={stat.icon} alt={'icon'} />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold">
                  {stat.count}
                </h3>
              </div>

              {/* Bottom Label */}
              <p className="text-base md:text-lg lg:text-xl text-white text-opacity-90 leading-snug font-bold">
                {stat.label1} <br /> {stat.label2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;
