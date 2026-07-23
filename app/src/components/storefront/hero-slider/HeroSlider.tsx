"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const banners = [
    { id: 1, src: '/hero1.png', alt: "Special Promotional Banner 1" },
    { id: 2, src: '/hero2.png', alt: "Special Promotional Banner 2" },
    { id: 3, src: '/hero3.png', alt: "Special Promotional Banner 3" },
];

export default function HeroBannerSlider() {
    return (
        <section className="w-full relative overflow-hidden shadow-sm bg-gray-100">
            <Swiper
                spaceBetween={0}
                effect={"fade"}
                // centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                // navigation={true}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                // slidesPerView={1}
                speed={800}

                className="w-full h-[220px] sm:h-[350px] md:h-[450px] lg:h-[720px] [&_.swiper-button-next]:text-white [&_.swiper-button-prev]:text-white [&_.swiper-button-next]:w-8 [&_.swiper-button-prev]:w-8 [&_.swiper-pagination-bullet-active]:bg-[#4f46e5]"
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id} className="relative w-full h-full">
                        <div className="relative w-full h-full">
                            <Image
                                src={banner.src}
                                alt={banner.alt}
                                fill
                                priority={banner.id === 1}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                                className="object-cover object-center"
                            // loading='lazy'
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}