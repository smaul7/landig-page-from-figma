import React from "react";
import { getFirstSentences } from "../utils";
import EmailButton from "../assets/footer/email-circle.svg?react";
import PhoneButton from "../assets/footer/phone-circle.svg?react";
import FacebookIcon from "../assets/shared/facebook-fill.svg?react";
import InstagramIcon from "../assets/shared/instagram-fill.svg?react";
import YoutubeIcon from "../assets/shared/youtube-fill.svg?react";
import TwitterIcon from "../assets/shared/twitter-fill.svg?react";
import SendIcon from "../assets/footer/send.svg?react";
import CopyrightIcon from "../assets/footer/copyright.svg?react";

export default function Footer() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.";

  return (
    <section>
      <div className="bg-black">
        <div className="bg-gradient-to-b from-white from-[50%] to-transparent to-[50%] px-4 md:px-6 mb-[60px] lg:mb-[120px]">
          <div className="w-full mx-auto max-w-[1232px] px-4 md:px-6 ">
            <ul className="gap-[50px] md:gap-0 w-full py-[30px]  flex flex-col md:flex-row items-center bg-white rounded-[10px] shadow-[0_8px_10px_0_rgba(0,0,0,0.1)]">
              <li className="relative md:w-1/2 md:pl-[30px] text-center flex gap-[20px] flex-col md:flex-row items-center">
                <EmailButton className="w-[50px] md:w-[60px] h-[50px] md:h-[60px]" />
                <a href="#" className="uppercase text-[20px] leading-[30px] font-semibold md:lowercase md:text-[16px] md:leading-[24px] md:font-normal">
                  info.design@gmail.com
                </a>

                <div className="absolute -bottom-[25px] left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-black md:hidden"></div>
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-full w-[2px] bg-black"></div>
              </li>

              <li className="md:w-1/2 md:pl-[30px] text-center flex gap-[20px] flex-col md:flex-row items-center">
                <PhoneButton className="w-[50px] md:w-[60px] h-[50px] md:h-[60px]" />
                <a href="#" className="uppercase text-[20px] leading-[30px] font-semibold md:lowercase md:text-[16px] md:leading-[24px] md:font-normal">
                  +880 321 655 9985
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full mx-auto max-w-[1232px] px-4 md:px-6 ">
          <div className="flex flex-col md:flex-row text-white gap-[60px] pb-[60px] md:gap-[30px] border-b border-white">
            <div className="md:w-1/3">
              <h3 className="text-[32px] leading-[47px] font-bold uppercase">Logo</h3>
              <p className="leading-[24px] mb-[38px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              </p>
              <div className="flex items-center gap-[29px] md:gap-[9px]">
                {[FacebookIcon, InstagramIcon, YoutubeIcon, TwitterIcon].map((Icon, i, arr) => (
                  <React.Fragment key={i}>
                    <a href="#" className="flex items-center justify-center">
                      <Icon className="w-[24px] h-[24px] transition-all duration-300 hover:text-indigo-500" />
                    </a>
                    {i < arr.length - 1 && <div className="h-6 w-px bg-white mx-3" />}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="md:w-1/3">
              <h3 className="font-semibold text-[25px] leading-[38px] mb-[12px] uppercase">Quick Links</h3>
              <ul className="gap-[12px] flex flex-col">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Screenshot</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>

            <div className="md:w-1/3">
              <h3 className="font-semibold text-[25px] leading-[33px] mb-[12px] uppercase">News Letter</h3>
              <p className="leading-[24px] mb-[38px]">Subscribe our newsletter to get our latest update & news</p>
              <form className="relative">
                <input
                  type="email"
                  id="email"
                  className="bg-white text-gray-900 text-sm rounded-[4px] w-full py-[13px] pl-[17px]"
                  placeholder="Your email address"
                />
                <button
                  type="submit"
                  className="absolute top-1/2 right-[1px] -translate-y-1/2 w-[44px] h-[44px] bg-indigo-500 rounded-[4px] flex items-center justify-center hover:bg-indigo-600 transition"
                >
                  <SendIcon className="w-[24px] h-[24px] text-white" />
                </button>
              </form>
            </div>
          </div>
          <p className="flex items-center justify-center font-light text-[13px] text-white text-center mt-[18px]">
            <CopyrightIcon className="h-[24px] w-[24px] inline mr-[18px]" />
            Copyright 2021 .Ojjomedia. All Right Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
