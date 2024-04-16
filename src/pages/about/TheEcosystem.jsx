import React from "react";
import Lottie from "lottie-react";
import placeholder from "../../assets/placeholder.json";

const TheEcosystem = () => {
  // soon
  return (
    <div className="w-full py-20">
      <div className="min-h-screen w-11/12 md:w-10/12 lg:w-[1100px] mx-auto flex flex-col justify-center items-center ">
        <h2 className="text-3xl md:text-5xl pb-20">The Cribby Ecosystem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-36">
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="bg-primary p-2 rounded-box">
              <div className="overflow-hidden rounded-box">
                <Lottie animationData={placeholder} />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-pink text-2xl font-medium">Cribby Card</h3>
              <p className="font-medium">
                Airbnb is a global online marketplace that connects travelers
                seeking unique accommodations with hosts offering a variety of
                lodging options. Founded in 2008 by Brian Chesky, Joe Gebbia,
                and Nathan Blecharczyk.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="bg-primary p-2 rounded-box">
              <div className="overflow-hidden rounded-box">
                <Lottie animationData={placeholder} />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-pink text-2xl font-medium">Cribby Card</h3>
              <p className="font-medium">
                Airbnb is a global online marketplace that connects travelers
                seeking unique accommodations with hosts offering a variety of
                lodging options. Founded in 2008 by Brian Chesky, Joe Gebbia,
                and Nathan Blecharczyk.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="bg-primary p-2 rounded-box">
              <div className="overflow-hidden rounded-box">
                <Lottie animationData={placeholder} />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-pink text-2xl font-medium">Cribby Card</h3>
              <p className="font-medium">
                Airbnb is a global online marketplace that connects travelers
                seeking unique accommodations with hosts offering a variety of
                lodging options. Founded in 2008 by Brian Chesky, Joe Gebbia,
                and Nathan Blecharczyk.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="bg-primary p-2 rounded-box">
              <div className="overflow-hidden rounded-box">
                <Lottie animationData={placeholder} />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-pink text-2xl font-medium">Cribby Card</h3>
              <p className="font-medium">
                Airbnb is a global online marketplace that connects travelers
                seeking unique accommodations with hosts offering a variety of
                lodging options. Founded in 2008 by Brian Chesky, Joe Gebbia,
                and Nathan Blecharczyk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheEcosystem;
