import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

export type CartItem = {
  id: string | number;
  name: string;
  img: string; // Full URL or Unsplash image path/id
  variant?: string;
  price: number;
  quantity: number;
};

type CartItemCardProps = {
  item: CartItem;
  onUpdateQuantity: (id: string | number, newQuantity: number) => void;
  onRemoveItem?: (id: string | number) => void;
  className?: string;
};

function CartItemCard({
  item,
  onUpdateQuantity,
  onRemoveItem,
  className = "",
}: CartItemCardProps) {
  const { id, name, img, variant, price, quantity } = item;

  return (
    <div
      className={`flex items-center gap-3 p-3 bg-[#f8f9fc] rounded-xl border border-[#e5e7eb] ${className}`}
    >
      {/* Product Image Panel */}
      <div className="w-14 h-14 rounded-lg overflow-hidden bg-white border border-[#e5e7eb] shrink-0">
        <img
          src={img.startsWith("http") ? img : `https://images.unsplash.com/${img}`}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Metadata info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[#111827] truncate">
          {name}
        </p>
        {variant && <p className="text-xs text-[#6b7280]">{variant}</p>}
        <p className="text-sm font-bold text-[#4f46e5] mt-0.5">
          ${price}
        </p>
      </div>

      {/* Counter Control Layout */}
      <div className="flex items-center border border-[#e5e7eb] rounded-lg overflow-hidden bg-white select-none shrink-0">
        {quantity === 1 && onRemoveItem ? (
          <button
            type="button"
            className="px-2 py-1.5 text-[#ef4444] hover:bg-[#fee2e2] transition-colors cursor-pointer focus:outline-none"
            onClick={() => onRemoveItem(id)}
            aria-label="Remove item"
          >
            <Trash2 size={13} />
          </button>
        ) : (
          <button
            type="button"
            disabled={quantity <= 1}
            className="px-2 py-1.5 text-[#374151] hover:bg-[#f1f3f9] transition-colors cursor-pointer disabled:opacity-40 disabled:hover:bg-transparent focus:outline-none"
            onClick={() => onUpdateQuantity(id, quantity - 1)}
            aria-label="Decrease quantity"
          >
            <Minus size={13} />
          </button>
        )}

        <span className="px-3 text-sm font-semibold text-[#111827] bg-white min-w-[2rem] text-center">
          {quantity}
        </span>

        <button
          type="button"
          className="px-2 py-1.5 text-[#374151] hover:bg-[#f1f3f9] transition-colors cursor-pointer focus:outline-none"
          onClick={() => onUpdateQuantity(id, quantity + 1)}
          aria-label="Increase quantity"
        >
          <Plus size={13} />
        </button>
      </div>
    </div>
  );
}

export default CartItemCard;