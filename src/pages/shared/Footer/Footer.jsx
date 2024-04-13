import React from "react";
import { Link } from "react-router-dom";
import { IoMdSend } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-secondary py-10">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-center">
          <Link
            style={{ fontFamily: "Lobster, sans-serif" }}
            className="footer-title"
          >
            Cribby
          </Link>
          <div className="space-y-8">
            <div className="font-medium">
              <h4 className="text-pink">
                Get the latest updates on products and developments.
              </h4>
              <p className="text-white">
                Be the first to know about the latest from Reef.
              </p>
            </div>
            <form className="flex p-3  border border-primary rounded-full">
              <input
                type="text"
                className="input-item bg-transparent w-full text-white focus:outline-none "
                placeholder="Enter your email"
              />
              <button className="p-2 bg-primary rounded-full">
                <IoMdSend className="size-6 text-white" />
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-between items-start py-10 border-gray border-b-2 border-dashed">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-pink">
              Getting Started
            </h2>
            <ul className="text-white space-y-2">
              <li>
                <Link> Introduction</Link>
              </li>
              <li>
                <Link> Ecosystem</Link>
              </li>
              <li>
                <Link> Browser</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-pink">Ecosystem</h2>
            <ul className="text-white space-y-2">
              <li>
                <Link>Demo</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-pink">Cribby Web App</h2>
            <ul className="text-white space-y-2">
              <li>
                <Link> Introduction</Link>
              </li>
              <li>
                <Link> Ecosystem</Link>
              </li>
              <li>
                <Link> Browser</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-pink">Developers</h2>
            <ul className="text-white space-y-2">
              <li>
                <Link> Introduction</Link>
              </li>
              <li>
                <Link> Ecosystem</Link>
              </li>
              <li>
                <Link> Browser</Link>
              </li>
              <li>
                <Link> Ecosystem</Link>
              </li>
              <li>
                <Link> Browser</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-pink">Governance</h2>
            <ul className="text-white space-y-2">
              <li>
                <Link> Introduction</Link>
              </li>
              <li>
                <Link> Ecosystem</Link>
              </li>
              <li>
                <Link> Browser</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-start py-10 ">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-pink">
              Build on Cribby
            </h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
              laboriosam.
            </p>
            <button className="p-btn rounded-full">Developer guide</button>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-pink">
              Become a validator
            </h2>
            <p className="text-white">
              Become a validator and help secure the future of Reef network.
            </p>
            <button className="p-btn rounded-full">Validator guide</button>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-pink">
              Copyright © 2024, cribby
            </h2>
            <ul className="text-white space-y-2">
              <li>
                <Link>Privacy & Policy</Link>
              </li>
              <li>
                <Link>Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
