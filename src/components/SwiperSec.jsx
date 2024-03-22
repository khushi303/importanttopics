import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';

export default function App() {
    return (
        <>
            <div className='pt-[50px] container mx-auto xl:max-w-[1164px] xl:px-3 px-6'>
                <h2 className='text-[45px] font-normal text-lime-950 text-center'>SWIPER SLIDER</h2>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper my_swiper w-[500px]"
                >
                    <SwiperSlide className='swiper_slide'>
                        <div className='p-4 pt-5 text-center text-[22px] font-normal'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non illo dignissimos, ipsa asperiores provident qui placeat maxime reprehenderit quas ad?
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_slide'>
                        <div className='p-4 pt-5 text-center text-[22px] font-normal'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non illo dignissimos, ipsa asperiores provident qui placeat maxime reprehenderit quas ad?
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_slide'>
                        <div className='p-4 pt-5 text-center text-[22px] font-normal'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non illo dignissimos, ipsa asperiores provident qui placeat maxime reprehenderit quas ad?
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_slide'>
                        <div className='p-4 pt-5 text-center text-[22px] font-normal'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non illo dignissimos, ipsa asperiores provident qui placeat maxime reprehenderit quas ad?
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_slide'>
                        <div className='p-4 pt-5 text-center text-[22px] font-normal'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non illo dignissimos, ipsa asperiores provident qui placeat maxime reprehenderit quas ad?
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_slide'>
                        <div className='p-4 pt-5 text-center text-[22px] font-normal'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non illo dignissimos, ipsa asperiores provident qui placeat maxime reprehenderit quas ad?
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_slide'>
                        <div className='p-4 pt-5 text-center text-[22px] font-normal'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non illo dignissimos, ipsa asperiores provident qui placeat maxime reprehenderit quas ad?
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_slide'>
                        <div className='p-4 pt-5 text-center text-[22px] font-normal'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non illo dignissimos, ipsa asperiores provident qui placeat maxime reprehenderit quas ad?
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_slide'>
                        <div className='p-4 pt-5 text-center text-[22px] font-normal'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non illo dignissimos, ipsa asperiores provident qui placeat maxime reprehenderit quas ad?
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
