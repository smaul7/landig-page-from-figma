import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getFirstSentences } from "../../utils";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import { customersCards } from "../../constants";
import background from "../../assets/background.png";

export default function Customers() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.";

  return (
    <section style={{ backgroundImage: `url(${background})` }} className="mb-[60px] md:mb-[120px] bg-cover">
      <div className="w-full mx-auto md:max-w-[1232px] md:px-6">
        <h2 className="text-white font-semibold md:font-bold text-[25px] md:text-[32px] leading-[38px] md:leading-[47px] uppercase text-center pt-[60px] md:pt-[120px] mb-[18px]">
          Our Happy Customers
        </h2>
        <p className="text-white block md:hidden w-3/4 mx-auto leading-6 text-center mb-[40px]">{getFirstSentences(text, 2)}</p>
        <p className="text-white hidden md:block w-2/3 mx-auto lg:hidden leading-6 text-center mb-[60px]">{getFirstSentences(text, 4)}</p>
        <p className="text-white hidden lg:block w-1/2 mx-auto leading-6 text-center mb-[60px]">{getFirstSentences(text, 4)}</p>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 250,
            depth: 250,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            768: {
              coverflowEffect: {
                stretch: 285, // планшет
              },
            },
            1024: {
              coverflowEffect: {
                stretch: 385, // десктоп
              },
            },
          }}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="swiper-customers"
        >
          {customersCards.map((customer, index) => (
            <SwiperSlide id={index} className="!w-[90%] md:!w-8/12 flex-col bg-white rounded-[10px] pt-[20px] pb-[20px]">
              <img src={customer.pfp} alt={customer.name} className="mx-auto !w-[50px] !h-[50px] mb-[12px]" />
              <h3 className="uppercase font-semibold leading-[37px] text-[25px]">{customer.name}</h3>
              <p className="leading-[22px] uppercase pb-[18px]">{customer.position}</p>
              <article className="text-gray-400">{getFirstSentences(customer.destimonial, 3)}</article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
