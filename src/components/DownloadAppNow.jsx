import React from "react";
import { getFirstSentences } from "../utils";
import GooglePlay from "../assets/shared/google-play.png";
import AppStore from "../assets/shared/app-store.png";
import { downloadCards } from "../constants";
import AppDesign from "../assets/download/app-desgin.png";

export default function DownloadAppNow() {
  return (
    <section className="flex flex-col md:flex-row gap-[60px] md:justify-between pt-[60px] md:pt-[120px] mb-[60px] md:mb-[120px] md:items-end lg:items-start">
      <div className="w-full md:w-1/2">
        <h2 className="font-semibold md:font-bold text-xl md:text-3xl leading-9 md:leading-[47px] uppercase text-left mb-[18px]">Download App Now</h2>
        <p className="block md:hidden leading-6 text-left mb-10 text-gray-500">
          {getFirstSentences(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
            2
          )}
        </p>
        <p className="hidden md:block lg:hidden leading-6 text-left mb-10 text-gray-500">
          {getFirstSentences(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
            3
          )}
        </p>
        <p className="hidden lg:block leading-6 text-left mb-[40px] text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam
          tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
        </p>
        <div className="flex gap-2.5 w-[325px] mb-[40px]">
          <a href="#" className="w-1/2">
            <img src={GooglePlay} alt="google-play" className="w-full h-auto" />
          </a>
          <a href="#" className="w-1/2">
            <img src={AppStore} alt="app-store" className="w-full h-auto" />
          </a>
        </div>
        <ul className="flex gap-[18px]">
          {downloadCards.map((card, index) => (
            <li key={index} className="w-1/3 bg-indigo-500 rounded-[5px] lg:rounded-[10px] pt-[11px] pb-[12px] text-center">
              <card.icon className="w-[18px] lg:w-[35px] h-[18px] lg:h-[35px] mx-auto mb-[8px]" />
              <p className="text-[20px] lg:text-[25px] leading-[30px] lg:leading-[38px] font-semibold text-white">{card.count}</p>
              <h3 className="lg:text-[20px] leading-[24px] lg:leading-[30px] text-white">{card.title}</h3>
            </li>
          ))}
        </ul>
      </div>
      <img src={AppDesign} alt="app-design" className="w-[314px] lg:w-[516px] mx-auto md:mx-0" />
    </section>
  );
}
