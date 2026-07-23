import React from "react";
import Link from "next/link";
import { Button, Input } from "@/app/src/components/ui";
import {
    HeadingHeader
} from "@/app/src/components";

import { Icons } from "@/app/src/components/ui/icons/Icons";

export default function StorefrontLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-[#1f2937]">
            {/* 1. Top Announcement Bar */}
            <div className="bg-[#4f46e5] text-white text-xs py-2 px-4 text-center font-medium">
                🎉 Free shipping on all orders over $50! Use code <span className="font-bold underline">WELCOME10</span>
            </div>

            {/* 2. Main Navigation Header */}
            <header className="sticky top-0 z-40 bg-white border-b border-[#e5e7eb] shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 gap-4">

                        {/* Logo & Mobile Menu Toggle */}
                        <div className="flex items-center gap-3">
                            <button className="md:hidden p-2 text-[#4b5563] hover:text-[#111827]">
                                <Icons.menu size={20} />
                            </button>
                            <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#111827]">
                                <div className="w-8 h-8 rounded-lg bg-[#4f46e5] flex items-center justify-center text-white">
                                    <Icons.shoppingBag size={18} />
                                </div>
                                <span>StoreCraft</span>
                            </Link>
                        </div>

                        {/* Navigation Links (Desktop) */}
                        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4b5563]">
                            <Link href="/" className="hover:text-[#4f46e5] transition-colors">
                                Home
                            </Link>
                            <Link href="/products" className="hover:text-[#4f46e5] transition-colors">
                                Shop
                            </Link>
                            <Link href="/categories" className="hover:text-[#4f46e5] transition-colors">
                                Categories
                            </Link>
                            {/* <Link href="/deals" className="hover:text-[#4f46e5] transition-colors">
                                Deals
                            </Link> */}
                        </nav>

                        {/* Search Bar */}
                        <div className="hidden sm:flex flex-1 max-w-xs relative">
                            <Input
                                type="text"
                                placeholder="Search"
                                leftIcon={<Icons.search size={18} />}
                                required
                            />
                        </div>

                        {/* User Action Icons */}
                        <div className="flex items-center gap-3">
                            <Link
                                href="/wishlist"
                                className="p-2 text-[#4b5563] hover:text-[#4f46e5] hover:bg-[#f3f4f6] rounded-full transition-colors relative"
                            >
                                <Icons.heart size={20} />
                            </Link>

                            <Link
                                href="/cart"
                                className="p-2 text-[#4b5563] hover:text-[#4f46e5] hover:bg-[#f3f4f6] rounded-full transition-colors relative"
                            >
                                <Icons.shoppingBag size={20} />
                                <span className="absolute top-1 right-1 bg-[#4f46e5] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                    2
                                </span>
                            </Link>

                            <Link href="/login">
                                <Button variant="tertiary" size="sm" className="hidden sm:flex items-center gap-1.5">
                                    <Icons.user size={15} />
                                    Login
                                </Button>
                            </Link>
                        </div>

                    </div>
                </div>
            </header>

            {/* 3. Main Page Content */}
            <main className="flex-1 max-w-7x l w-full mx-auto px- 4 sm:px- 6 lg:px- 8 py- 8">
                {children}
            </main>

            {/* 4. Footer */}
            <footer className="bg-white border-t border-[#e5e7eb] mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-7">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                        {/* Column 1: Brand Info */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-lg font-bold text-[#111827]">
                                <div className="w-7 h-7 rounded-lg bg-[#4f46e5] flex items-center justify-center text-white">
                                    <Icons.shoppingBag size={16} />
                                </div>
                                <span>StoreCraft</span>
                            </div>
                            <p className="text-xs text-[#6b7280] leading-relaxed">
                                Your one-stop destination for premium tech, footwear, and modern lifestyle essentials.
                            </p>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div>
                            <h4 className="text-xs font-semibold text-[#111827] uppercase tracking-wider mb-4">
                                Quick Links
                            </h4>
                            <ul className="space-y-2 text-xs text-[#6b7280]">
                                <li><Link href="/products" className="hover:text-[#4f46e5]">All Products</Link></li>
                                <li><Link href="/orders" className="hover:text-[#4f46e5]">Track Order</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Customer Support */}
                        <div>
                            <h4 className="text-xs font-semibold text-[#111827] uppercase tracking-wider mb-4">
                                Support
                            </h4>
                            <ul className="space-y-2 text-xs text-[#6b7280]">
                                {/* <li><Link href="/faq" className="hover:text-[#4f46e5]">Help & FAQs</Link></li> */}
                                <li><Link href="/returns" className="hover:text-[#4f46e5]">Returns Policy</Link></li>
                                <li><Link href="/contact" className="hover:text-[#4f46e5]">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Contact Info */}
                        <div>
                            <h4 className="text-xs font-semibold text-[#111827] uppercase tracking-wider mb-4">
                                Get In Touch
                            </h4>
                            <div className="space-y-2 text-xs text-[#6b7280]">
                                <p className="flex items-center gap-2"><Icons.mapPin size={14} /> 13 Number, Orangi Town, Karachi</p>
                                <p className="flex items-center gap-2"><Icons.phone size={14} /> +923321317532</p>
                                <p className="flex items-center gap-2"><Icons.mail size={14} /> aminnoor.cs@gmail.com</p>
                            </div>
                        </div>

                    </div>

                    <div className="border-t border-[#e5e7eb] mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-[#9ca3af] gap-4">
                        <p>© 2026 StoreCraft Inc. All rights reserved.</p>
                        <div className="flex gap-4">
                            <Link href="/privacy" className="hover:text-[#6b7280]">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-[#6b7280]">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}