import React from "react";
import background from "../assets/background.png";
import { getFirstSentences } from "../utils";
import Video from "../assets/how-to-use/video.png";

export default function HowToUse() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.";

  return (
    <div style={{ backgroundImage: `url(${background})` }} className="bg-cover">
      <div className="w-full mx-auto max-w-[1232px] px-4 md:px-6 ">
        <section>
          <h2 className="font-semibold md:font-bold text-[25px] text-white md:text-[32px] leading-[38px] md:leading-[47px] uppercase text-center pt-[60px] md:mt-[120px] mb-[40px]">
            How to use the app perfectly
          </h2>
          <p className="block md:hidden leading-6 text-center mb-[40px] text-white">{getFirstSentences(text, 2)}</p>
          <p className="hidden md:block lg:hidden leading-6 text-center mb-[60px] text-white">{getFirstSentences(text, 4)}</p>
          <p className="hidden lg:block leading-6 text-center mb-[60px] text-white">{text}</p>
        </section>
      </div>
      <div className="bg-gradient-to-b from-transparent from-[50%] to-white to-[50%] py-[1px]">
        <div className="w-full mx-auto max-w-[1232px] px-4 md:px-6 ">
          <img src={Video} alt="video" className="w-full mx-auto md:w-10/12 lg:w-8/12 px-4 md:px-6" />
        </div>
      </div>
    </div>
  );
}
