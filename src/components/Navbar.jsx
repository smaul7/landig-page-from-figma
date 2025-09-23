import React, { useState } from "react";
import Menu from "../assets/menu-line.svg";
import X from "../assets/Remove.svg";
import Logo from "../assets/Logo.svg";
import MailIcon from "../assets/mail-fill.svg?react";
import PhoneIcon from "../assets/phone-fill.svg?react";
import FacebookIcon from "../assets/facebook-fill.svg?react";
import InstagramIcon from "../assets/instagram-fill.svg?react";
import YoutubeIcon from "../assets/youtube-fill.svg?react";
import TwitterIcon from "../assets/twitter-fill.svg?react";

export default function Navbar() {
  const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setmobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <nav className="sticky top-0 z-50 py-1 backdrop-blur-lg">
      <div className="container px-4 mx-auto">
        <div className="hidden md:flex my-6 justify-between">
          <div className="flex justify-between w-3/6">
            <a href="mailto:info@youremail.com" className="group flex items-center gap-2 text-white transition-all duration-300 hover:text-gray-300">
              <MailIcon className="w-5 h-5 group-hover:fill-gray-300" />
              info@youremail.com
            </a>
            <a href="tel:4805550103" className="flex items-center gap-2 text-white transition-all duration-300 hover:text-gray-300">
              <PhoneIcon className="w-5 h-5" />
              (480) 555-0103
            </a>
          </div>
          <div className="flex justify-between w-2/6 lg:w-1/6">
            {[FacebookIcon, InstagramIcon, YoutubeIcon, TwitterIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-lg bg-indigo-500 shadow-md transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:scale-110 flex items-center justify-center"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="relative flex justify-between items-center bg-white rounded p-1 my-9">
          <div className="lg:hidden flex flex-col justify-end">
            <button onClick={toggleNavbar} className="flex items-center justify-center">
              {mobileDrawerOpen ? (
                <img src={X} alt="remove" className="w-6 md:w-9 h-6 md:h-9" />
              ) : (
                <img src={Menu} alt="menu" className="w-6 md:w-9 h-6 md:h-9" />
              )}
            </button>
          </div>
          {mobileDrawerOpen && (
            <div className="absolute top-10 md:top-12 left-0 z-20 bg-white border border-orange-900 px-7  md:px-10 py-3 md:py-4 rounded-xl flex flex-col justify-center  lg:hidden">
              <ul className="uppercase font-semibold text-xs md:text-xl">
                {["Home", "About", "Features", "Screensot", "Blog"].map((Label, i) => (
                  <li key={i} className="py-2">
                    <a href="#" className="active:text-indigo-500  active:underline">
                      {Label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <ul className="hidden lg:flex mx-8 uppercase text-xl font-semibold w-full">
            <div className="flex gap-8">
              {["Home", "About", "Features"].map((label, i) => (
                <li key={i}>
                  <a href="#" className="transition-all duration-300 hover:underline hover:decoration-indigo-500 hover:text-indigo-500">
                    {label}
                  </a>
                </li>
              ))}
            </div>
            <div className="flex gap-8 ml-auto">
              {["Screenshot", "Blog"].map((label, i) => (
                <li key={i}>
                  <a href="#" className="transition-all duration-300 hover:underline hover:decoration-indigo-500 hover:text-indigo-500">
                    {label}
                  </a>
                </li>
              ))}
            </div>
          </ul>
          <div
            onClick={handleLogoClick}
            className="cursor-pointer absolute left-1/2 transform -translate-x-1/2 h-15 md:h-23 w-25 md:w-50 bg-white flex items-center justify-center rounded"
          >
            <img className="h-3 md:h-6" src={Logo} alt="logo" />
          </div>
          <a
            href="#"
            className="
          bg-indigo-500 text-white py-2 px-1.5 rounded-md uppercase text-xs md:text-lg font-semibold transition-all duration-300 hover:bg-indigo-600"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}
