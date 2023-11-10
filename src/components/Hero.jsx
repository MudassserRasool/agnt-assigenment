import Image from 'next/image';

const Hero = () => {
  return (
    <div className="mx-auto container px-4 md:px-8 mt-12">
      <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row items-center">
        {/* content - start */}
        <div className="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
          <div class="bell-button">
            <Image src="/BellIcon.png" width={14} height={15} alt="Bell Icon" />
            <p className="coming-soon">Cooming Soon!</p>
          </div>

          <h1 className="section-heading">
            Your AI Sidekick is Just Around the Corner!
          </h1>
          <p className="hero-description">
            Our AI Agent SaaS platform is on the horizon, ready to transform the
            way you work and interact. Sign up now to be the first to experience
            it.
          </p>
          <form className="flex w-full gap-4 md:max-w-md">
            <div className="relative">
              <input
                placeholder="Email"
                className="w-96 pl-8 h-20 bg-gray-900 rounded-3xl bg-black-70"
              />
              <button className="absolute right-3 top-2 px-4 py-2  bg-purple-60   w-36 h-16  rounded-2xl">
                Join Beta
              </button>
            </div>
            <button className="discord-button ">
              <Image
                src="/DiscordIcon.png"
                height={30}
                width={30}
                alt="Discord Icon"
              />
              <p className="text-xl font-semibold ">Discord</p>
            </button>
          </form>
        </div>
        {/* content - end */}
        {/* image - start */}
        <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
          <Image
            src="/HeroAiImage.svg"
            width={601}
            height={433}
            alt="Ai Image"
          />
        </div>
        {/* image - end */}
      </section>
    </div>
  );
};

export default Hero;
