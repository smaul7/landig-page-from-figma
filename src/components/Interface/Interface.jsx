import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getFirstSentences } from "../../utils";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import SlidePng1 from "../../assets/interface/interface-sl1.png";
import SlidePng2 from "../../assets/interface/interface-sl2.png";
import SlidePng3 from "../../assets/interface/interface-sl3.png";
import SlidePng4 from "../../assets/interface/interface-sl4.png";
import SlidePng5 from "../../assets/interface/interface-sl5.png";

export default function Interface() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.";

  const slides = [
    { id: 1, img: SlidePng1, alt: "slide1" },
    { id: 2, img: SlidePng2, alt: "slide2" },
    { id: 3, img: SlidePng3, alt: "slide3" },
    { id: 4, img: SlidePng4, alt: "slide4" },
    { id: 5, img: SlidePng5, alt: "slide5" },
  ];
  return (
    <section className="mb-[60px] md:mb-[120px]">
      <h2 className="font-semibold md:font-bold text-[25px] md:text-[32px] leading-[38px] md:leading-[47px] uppercase text-center pt-[60px] md:pt-[120px] mb-[18px]">
        CheckOut Our <br className="lg:hidden"></br> App Interface look
      </h2>
      <p className="block md:hidden w-3/4 mx-auto leading-6 text-center mb-[40px]">{getFirstSentences(text, 2)}</p>
      <p className="hidden md:block w-2/3 mx-auto lg:hidden leading-6 text-center mb-[60px]">{getFirstSentences(text, 4)}</p>
      <p className="hidden lg:block w-1/2 mx-auto leading-6 text-center mb-[60px]">{text}</p>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 30,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper-interface"
      >
        {slides.map((slide, index) => (
          <SwiperSlide id={index}>
            <a href="#">
              <img src={slide.img} alt={slide.alt} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
