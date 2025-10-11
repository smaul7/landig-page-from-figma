import React from "react";
import AboutOurAppImage from "../assets/about-our-app.png";
import Check from "../assets/checkbox-circle-fill.svg?react";
import { descriprtionCards } from "../constants";
import { getFirstSentences } from "../utils";

export default function AboutOurApp() {
  return (
    <section>
      <h2 className="font-semibold md:font-bold text-xl md:text-3xl leading-9 md:leading-[47px] uppercase text-center mt-[60px] md:mt-[120px] mb-[18px]">
        About our app
      </h2>
      <p className="block md:hidden leading-6 text-center mb-10 text-gray-500">
        {getFirstSentences(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
          2
        )}
      </p>
      <p className="hidden md:block leading-6 text-center mb-[60px] text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam
        tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
      </p>
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-[92px] md:mb-[138px]">
        <img src={AboutOurAppImage} alt="about-our-app" className="w-[238px] lg:w-[386px] mb-10 md:mb-0" />
        <ul className="md:w-6/12 space-y-[20px] lg:space-y-[40px]">
          {descriprtionCards.map((card, index) => (
            <li key={index} className="w-full rounded-[10px] pt-[18px] pl-[16px] pb-[10px] pr-[19px] shadow-[0_8px_10px_0_rgba(0,0,0,0.1)]">
              <div className="flex w-full gap-[18px] mb-[3px]">
                <Check />
                <h3 className="text-[20px] leading-[30px] font-semibold uppercase">{card.title}</h3>
              </div>
              <p className="leading-6 text-gray-500 block lg:hidden">{getFirstSentences(card.text, 1)}</p>
              <p className="leading-6 text-gray-500 hidden lg:block">{card.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
