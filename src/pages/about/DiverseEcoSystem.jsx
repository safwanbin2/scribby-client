import React from "react";
import sqwid from "../../assets/sqwid.png";

const DiverseEcoSystem = () => {
  return (
    <div className="py-20 flex justify-center items-center flex-col overflow-hidden space-y-16">
      <div className="w-11/12 mx-auto text-center space-y-10">
        <h2 className="text-5xl hero-title bg-gradient-to-r from-secondary to-neutral">
          A Diverse Ecosystem
        </h2>
        <p className="text-xl ">
          Welcome, builders and collaborators, to ReefChain!
        </p>
      </div>
      <div className="w-11/12 md:w-10/12 lg:w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-36">
        <img className="w-[130px]" src={sqwid} alt="" />
        <img className="w-[130px]" src={sqwid} alt="" />
        <img className="w-[130px]" src={sqwid} alt="" />
        <img className="w-[130px]" src={sqwid} alt="" />
        <img className="w-[130px]" src={sqwid} alt="" />
        <img className="w-[130px]" src={sqwid} alt="" />
        <img className="w-[130px]" src={sqwid} alt="" />
        <img className="w-[130px]" src={sqwid} alt="" />
      </div>
    </div>
  );
};

export default DiverseEcoSystem;
