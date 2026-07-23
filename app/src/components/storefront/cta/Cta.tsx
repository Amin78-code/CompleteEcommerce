"use client";

import React from "react";
import Image from "next/image"; 
import { Button } from "@/app/src/components/ui";
import { Container } from "@/app/src/components"; 

interface CTAProps {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  bgImageUrl?: string;
  onAction?: () => void;
}

function CTA({
  heading = "Enhance Your Shopping Experience",
  subheading = "Get exclusive discounts, early access to new arrivals, and special member-only offers delivered straight to your inbox.",
  buttonText = "Explore Collection",
  bgImageUrl = "/hero1.png", // Aap public folder ya Unsplash link pass kar sakte hain
  onAction,
}: CTAProps) {
  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden bg-gray-500">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImageUrl}
          alt="CTA Background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-50"
          priority={false}
        />
        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      {/* Content Container */}
      <Container className="relative z-10">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {heading}
          </h2>

          <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
            {subheading}
          </p>

          <div className="pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={onAction}
              className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-8 py-3 rounded-lg text-base font-semibold transition-all shadow-lg hover:shadow-indigo-500/30"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTA