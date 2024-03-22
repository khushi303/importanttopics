import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImg1 from "../assets/images/png/SliderImg1.webp";
import sliderImg2 from "../assets/images/png/SliderImg2.webp";
import sliderImg3 from "../assets/images/png/SliderImg3.webp";
import sliderImg4 from "../assets/images/png/SliderImg4.webp";
import sliderImg5 from "../assets/images/png/SliderImg5.webp";
import sliderImg6 from "../assets/images/png/SliderImg6.webp";
import sliderImg7 from "../assets/images/png/SliderImg7.webp";
import sliderImg8 from "../assets/images/png/SliderImg8.webp";
import sliderImg9 from "../assets/images/png/SliderImg9.webp";
import { EffectFade, Autoplay } from "swiper/modules";

const SwipeSlider12 = () => {
  return (
    <>
      <div className="mx-auto container xl:max-w-[1164px] xl:px-3 px-6 pt-[50px]">
        <h2 className="text-[50px] font-normal text-lime-950 text-center pb-5">
          SWIPER SLIDER
        </h2>
        <Swiper
          modules={[EffectFade, Autoplay]}
          loop={true}
          autoplay={{ delay: 3000 }}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            639: {
              slidesPerView: 3,
            },
          }}
        >
          
          <SwiperSlide>
            <img src={sliderImg1} alt="sliderImg1" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImg2} alt="sliderImg2" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImg3} alt="sliderImg3" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImg4} alt="sliderImg4" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImg5} alt="sliderImg5" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImg6} alt="sliderImg6" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImg7} alt="sliderImg7" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImg8} alt="sliderImg8" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImg9} alt="sliderImg9" className="w-full" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SwipeSlider12;
