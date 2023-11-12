import { productivityCardData } from '@/constants';
import Image from 'next/image';

const Productivity = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 ">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-2 md:mb-4">
          <h2 className="section-purple-heading">
            Multiple Integrations At One Place
          </h2>
          <h1 className="section-heading  text-center">
            Integrations and Extensions
          </h1>
          <div className="flex flex-col md:flex-row justify-center mx-auto md:gap-6">
            <div className="builder-button">Sample</div>
            <div className="builder-button">Sample</div>
            <div className="builder-button">Sample</div>
          </div>
          <Image
            width={1239}
            height={720}
            alt="Integrations and Extensions"
            src="/ProductivityBuilder.png"
            className="-my-20"
          />
        </div>
        {/* text - end */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 space-x-2">
          {productivityCardData.map((card, index) => (
            <div key={index} className="card-body items-start p-4">
              <div className="flex gap-3 items-center">
                <Image
                  src={card.imageSrc}
                  width={20}
                  height={1}
                  alt={card.title}
                  className="flex-shrink-0" // Prevent the image from growing
                />
                <div className="card-heading text-lg font-semibold">
                  {card.title}
                </div>
              </div>
              <div className="card-description text-sm">{card.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productivity;
