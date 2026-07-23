"use client";

import React from "react";
import { Container } from "@/app/src/components";
import { Icons } from "@/app/src/components/ui/icons/Icons";

export interface FeatureItem {
  id: string | number;
  icon: keyof typeof Icons;
  title: string;
  description: string;
}

const defaultPerfumeFeatures: FeatureItem[] = [
  {
    id: 1,
    icon: "shieldCheck",
    title: "100% Authentic Guarantee",
    description: "Original designer & artisanal fragrances backed by a 30-day return policy.",
  },
  {
    id: 2,
    icon: "truck",
    title: "Express & Free Shipping",
    description: "Complimentary express delivery on all perfume orders above Rs. 3,000.",
  },
  {
    id: 3,
    icon: "headphones",
    title: "24/7 Scent Advisory",
    description: "Our fragrance experts are available every day to help you choose your signature scent.",
  },
  {
    id: 4,
    icon: "sparkles",
    title: "Long-Lasting Quality",
    description: "Crafted with high-concentration essential oils for all-day sillage and projection.",
  },
];

interface FeaturesSectionProps {
  features?: FeatureItem[];
}

export default function FeaturesSection({
  features = defaultPerfumeFeatures,
}: FeaturesSectionProps) {
  return (
    <section className="py-8 bg-[#f8f9fc] border-y border-[#e5e7eb]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {features.map((item) => {
            const IconComponent = Icons[item.icon] || Icons.sparkles;

            return (
              <div
                key={item.id}
                className="group flex items-center gap-3.5 p-3 rounded-xl border border-transparent hover:border-[#c7d2fe] hover:bg-white hover:shadow-sm transition-all duration-200"
              >
                {/* Circular Icon Wrapper aligned with ProductCard Tokens */}
                <div className="w-11 h-11 rounded-full border border-[#e5e7eb] flex items-center justify-center shrink-0 bg-white text-[#4f46e5] group-hover:border-[#c7d2fe] group-hover:bg-[#e0e7ff] transition-all duration-200">
                  <IconComponent size={18} strokeWidth={1.8} />
                </div>

                {/* Content with Montserrat & Roboto Typography */}
                <div className="space-y-0.5">
                  <h4 className="text-sm font-semibold text-[#111827] leading-snug font-[family-name:var(--font-montserrat)]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#6b7280] leading-relaxed line-clamp-2 font-[family-name:var(--font-roboto)]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}