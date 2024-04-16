import React from "react";
import Lottie from "lottie-react";
import circle from "../../assets/building.json";
import travel from "../../assets/travel.json";
import { IoMdSend } from "react-icons/io";

const GovernedBy = () => {
  return (
    <>
      <div className="py-20 bg-gradient-to-b from-neutral to-secondary  flex justify-center items-center flex-col overflow-hidden space-y-12">
        <div className="w-11/12 mx-auto text-white text-center space-y-5">
          <h2 className="text-4xl md:text-6xl md:leading-[5rem] tracking-wide">
            Governed by the <br /> Cribby community
          </h2>
        </div>
        <div className="w-11/12 md:w-10/12 lg:w-[1100px] mx-auto">
          <Lottie className="" animationData={circle} />
        </div>
      </div>
      <div className="py-20 bg-secondary  flex justify-center items-center flex-col overflow-hidden space-y-12">
        <div className=" w-11/12 md:w-10/12 lg:w-[1100px] mx-auto flex flex-col justify-center items-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-36">
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-6/12 md:w-auto mx-auto">
              <div className="bg-primary p-2 rounded-box ">
                <Lottie className="" animationData={travel} />
              </div>
              <div className="space-y-4 text-center md:text-start">
                <h3 className="text-pink text-xl md:text-2xl font-medium">
                  Cribby Card
                </h3>
                <p className="font-medium text-white tracking-wide text-sm md:text-base">
                  Airbnb is a global online marketplace that connects travelers
                  seeking unique accommodations with hosts offering a variety of
                  lodging options.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-6/12 md:w-auto mx-auto">
              <div className="bg-primary p-2 rounded-box ">
                <Lottie className="" animationData={travel} />
              </div>
              <div className="space-y-4 text-center md:text-start">
                <h3 className="text-pink text-xl md:text-2xl font-medium">
                  Cribby Card
                </h3>
                <p className="font-medium text-white tracking-wide text-sm md:text-base">
                  Airbnb is a global online marketplace that connects travelers
                  seeking unique accommodations with hosts offering a variety of
                  lodging options.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-6/12 md:w-auto mx-auto">
              <div className="bg-primary p-2 rounded-box ">
                <Lottie className="" animationData={travel} />
              </div>
              <div className="space-y-4 text-center md:text-start">
                <h3 className="text-pink text-xl md:text-2xl font-medium">
                  Cribby Card
                </h3>
                <p className="font-medium text-white tracking-wide text-sm md:text-base">
                  Airbnb is a global online marketplace that connects travelers
                  seeking unique accommodations with hosts offering a variety of
                  lodging options.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-6/12 md:w-auto mx-auto">
              <div className="bg-primary p-2 rounded-box ">
                <Lottie className="" animationData={travel} />
              </div>
              <div className="space-y-4 text-center md:text-start">
                <h3 className="text-pink text-xl md:text-2xl font-medium">
                  Cribby Card
                </h3>
                <p className="font-medium text-white tracking-wide text-sm md:text-base">
                  Airbnb is a global online marketplace that connects travelers
                  seeking unique accommodations with hosts offering a variety of
                  lodging options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-secondary  flex justify-center items-center flex-col overflow-hidden space-y-12">
        <div className="w-11/12 md:w-10/12 lg:w-[1100px] mx-auto flex justify-center items-start flex-col space-y-16">
          <h1 className="text-white">
            <span className="text-[4.5rem] md:text-[8rem] lg:text-[10rem] leading-[4.5rem] md:leading-[8rem] lg:leading-[10rem]">
              Join the
            </span>
            <br />
            <span className="text-[4.5rem] md:text-[8rem] lg:text-[10rem] xl:text-[13rem] leading-[4.5rem] md:leading-[8rem] lg:leading-[10rem] xl:leading-[13rem]">
              Community
            </span>
          </h1>
          <div className="text-white flex flex-col md:flex-row items-start md:items-center  justify-start gap-10">
            <h3 className="text-2xl font-light">
              Participate in Cribby validation and governance.
            </h3>
            <button className="p-btn rounded-full">
              Cribby Governence Intro
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GovernedBy;
