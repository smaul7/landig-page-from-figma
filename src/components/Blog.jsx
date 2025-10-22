import React from "react";
import { getFirstSentences } from "../utils";
import { blogCards } from "../constants";

export default function Blog() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.";

  return (
    <section className="mb-[60px] md:mb-[120px]">
      <h2 className="font-semibold md:font-bold text-[25px] md:text-[32px] leading-[38px] md:leading-[47px] uppercase text-center mb-[18px]">
        Our Recent Blog
      </h2>
      <p className="block md:hidden leading-6 text-center mb-[40px]">{getFirstSentences(text, 2)}</p>
      <p className="hidden md:block lg:hidden leading-6 text-center mb-[60px]">{getFirstSentences(text, 4)}</p>
      <p className="hidden lg:block leading-6 text-center mb-[60px]">{text}</p>

      <ul className="flex flex-col md:flex-row items-center md:items-stretch gap-[40px] md:gap-[24px] lg:[gap-30px]">
        {blogCards.map((card, index) => (
          <li key={index} className="max-w-[370px] md:w-1/3 rounded-[10px] pb-[30px] shadow-[0_8px_10px_0_rgba(0,0,0,0.1)]">
            <img src={card.picture} alt="picture" className="object-cover " />
            <div className="pl-[18px]">
              <h3 className="text-[20px] leading-[30px]  font-semibold  uppercase mb-[10px]">{card.title}</h3>
              <p className="leading-[24px] pb-[20px] text-gray-500">{card.text}</p>
              <a href="#" className="underline text-indigo-500 text-[20px] leading-[130%] font-semibold uppercase">
                Read More
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
