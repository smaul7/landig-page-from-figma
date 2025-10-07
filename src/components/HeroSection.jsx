import React from "react";
import TextBackground from "../assets/text-background.png";
import GooglePlay from "../assets/google-play.png";
import AppStore from "../assets/app-store.png";
import Smartphone from "../assets/smartphone.png";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-4 gap-5 items-end md:grid-cols-12 md:gap-10 lg:items-center">
      <div
        style={{
          backgroundImage: `url(${TextBackground})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="col-span-4 md:col-span-7 py-12 pr-10.5 pl-4.5 mb-10 md:mb-0 xl:py-22.5 xl:pr-18 xl:pl-7.5"
      >
        <h1 className="text-2xl font-bold leading-9 uppercase md:text-3xl md:leading-12 xl:text-5xl xl:leading-[130%] text-indigo-500 mb-4.5">
          A Great App Makes Your Life Better
        </h1>
        <p className="leading-6 text-gray-500 mb-7.5 xl:mb-13">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
        </p>
        <h2 className="text-xl font-semibold leading-8 xl:text-2xl xl:leading-9 uppercase mb-4.5">Download App Now</h2>
        <div className="flex gap-2.5 w-3/4">
          <a href="#" className="w-1/2">
            <img src={GooglePlay} alt="google-play" className="w-full h-auto" />
          </a>
          <a href="#" className="w-1/2">
            <img src={AppStore} alt="app-store" className="w-full h-auto" />
          </a>
        </div>
      </div>
      <img src={Smartphone} alt="smartphone" className="row-start-2 col-span-4 w-3/4 place-self-center md:row-start-1 md:col-span-5 md:w-4/5 md:col-start-8 " />
    </div>
  );
}
