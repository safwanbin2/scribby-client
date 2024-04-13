import hero from "../../assets/hero.json";
import Lottie from "lottie-react";

const Hero = () => {
  return (
    <div className="min-h-screen w-full ">
      <div className="h-full w-11/12 mx-auto grid grid-cols-2 justify-center items-center">
        <div className="">
          <Lottie loop={true} animationData={hero} />
        </div>
        <div className="space-y-4">
          <h2 className="hero-title text-9xl font-semibold bg-gradient-to-r from-secondary to-neutral">
            Reliable <br /> Extensible <br /> Effecient <br /> Fast
          </h2>
          <p className="text-3xl text-secondary">
            Blockchain for DeFi, NFT & Gaming
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
