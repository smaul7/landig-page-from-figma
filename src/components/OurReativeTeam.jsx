import React from "react";
import { getFirstSentences } from "../utils";
import { teamCards } from "../constants";
import CircleFrame from "../assets/team/circle.svg?react";
import FacebookIcon from "../assets/shared/facebook-fill.svg?react";
import InstagramIcon from "../assets/shared/instagram-fill.svg?react";
import YoutubeIcon from "../assets/shared/youtube-fill.svg?react";
import TwitterIcon from "../assets/shared/twitter-fill.svg?react";
import VerticalLine from "../assets/team/line.svg?react";

export default function OurReativeTeam() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.";

  return (
    <section className="mb-[60px] md:mb-[120px]">
      <h2 className="font-semibold md:font-bold text-[25px] md:text-[32px] leading-[38px] md:leading-[47px] uppercase text-center pt-[60px] md:mt-[120px] mb-[40px]">
        How to use the app perfectly
      </h2>
      <p className="block md:hidden leading-6 text-center mb-[40px]">{getFirstSentences(text, 2)}</p>
      <p className="hidden md:block lg:hidden leading-6 text-center mb-[60px]">{getFirstSentences(text, 4)}</p>
      <p className="hidden lg:block leading-6 text-center mb-[60px]">{text}</p>
      <ul className="flex flex-col md:flex-row md:gap-[24px]">
        {teamCards.map((card, index) => (
          <li key={index} className="w-full md:w-1/3 rounded-[10px] pt-[30px] pb-[30px] text-center shadow-[0_8px_10px_0_rgba(0,0,0,0.1)]">
            <div className="relative w-[220px] h-[220px]  mx-auto mb-[66px]">
              <img src={card.pfp} alt={card.name} className="absolute inset-[12px] object-cover rounded-full" />
              <CircleFrame className="absolute inset-0 w-[220px] h-[220px]" />
            </div>
            <h3 className="text-[32px] md:text-[20px] lg:text-[30px] leading-[47px] md:leading-[30px] lg:leading-[47px] font-bold md:font-semibold lg:font-bold uppercase">
              {card.name}
            </h3>
            <p className="leading-[24px] font-semibold text-gray-500 uppercase pb-[14px]">{card.position}</p>
            <p className="leading-[24px] pb-[29px] text-gray-500">{card.description}</p>
            <div className="flex justify-around">
              {[FacebookIcon, InstagramIcon, YoutubeIcon, TwitterIcon].map((Icon, i, arr) => (
                <React.Fragment key={i}>
                  <a href="#" className="flex items-center justify-center">
                    <Icon className="w-[24px] h-[24px] text-black transition-all duration-300 hover:text-indigo-500" />
                  </a>

                  {i < arr.length - 1 && <VerticalLine className="h-6 text-black" />}
                </React.Fragment>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
