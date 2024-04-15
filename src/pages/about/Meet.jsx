import React from "react";
import Lottie from "lottie-react";
import meet from "../../assets/meet.json";

const Meet = () => {
  return (
    <div className="w-full py-20 bg-gradient-to-b from-secondary via-neutral to-secondary">
      <div className="w-11/12 flex flex-col-reverse md:grid grid-cols-2 justify-center items-center mx-auto">
        <div className="col-span-1 space-y-5 text-white">
          <h2 className="text-4xl md:text-6xl font-bold">Meet Cribby</h2>
          <h4 className="text-xl">
            Reef is the future blockchain for DeFi, NFTs, and gaming
          </h4>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
            impedit odio! Similique, voluptatum dolores libero dignissimos ipsam
            sequi repellendus reiciendis consectetur quod beatae esse
          </p>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            eaque. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Autem natus magnam eos veniam earum beatae sint iste aliquam dolore
            repellat?
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
