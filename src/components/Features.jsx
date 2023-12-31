import { FeatureCards } from '@/constants';
import Image from 'next/image';

const Features = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-8 md:mb-12">
          <h2 className="section-purple-heading">Our Team by the numbers</h2>
          <h1 className="section-heading  text-center">
            Powerful features to help you manage all your leads
          </h1>
        </div>
        {/* text - end */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 space-x-2">
          {FeatureCards.map((card, index) => (
            <div key={index} className="card-body items-center p-4">
              <Image
                src={card.icon}
                width={53}
                height={45}
                alt={card.heading}
                className="mx-auto mb-2"
              />
              <div className="card-heading text-center text-lg font-semibold mb-1">
                {card.heading}
              </div>
              <div className="card-description text-center text-sm">
                {card.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
