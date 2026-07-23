"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Container, ProductCard } from "@/app/src/components";
import { Icons } from "@/app/src/components/ui/icons/Icons";
import { IProduct } from "@/app/src/types/types";
import "swiper/css";

export default function NewArrivalsSection({ products }: { products: IProduct[] }) {
  const [wishlist, setWishlist] = useState<(string | number)[]>([]);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const handleWishlist = (id: string | number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-10 bg-gray-50">
      <Container>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">New Arrivals</h2>
        </div>
        <div className="relative">
          <button
            ref={prevRef}
            aria-label="Previous slide"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 sm:-translate-x-10 z-10 w-9 h-9 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-all disabled:opacity-30 cursor-pointer"
          >
            <Icons.chevronLeft size={18} />
          </button>
          <button
            ref={nextRef}
            aria-label="Next slide"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 sm:translate-x-10 z-10 w-9 h-9 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-all disabled:opacity-30 cursor-pointer"
          >
            <Icons.chevronRight size={18} />
          </button>
          <Swiper
            spaceBetween={16}
            slidesPerView={1.2}
            modules={[Navigation]}
            onBeforeInit={(swiper: SwiperType) => {
              if (typeof swiper.params.navigation !== "boolean" && swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3.2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="h-auto pb-2">
                <ProductCard
                  product={product}
                  isWishlisted={wishlist.includes(product.id)}
                  onWishlistToggle={handleWishlist}
                  onAddToCart={(p) => console.log("Added:", p)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}