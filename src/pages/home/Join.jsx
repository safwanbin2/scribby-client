import React from "react";
import { IoMdSend } from "react-icons/io";

const Join = () => {
  return (
    <div className="py-20 w-full">
      <div className="w-11/12 mx-auto flex justify-center items-start flex-col space-y-16">
        <h1 className="hero-title bg-gradient-to-r from-secondary to-neutral">
          <span className="text-[5rem] md:text-[10rem] leading-[5rem] md:leading-[10rem]">
            Join the
          </span>
          <br />
          <span className="text-[8rem] md:text-[15rem] leading-[8rem] md:leading-[15rem]">
            Cribby.
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 md:gap-0">
          <div className="space-y-8 md:pe-36 md:border-e md:border-pink">
            <div className="space-y-4">
              <h4 className="text-primary text-2xl font-medium">
                Sign up to get the latest from Reef
              </h4>
              <p className="">
                Get notified about major developments in <br /> Cribby
                Ecosystem.
              </p>
            </div>
            <form className="flex p-3  border border-primary rounded-full">
              <input
                type="text"
                className="input-primary bg-transparent w-full text-primary focus:outline-none "
                placeholder="Enter your email"
              />
              <button className="p-2 bg-primary rounded-full">
                <IoMdSend className="size-6 text-white" />
              </button>
            </form>
          </div>
          <div className="space-y-8 md:ps-36">
            <div className="space-y-4">
              <h4 className="text-primary text-2xl font-medium">
                Build on Reef
              </h4>
              <p className="">
                Create a new DeFi app or port your existing <br /> Solidity
                project to Reef chain.
              </p>
            </div>
            <div>
              <button className="p-btn rounded-full">Quick Start</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
