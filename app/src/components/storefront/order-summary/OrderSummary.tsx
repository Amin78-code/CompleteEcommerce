import React from "react";
import { ShoppingCart, ShieldCheck } from "lucide-react";
import { Button } from "@/app/src/components/ui";

type AppliedPromo = {
  code: string;
  discountAmount: number;
};

type OrderSummaryCardProps = {
  itemCount: number;
  subtotal: number;
  shippingCost?: number; // 0 means "Free"
  taxRate?: number; // e.g., 0.08 for 8%
  promo?: AppliedPromo | null;
  onCheckout: () => void;
  onContinueShopping?: () => void;
  isLoading?: boolean;
  className?: string;
};

function OrderSummaryCard({
  itemCount,
  subtotal,
  shippingCost = 0,
  taxRate = 0.08,
  promo = null,
  onCheckout,
  onContinueShopping,
  isLoading = false,
  className = "",
}: OrderSummaryCardProps) {
  // Dynamic Calculations
  const discount = promo ? promo.discountAmount : 0;
  const taxableAmount = Math.max(0, subtotal - discount);
  const tax = taxableAmount * taxRate;
  const total = taxableAmount + shippingCost + tax;

  return (
    <div
      className={`p- 6 bg-white rounded-2xl borde r border-[#e5e7eb ] shadow-s m ${className}`}
    >
      <h3 className="text-base font-bold text-[#111827] mb-4">Order Summary</h3>

      {/* Breakdown List */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm text-[#374151]">
          <span>
            Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
          </span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-sm text-[#374151]">
          <span>Shipping</span>
          {shippingCost === 0 ? (
            <span className="text-[#059669] font-medium">Free</span>
          ) : (
            <span className="font-medium">${shippingCost.toFixed(2)}</span>
          )}
        </div>

        {promo && (
          <div className="flex justify-between text-sm text-[#059669] font-medium">
            <span>Promo ({promo.code})</span>
            <span>–${discount.toFixed(2)}</span>
          </div>
        )}

        <div className="flex justify-between text-sm text-[#374151]">
          <span>Tax ({(taxRate * 100).toFixed(0)}%)</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>

        <div className="border-t border-[#e5e7eb] pt-3 flex justify-between items-center">
          <span className="font-bold text-[#111827]">Total</span>
          <span className="font-bold text-[#4f46e5] text-xl">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 space-y-2.5">
        <Button
          variant="primary"
          size="lg"
          isLoading={isLoading}
          onClick={onCheckout}
          className="w-full justify-center"
        >
          <ShoppingCart size={16} /> Checkout
        </Button>

        {onContinueShopping && (
          <Button
            variant="tertiary"
            size="md"
            onClick={onContinueShopping}
            className="w-full justify-center"
          >
            Continue Shopping
          </Button>
        )}
      </div>

      {/* Security Assurance Badge */}
      <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#9ca3af]">
        <ShieldCheck size={14} className="text-[#10b981]" />
        <span>Secure checkout · 256-bit SSL encryption</span>
      </div>
    </div>
  );
}

export default OrderSummaryCard;
