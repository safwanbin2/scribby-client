import React from "react";
import Lottie from "lottie-react";
import circle from "../../assets/circle.json";
import travel from "../../assets/travel.json";

const BestOfAllWorlds = () => {
  return (
    <>
      <div className=" py-20 bg-gradient-to-b from-secondary via-neutral to-secondary flex justify-center items-center flex-col overflow-hidden space-y-12">
        <div className="w-11/12 mx-auto text-white text-center space-y-5">
          <h2 className="text-5xl font-medium">Best of all worlds</h2>
          <p className="text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque{" "}
            <br />
            dolores fuga atque non molestiae accusantium?
          </p>
        </div>
        <div className="scrolling-text-container">
          <p className="scrolling-text text-9xl font-bold text-secondary">
            Introduction to Cribby.com.
          </p>
        </div>
        <div className="md:w-6/12 transform md:-translate-y-32 relative">
          <Lottie className="" animationData={circle} />
          <h2
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white"
            style={{ fontFamily: "Lobster, sans-serif" }}
          >
            Cribby.
          </h2>
        </div>
      </div>
      <div className=" py-20 bg-secondary flex justify-center items-center flex-col overflow-hidden space-y-16">
        <div className="w-11/12 mx-auto text-white text-center space-y-5">
          <h2 className="text-5xl font-medium">Introduction to Cribby</h2>
          <p className="text-xl ">
            Reef chain is an EVM compatible blockchain for DeFi. It is fast,
            scalable, <br /> has low transaction costs and does no wasteful
            mining. It is built with <br /> Substrate Framework and comes with
            on-chain governance.
          </p>
        </div>
        <div className="w-11/12 mx-auto flex flex-col justify-center items-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-36">
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
              <div className="bg-primary p-2 rounded-box">
                <Lottie animationData={travel} />
              </div>
              <div className="space-y-4">
                <h3 className="text-pink text-2xl font-medium">Cribby Card</h3>
                <p className="font-medium text-white tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis mollitia illum aspernatur esse aut commodi aliquam
                  itaque dignissimos officia alias.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
              <div className="bg-primary p-2 rounded-box">
                <Lottie animationData={travel} />
              </div>
              <div className="space-y-4">
                <h3 className="text-pink text-2xl font-medium">Cribby Card</h3>
                <p className="font-medium text-white tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis mollitia illum aspernatur esse aut commodi aliquam
                  itaque dignissimos officia alias.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
              <div className="bg-primary p-2 rounded-box">
                <Lottie animationData={travel} />
              </div>
              <div className="space-y-4">
                <h3 className="text-pink text-2xl font-medium">Cribby Card</h3>
                <p className="font-medium text-white tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis mollitia illum aspernatur esse aut commodi aliquam
                  itaque dignissimos officia alias.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
              <div className="bg-primary p-2 rounded-box">
                <Lottie animationData={travel} />
              </div>
              <div className="space-y-4">
                <h3 className="text-pink text-2xl font-medium">Cribby Card</h3>
                <p className="font-medium text-white tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis mollitia illum aspernatur esse aut commodi aliquam
                  itaque dignissimos officia alias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestOfAllWorlds;
