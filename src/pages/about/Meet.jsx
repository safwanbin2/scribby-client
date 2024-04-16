import React from "react";
import Lottie from "lottie-react";
import meet from "../../assets/meet.json";

const Meet = () => {
  return (
    <div className="w-full py-20 bg-gradient-to-b from-secondary via-neutral to-secondary">
      <div className="min-h-screen w-11/12 md:w-10/12 lg:w-[1100px] mx-auto flex flex-col-reverse md:grid grid-cols-2 justify-center items-center">
        <div className="col-span-1 space-y-5 text-white">
          <h2 className="text-4xl md:text-6xl font-bold">Meet Cribby</h2>
          <h4 className="text-xl">
            Reef is the future blockchain for DeFi, NFTs, and gaming
          </h4>
          <p className="text-xl">
            Airbnb is a global online marketplace that connects travelers
            seeking unique accommodations with hosts offering a variety of
            lodging options. Founded in 2008 by Brian Chesky, Joe Gebbia, and
            Nathan Blecharczyk.
          </p>
          <p className="text-xl">
            Airbnb is a global online marketplace that connects travelers
            seeking unique accommodations with hosts offering a variety of
            lodging options. Founded in 2008 by Brian Chesky, Joe Gebbia, and
            Nathan Blecharczyk.
          </p>
        </div>
        <Lottie
          className="col-span-1 md:h-screen transform rotate-180"
          animationData={meet}
        />
      </div>
    </div>
  );
};

export default Meet;
