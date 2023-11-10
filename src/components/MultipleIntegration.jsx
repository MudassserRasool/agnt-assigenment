import Image from 'next/image';

const MultipleIntegration = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 mt-28 ">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-8 md:mb-12">
          <h2 className="section-purple-heading">
            Multiple Integrations At One Place
          </h2>
          <h1 className="section-heading  text-center">
            Integrations and Extensions
          </h1>

          <Image width={1227} height={404} alt="Integrations and Extensions" src='/MultipleIntegrationImage.png' className='mt-16'/>
          <div className="btn-integration">Be First To Join Beta</div>

        </div>
        {/* text - end */}
      </div>
    </div>
  );
};

export default MultipleIntegration;
