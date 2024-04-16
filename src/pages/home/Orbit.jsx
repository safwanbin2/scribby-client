import Lottie from "lottie-react";
import React from "react";
import orbit from "../../assets/orbit.json";

const Orbit = () => {
  return (
    <div className="py-20 flex justify-between items-center flex-col overflow-hidden space-y-16">
      <div className=" w-11/12 md:w-10/12 lg:w-[1100px] mx-auto flex flex-col justify-center items-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center ">
          <div className="">
            <Lottie loop={true} animationData={orbit} />
          </div>
          <div className="space-y-4">
            <h2 className="hero-title text-4xl md:text-5xl font-medium bg-gradient-to-r from-secondary to-neutral">
              Built with Substrate Framework
            </h2>
            <p className="text-xl text-secondary">
              Reef chain features next-gen blockchain technology, utilizing
              Nominated Proof of Stake consensus, EVM extensions, on-chain
              upgradability, libp2p networking and state of the art
              cryptography.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orbit;
