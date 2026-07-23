import React, { useState } from "react";
import { CheckCircle, Tag, X } from "lucide-react";
import { Button, Input } from "@/app/src/components/ui";

type PromoCodeInputProps = {
  onApplyPromo: (code: string) => boolean | Promise<boolean>;
  onRemovePromo?: () => void;
  appliedCode?: string;
  discountMessage?: string;
  placeholder?: string;
  label?: string;
  className?: string;
};

function PromoCodeInput({
  onApplyPromo,
  onRemovePromo,
  appliedCode = "",
  discountMessage = "Promo code applied — 20% off!",
  placeholder = "e.g. NOVA20",
  label = "Promo Code",
  className = "",
}: PromoCodeInputProps) {
  const [code, setCode] = useState(appliedCode);
  const [isApplied, setIsApplied] = useState(!!appliedCode);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleApply = async () => {
    if (!code.trim()) return;

    setError("");
    setIsLoading(true);

    try {
      const success = await onApplyPromo(code.trim().toUpperCase());
      if (success) {
        setIsApplied(true);
      } else {
        setError("Invalid or expired promo code.");
      }
    } catch (err) {
      setError("Failed to apply promo code. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemove = () => {
    setCode("");
    setIsApplied(false);
    setError("");
    if (onRemovePromo) onRemovePromo();
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="text-xs font-semibold text-[#374151] block mb-2 select-none">
          {label}
        </label>
      )}

      <div className="flex gap-2 items-start">
        <div className="flex-1">
          <Input
            value={code}
            disabled={isApplied || isLoading}
            onChange={(e) => {
              setCode(e.target.value.toUpperCase());
              if (error) setError("");
            }}
            placeholder={placeholder}
            leftIcon={<Tag size={16} />}
            className="font-mono uppercase placeholder:normal-case"
            error={error}
          />
        </div>

        {isApplied ? (
          <Button variant="secondary" size="lg" onClick={handleRemove}>
            <X size={14} /> Remove
          </Button>
        ) : (
          <Button
            variant="primary"
            size="lg"
            isLoading={isLoading}
            disabled={!code.trim() || isLoading}
            onClick={handleApply}
          >
            Apply
          </Button>
        )}
      </div>

      {isApplied && !error && (
        <p className="text-xs text-[#059669] font-medium mt-1.5 flex items-center gap-1.5">
          <CheckCircle size={13} className="shrink-0" />
          {discountMessage}
        </p>
      )}
    </div>
  );
}

export default PromoCodeInput;
