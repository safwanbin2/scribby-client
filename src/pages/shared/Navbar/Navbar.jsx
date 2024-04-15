import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { target: "/home", label: "Home" },
    { target: "/about", label: "About Us" },
  ];
  return (
    <>
      <div className="w-full bg-transparent absolute top-0 left-0">
        <header className="py-8 z-10 w-11/12 mx-auto">
          <nav className="flex justify-between items-center max-container">
            <Link
              style={{ fontFamily: "Lobster, sans-serif" }}
              className="text-4xl font-bold text-primary"
            >
              Cribby
            </Link>

            <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
              <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden text-primary">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.target}
                      className="font-montserrat leading-normal text-lg text-slate-gray"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to={"/contact"}
                    className="font-montserrat leading-normal text-lg p-btn rounded-full"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="hidden max-lg:block cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <RxHamburgerMenu className="text-4xl text-primary" />
            </div>
          </nav>
        </header>
        {isMenuOpen && (
          <div className="">
            <nav className="!z-[999] fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto ">
              <div
                className="hidden max-lg:block fixed right-0 top-5  px-8 py-4 cursor-pointer"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <AiOutlineClose className="text-4xl text-primary" />
              </div>
              <ul className=" bg-white lg:hidden flex flex-col items-center justify-center h-full bg-base-100">
                {navLinks.map((item) => (
                  <li key={item.label} className="mb-5">
                    <Link
                      to={item.target}
                      className="font-montserrat leading-normal  text-2xl text-slate-gray"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-5">
                  <Link
                    to={"/contact"}
                    className="font-montserrat leading-normal  text-2xl p-btn !py-4 rounded-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};
export default Navbar;
