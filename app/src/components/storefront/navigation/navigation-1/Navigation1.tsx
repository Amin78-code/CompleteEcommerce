import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Heart,
} from "lucide-react";

import {
  Button,
  Input,
} from "@/app/src/components/ui";


const Navigation1 = () => {

    const [cartCount, setCartCount] = useState(2);

  return (
    <header className="flex items-center gap-4 bg-white px-5 py-3 rounded-xl border border-[#e5e7eb] shadow-sm">
      <div className="font-bold text-[#4f46e5] text-lg tracking-tight shrink-0">
        NOVA
      </div>
      <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
        {["New Arrivals", "Electronics", "Apparel", "Home"].map((c) => (
          <button
            key={c}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-[#f1f3f9] text-[#374151] hover:text-[#4f46e5] transition-colors"
          >
            {c}{" "}
            {c !== "New Arrivals" && (
              <ChevronDown size={13} className="text-[#9ca3af]" />
            )}
          </button>
        ))}
      </nav>
      <div className="flex-1 relative hidden sm:block">
        <Search
          size={15}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]"
        />
        <Input
          placeholder="Search products…"
          className="w-full pl-9 pr-3 py-2 rounded-lg"
        />
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <Button variant="ghost" iconOnly size="sm">
          <Heart size={18} />
        </Button>
        <Button variant="ghost" iconOnly size="sm">
          <div className="relative">
            <ShoppingCart size={18} />
            <span className="absolute -top-2 -right-2 bg-[#4f46e5] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </div>
        </Button>
        <Button variant="ghost" iconOnly size="sm">
          <User size={18} />
        </Button>
      </div>
    </header>
  );
};

export default Navigation1;
