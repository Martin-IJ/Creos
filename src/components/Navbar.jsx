import React, { useEffect, useState } from "react";
import logo from "../assets/images/Logo.png";
import blueCircle from "../assets/images/blueEllipse.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaXTwitter, FaLinkedin, FaTelegram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    if (navbarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [navbarOpen]);

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  const openNavbar = () => {
    setNavbarOpen(true);
  };

  return (
    <header className="container mx-auto py-10 px-5 md:px-0 flex justify-between items-center">
      <div>
        <Link to="/">
          <img src={logo} alt="Creos Logo" />
        </Link>
      </div>

      <button onClick={openNavbar} className="md:hidden text-2xl">
        <GiHamburgerMenu />
      </button>

      {/* Desktop view */}
      <div className="hidden md:flex items-center gap-5 text-4xl">
        <a href="" target="_blank">
          <FaXTwitter />
        </a>
        <a href="" target="_blank">
          <FaLinkedin />
        </a>
        <a href="" target="_blank">
          <FaTelegram />
        </a>
      </div>

      {/* Mobile View */}
      {navbarOpen && (
        <div className="absolute z-50 top-0 right-0 isolate flex justify-end md:hidden w-full h-full">
          <div className="isolate max-w-[350px] w-full h-full bg-tertiary-dark shadow-lg shadow-white/15">
            <img
              src={blueCircle}
              alt=""
              className="absolute top-0 right-0 -z-10"
            />
            <button
              onClick={closeNavbar}
              className="py-10 w-full px-7 text-2xl shadow shadow-white/5"
            >
              <IoMdClose />
            </button>

            <div
              onClick={closeNavbar}
              className="absolute inset-0 bg-black/70 -z-10"
            />

            <div className="text-3xl p-5 flex flex-col gap-5">
              <a href="" target="_blank">
                <FaXTwitter />
              </a>
              <a href="" target="_blank">
                <FaLinkedin />
              </a>
              <a href="" target="_blank">
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
