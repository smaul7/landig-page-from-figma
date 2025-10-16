import React from "react";
import { getFirstSentences } from "../utils";
import { featuresCards } from "../constants";
import App from "../assets/features/App.png";

export default function AppFeatures() {
  return (
    <section>
      <h2 className="font-semibold md:font-bold text-xl text-white md:text-3xl leading-9 md:leading-[47px] uppercase text-center pt-[60px] md:mt-[120px] mb-[18px]">
        App features
      </h2>
      <p className="block md:hidden leading-6 text-center mb-10 text-white">
        {getFirstSentences(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
          2
        )}
      </p>
      <p className="hidden md:block leading-6 text-center mb-[60px] text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam
        tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
      </p>
      <ul className="grid grid-cols-4 md:grid-cols-12 gap-x-5 gap-y-10 pb-[120px]">
        {featuresCards.map((item) => (
          <li key={item.id} className={`${item.span} text-center justify-items-center`}>
            {item.type === "card" ? (
              <>
                <item.icon className="mb-[30px]" />
                <h3 className="text-white text-[20px] leading-[30px] font-semibold uppercase pb-[18px]">{item.title}</h3>
                <p className="leading-6 text-white block">{item.text}</p>
              </>
            ) : (
              <img src={item.src} alt={item.alt} className="mx-auto w-[214px] lg:w-[375px]" />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
