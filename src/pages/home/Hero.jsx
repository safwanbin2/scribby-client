import hero from "../../assets/hero.json";
import Lottie from "lottie-react";

const Hero = () => {
  return (
    <div className="min-h-screen w-full py-20">
      <div className="min-h-screen w-11/12 md:w-10/12 lg:w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div className="w-10/12 md:w-full">
          <Lottie className="z-0" loop={true} animationData={hero} />
        </div>
        <div className="space-y-4 ">
          <h2 className="hero-title text-6xl md:text-[5rem] lg:text-[6rem] font-semibold bg-gradient-to-r from-secondary to-neutral">
            Reliable <br /> Extensible <br /> Effecient <br /> Fast.
          </h2>
          <p className="text-xl md:text-3xl text-secondary">
            Blockchain for DeFi, NFT & Gaming
          </p>
          <button className="p-btn rounded-full text-sm block md:hidden">
            Cribby Web App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
