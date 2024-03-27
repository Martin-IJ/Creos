import React from "react";
import { FaXTwitter, FaLinkedin, FaTelegram } from "react-icons/fa6";
import logo from "../assets/images/creos-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container mx-auto px-5 md:px-0 pt-20 pb-32 md:flex justify-between items-center">
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-5 text-4xl mt-5 md:mt-0">
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
    </footer>
  );
};

export default Footer;
