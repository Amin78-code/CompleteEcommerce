import React from "react";
import { Heart, Star, Plus } from "lucide-react";
import {Button} from '@/app/src/components/ui';

export type Product = {
  id: string | number;
  name: string;
  img: string; // Full URL or Unsplash image path/id
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: "sale" | "new" | string;
};

type PCProps = {
  product: Product;
  isWishlisted?: boolean;
  onWishlistToggle: (id: string | number) => void;
  onAddToCart: (product: Product) => void;
  className?: string;
};

// Internal minimal Badge component matching your design tokens
const CardBadge = ({ label, variant }: { label: string; variant?: string }) => {
  const bgStyles = variant === "sale" 
    ? "bg-[#fee2e2] text-[#ef4444]" 
    : "bg-[#e0e7ff] text-[#4f46e5]";
  
  return (
    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${bgStyles}`}>
      {label}
    </span>
  );
};

function PC({
  product,
  isWishlisted = false,
  onWishlistToggle,
  onAddToCart,
  className = "",
}: PCProps) {
  const { id, name, img, price, originalPrice, rating, reviews, badge } = product;

  // Render Logic for stars dynamically
  const renderStars = (ratingValue: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={11}
        className={
          i < Math.floor(ratingValue)
            ? "fill-[#f59e0b] text-[#f59e0b]"
            : "text-[#e5e7eb]"
        }
      />
    ));
  };

  return (
    <div
      className={`group bg-white rounded-xl border border-[#e5e7eb] overflow-hidden hover:shadow-lg hover:border-[#c7d2fe] transition-all duration-200 flex flex-col justify-between h-full ${className}`}
    >
      {/* Top Media Section */}
      <div className="relative bg-[#f8f9fc] aspect-square overflow-hidden w-full">
        <img
          src={img.startsWith("http") ? img : `https://images.unsplash.com/${img}`}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {badge && (
          <div className="absolute top-2.5 left-2.5 pointer-events-none">
            <CardBadge
              label={badge === "sale" ? "SALE" : "NEW"}
              variant={badge}
            />
          </div>
        )}

        <button
          type="button"
          onClick={() => onWishlistToggle(id)}
          className="absolute top-2.5 right-2.5 p-1.5 bg-white rounded-full shadow-sm border border-[#e5e7eb] hover:border-[#c7d2fe] transition-colors cursor-pointer focus:outline-none"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            size={14}
            className={
              isWishlisted
                ? "fill-[#ef4444] text-[#ef4444]"
                : "text-[#9ca3af] transition-colors group-hover:text-[#6b7280]"
            }
          />
        </button>
      </div>

      {/* Product Information Details */}
      <div className="p-3.5 flex flex-col flex-grow justify-between gap-2.5">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-[#111827] leading-snug line-clamp-2 h-10">
            {name}
          </p>
          
          <div className="flex items-center gap-1">
            <div className="flex items-center">{renderStars(rating)}</div>
            <span className="text-[11px] text-[#6b7280] ml-1">
              {rating} ({reviews})
            </span>
          </div>

          <div className="flex items-center gap-2 pt-0.5">
            <span className="text-base font-bold text-[#111827]">
              ${price}
            </span>
            {originalPrice && (
              <span className="text-xs text-[#9ca3af] line-through">
                ${originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <Button
          variant="primary"
          size="sm"
          onClick={() => onAddToCart(product)}
        >
          {/* <Plus size={14} />  */}
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default PC;