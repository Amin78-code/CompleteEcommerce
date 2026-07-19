"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Star,
  Plus,
  Minus,
  Tag,
  Bell,
  LayoutDashboard,
  Package,
  Users,
  BarChart2,
  Settings,
  LogOut,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  CheckCircle,
  Info,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Filter,
  Download,
  MoreHorizontal,
  Zap,
  ShoppingBag,
  Heart,
  Menu,
  Home,
  FileText,
} from "lucide-react";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import {
  Alert,
  Button,
  Badge,
  StatusBadge,
  Input,
  PasswordInput,
  Select,
  Heading,
} from "./src/components/ui";

import {
 HeadingHeader
} from "./src/components";


type SectionKey = "tokens" | "global" | "ecommerce" | "dashboard";

// ─── DATA ────────────────────────────────────────────────────────────────────

const revenueData = [
  { month: "Jan", revenue: 42000, orders: 310 },
  { month: "Feb", revenue: 51000, orders: 390 },
  { month: "Mar", revenue: 47000, orders: 355 },
  { month: "Apr", revenue: 63000, orders: 470 },
  { month: "May", revenue: 58000, orders: 430 },
  { month: "Jun", revenue: 74000, orders: 560 },
  { month: "Jul", revenue: 82000, orders: 620 },
];

const categoryData = [
  { name: "Electronics", value: 38 },
  { name: "Apparel", value: 27 },
  { name: "Home", value: 19 },
  { name: "Beauty", value: 16 },
];

const NAV_SECTIONS: {
  key: SectionKey;
  label: string;
  icon: React.ReactNode;
}[] = [
  { key: "tokens", label: "Tokens & Foundations", icon: <Zap size={16} /> },
  {
    key: "global",
    label: "Global Components",
    icon: <LayoutDashboard size={16} />,
  },
  { key: "ecommerce", label: "E-commerce", icon: <ShoppingBag size={16} /> },
  { key: "dashboard", label: "Admin Dashboard", icon: <BarChart2 size={16} /> },
];

const DONUT_COLORS = ["#4f46e5", "#06b6d4", "#10b981", "#f59e0b"];

const tableOrders = [
  {
    id: "#ORD-7821",
    customer: "Sophia Reyes",
    product: "Wireless Headphones Pro",
    amount: "$249.00",
    status: "Delivered",
    date: "Jul 2, 2026",
  },
  {
    id: "#ORD-7820",
    customer: "Marcus Lee",
    product: "Ultralight Running Shoes",
    amount: "$119.00",
    status: "Shipped",
    date: "Jul 2, 2026",
  },
  {
    id: "#ORD-7819",
    customer: "Priya Nair",
    product: "Ceramic Pour-Over Set",
    amount: "$64.00",
    status: "Processing",
    date: "Jul 1, 2026",
  },
  {
    id: "#ORD-7818",
    customer: "Daniel Kim",
    product: "Smart Watch Series 4",
    amount: "$399.00",
    status: "Delivered",
    date: "Jul 1, 2026",
  },
  {
    id: "#ORD-7817",
    customer: "Laila Osei",
    product: "Linen Shirt – Sage",
    amount: "$89.00",
    status: "Cancelled",
    date: "Jun 30, 2026",
  },
];

// ─── SHARED PRIMITIVES ────────────────────────────────────────────────────────



function Frame({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white rounded-xl border border-[#e5e7eb] overflow-hidden ${className}`}
    >
      <div className="px-5 py-3 border-b border-[#f1f3f9] flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#4f46e5]" />
        <span className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider">
          {title}
        </span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

// ─── SECTION: TOKENS ─────────────────────────────────────────────────────────

function TokensSection() {
//   const colors = [
//   // Red Scale (Destructive / Errors)
//   { name: "Red 50", hex: "#fef2f2", token: "--red-50" },
//   { name: "Red 100", hex: "#fee2e2", token: "--red-100" },
//   { name: "Red 200", hex: "#fecaca", token: "--red-200" },
//   { name: "Red 300", hex: "#fca5a5", token: "--red-300" },
//   { name: "Red 400", hex: "#f87171", token: "--red-400" },
//   { name: "Red 500", hex: "#ef4444", token: "--red-500" },
//   { name: "Red 600", hex: "#dc2626", token: "--red-600" },
//   { name: "Red 700", hex: "#b91c1c", token: "--red-700" },
//   { name: "Red 800", hex: "#991b1b", token: "--red-800" },
//   { name: "Red 900", hex: "#7f1d1d", token: "--red-900" },
//   { name: "Red 950", hex: "#450a0a", token: "--red-950" },

//   // Orange Scale (Secondary Accents / Highlights)
//   { name: "Orange 50", hex: "#fff7ed", token: "--orange-50" },
//   { name: "Orange 100", hex: "#ffedd5", token: "--orange-100" },
//   { name: "Orange 200", hex: "#fed7aa", token: "--orange-200" },
//   { name: "Orange 300", hex: "#fdba74", token: "--orange-300" },
//   { name: "Orange 400", hex: "#fb923c", token: "--orange-400" },
//   { name: "Orange 500", hex: "#f97316", token: "--orange-500" },
//   { name: "Orange 600", hex: "#ea580c", token: "--orange-600" },
//   { name: "Orange 700", hex: "#c2410c", token: "--orange-700" },
//   { name: "Orange 800", hex: "#9a3412", token: "--orange-800" },
//   { name: "Orange 900", hex: "#7c2d12", token: "--orange-900" },
//   { name: "Orange 950", hex: "#431407", token: "--orange-950" },

//   // Amber Scale (Warnings / Pending States)
//   { name: "Amber 50", hex: "#fffbeb", token: "--amber-50" },
//   { name: "Amber 100", hex: "#fef3c7", token: "--amber-100" },
//   { name: "Amber 200", hex: "#fde68a", token: "--amber-200" },
//   { name: "Amber 300", hex: "#fcd34d", token: "--amber-300" },
//   { name: "Amber 400", hex: "#fbbf24", token: "--amber-400" },
//   { name: "Amber 500", hex: "#f59e0b", token: "--amber-500" },
//   { name: "Amber 600", hex: "#d97706", token: "--amber-600" },
//   { name: "Amber 700", hex: "#b45309", token: "--amber-700" },
//   { name: "Amber 800", hex: "#92400e", token: "--amber-800" },
//   { name: "Amber 900", hex: "#78350f", token: "--amber-900" },
//   { name: "Amber 950", hex: "#451a03", token: "--amber-950" },

//   // Yellow Scale (Attention / Notifications)
//   { name: "Yellow 50", hex: "#fefce8", token: "--yellow-50" },
//   { name: "Yellow 100", hex: "#fef9c3", token: "--yellow-100" },
//   { name: "Yellow 200", hex: "#fef08a", token: "--yellow-200" },
//   { name: "Yellow 300", hex: "#fde047", token: "--yellow-300" },
//   { name: "Yellow 400", hex: "#facc15", token: "--yellow-400" },
//   { name: "Yellow 500", hex: "#eab308", token: "--yellow-500" },
//   { name: "Yellow 600", hex: "#ca8a04", token: "--yellow-600" },
//   { name: "Yellow 700", hex: "#a16207", token: "--yellow-700" },
//   { name: "Yellow 800", hex: "#854d0e", token: "--yellow-800" },
//   { name: "Yellow 900", hex: "#713f12", token: "--yellow-900" },
//   { name: "Yellow 950", hex: "#422006", token: "--yellow-950" },

//   // Lime Scale (Creative Accents / Stock/Inventory States)
//   { name: "Lime 50", hex: "#f7fee7", token: "--lime-50" },
//   { name: "Lime 100", hex: "#ecfccb", token: "--lime-100" },
//   { name: "Lime 200", hex: "#d9f99d", token: "--lime-200" },
//   { name: "Lime 300", hex: "#bef264", token: "--lime-300" },
//   { name: "Lime 400", hex: "#a3e635", token: "--lime-400" },
//   { name: "Lime 500", hex: "#84cc16", token: "--lime-500" },
//   { name: "Lime 600", hex: "#65a30d", token: "--lime-600" },
//   { name: "Lime 700", hex: "#4d7c0f", token: "--lime-700" },
//   { name: "Lime 800", hex: "#3f6212", token: "--lime-800" },
//   { name: "Lime 900", hex: "#365314", token: "--lime-900" },
//   { name: "Lime 950", hex: "#1a2e05", token: "--lime-950" },

//   // Green Scale (Success / Completed / Revenue)
//   { name: "Green 50", hex: "#f0fdf4", token: "--green-50" },
//   { name: "Green 100", hex: "#dcfce7", token: "--green-100" },
//   { name: "Green 200", hex: "#bbf7d0", token: "--green-200" },
//   { name: "Green 300", hex: "#86efac", token: "--green-300" },
//   { name: "Green 400", hex: "#4ade80", token: "--green-400" },
//   { name: "Green 500", hex: "#22c55e", token: "--green-500" },
//   { name: "Green 600", hex: "#16a34a", token: "--green-600" },
//   { name: "Green 700", hex: "#15803d", token: "--green-700" },
//   { name: "Green 800", hex: "#166534", token: "--green-800" },
//   { name: "Green 900", hex: "#14532d", token: "--green-900" },
//   { name: "Green 950", hex: "#052e16", token: "--green-950" }
// ]
  return (
    <div className="space-y-8">
      <HeadingHeader
        label="Tokens & Foundations"
        sub="Color palette, typography scale, spacing, radius, and elevation."
      /> 
{/* ddd 
      <Input type="password"   error="Please enter a valid email address." />
      <Input type="fullName"   error="Please enter a valid email address." />
      bbbb */}

      {/* <br /><Button size="sm">Small</Button>
      <br /><Button size="md">Medium</Button>
      <br /><Button size="lg">Large</Button> 

      <br /><Button variant="secondary">Secondary</Button>
      <br /><Button variant="tertiary">Tertiary</Button>
      <br /><Button variant="ghost">Ghost</Button>
      <br /><Button variant="danger">Danger</Button> */}

      {/* <div>Red 50 <span className="inline-block w-[20px] h-[20px] bg-red-50"></span></div>
      <div>Red 100 <span className="inline-block w-[20px] h-[20px] bg-red-100"></span></div>
      <div>Red 200 <span className="inline-block w-[20px] h-[20px] bg-red-200"></span></div>
      <div>Red 300 <span className="inline-block w-[20px] h-[20px] bg-red-300"></span></div>
      <div>Red 400 <span className="inline-block w-[20px] h-[20px] bg-red-400"></span></div>
      <div>Red 500 <span className="inline-block w-[20px] h-[20px] bg-red-500"></span></div>
      <div>Red 600 <span className="inline-block w-[20px] h-[20px] bg-red-600"></span></div>
      <div>Red 700 <span className="inline-block w-[20px] h-[20px] bg-red-700"></span></div>
      <div>Red 800 <span className="inline-block w-[20px] h-[20px] bg-red-800"></span></div>
      <div>Red 900 <span className="inline-block w-[20px] h-[20px] bg-red-900"></span></div>
      <div>Red 950 <span className="inline-block w-[20px] h-[20px] bg-red-950"></span></div>

      <div>Orange 50 <span className="inline-block w-[20px] h-[20px] bg-orange-50"></span></div>
      <div>Orange 100 <span className="inline-block w-[20px] h-[20px] bg-orange-100"></span></div>
      <div>Orange 200 <span className="inline-block w-[20px] h-[20px] bg-orange-200"></span></div>
      <div>Orange 300 <span className="inline-block w-[20px] h-[20px] bg-orange-300"></span></div>
      <div>Orange 400 <span className="inline-block w-[20px] h-[20px] bg-orange-400"></span></div>
      <div>Orange 500 <span className="inline-block w-[20px] h-[20px] bg-orange-500"></span></div>
      <div>Orange 600 <span className="inline-block w-[20px] h-[20px] bg-orange-600"></span></div>
      <div>Orange 700 <span className="inline-block w-[20px] h-[20px] bg-orange-700"></span></div>
      <div>Orange 800 <span className="inline-block w-[20px] h-[20px] bg-orange-800"></span></div>
      <div>Orange 900 <span className="inline-block w-[20px] h-[20px] bg-orange-900"></span></div>
      <div>Orange 950 <span className="inline-block w-[20px] h-[20px] bg-orange-950"></span></div>

      <div>Amber 50 <span className="inline-block w-[20px] h-[20px] bg-amber-50"></span></div>
      <div>Amber 100 <span className="inline-block w-[20px] h-[20px] bg-amber-100"></span></div>
      <div>Amber 200 <span className="inline-block w-[20px] h-[20px] bg-amber-200"></span></div>
      <div>Amber 300 <span className="inline-block w-[20px] h-[20px] bg-amber-300"></span></div>
      <div>Amber 400 <span className="inline-block w-[20px] h-[20px] bg-amber-400"></span></div>
      <div>Amber 500 <span className="inline-block w-[20px] h-[20px] bg-amber-500"></span></div>
      <div>Amber 600 <span className="inline-block w-[20px] h-[20px] bg-amber-600"></span></div>
      <div>Amber 700 <span className="inline-block w-[20px] h-[20px] bg-amber-700"></span></div>
      <div>Amber 800 <span className="inline-block w-[20px] h-[20px] bg-amber-800"></span></div>
      <div>Amber 900 <span className="inline-block w-[20px] h-[20px] bg-amber-900"></span></div>
      <div>Amber 950 <span className="inline-block w-[20px] h-[20px] bg-amber-950"></span></div>

      <div>Yellow 50 <span className="inline-block w-[20px] h-[20px] bg-yellow-50"></span></div>
      <div>Yellow 100 <span className="inline-block w-[20px] h-[20px] bg-yellow-100"></span></div>
      <div>Yellow 200 <span className="inline-block w-[20px] h-[20px] bg-yellow-200"></span></div>
      <div>Yellow 300 <span className="inline-block w-[20px] h-[20px] bg-yellow-300"></span></div>
      <div>Yellow 400 <span className="inline-block w-[20px] h-[20px] bg-yellow-400"></span></div>
      <div>Yellow 500 <span className="inline-block w-[20px] h-[20px] bg-yellow-500"></span></div>
      <div>Yellow 600 <span className="inline-block w-[20px] h-[20px] bg-yellow-600"></span></div>
      <div>Yellow 700 <span className="inline-block w-[20px] h-[20px] bg-yellow-700"></span></div>
      <div>Yellow 800 <span className="inline-block w-[20px] h-[20px] bg-yellow-800"></span></div>
      <div>Yellow 900 <span className="inline-block w-[20px] h-[20px] bg-yellow-900"></span></div>
      <div>Yellow 950 <span className="inline-block w-[20px] h-[20px] bg-yellow-950"></span></div>

      <div>Lime 50 <span className="inline-block w-[20px] h-[20px] bg-lime-50"></span></div>
      <div>Lime 100 <span className="inline-block w-[20px] h-[20px] bg-lime-100"></span></div>
      <div>Lime 200 <span className="inline-block w-[20px] h-[20px] bg-lime-200"></span></div>
      <div>Lime 300 <span className="inline-block w-[20px] h-[20px] bg-lime-300"></span></div>
      <div>Lime 400 <span className="inline-block w-[20px] h-[20px] bg-lime-400"></span></div>
      <div>Lime 500 <span className="inline-block w-[20px] h-[20px] bg-lime-500"></span></div>
      <div>Lime 600 <span className="inline-block w-[20px] h-[20px] bg-lime-600"></span></div>
      <div>Lime 700 <span className="inline-block w-[20px] h-[20px] bg-lime-700"></span></div>
      <div>Lime 800 <span className="inline-block w-[20px] h-[20px] bg-lime-800"></span></div>
      <div>Lime 900 <span className="inline-block w-[20px] h-[20px] bg-lime-900"></span></div>
      <div>Lime 950 <span className="inline-block w-[20px] h-[20px] bg-lime-950"></span></div>

      <div>Green 50 <span className="inline-block w-[20px] h-[20px] bg-green-50"></span></div>
      <div>Green 100 <span className="inline-block w-[20px] h-[20px] bg-green-100"></span></div>
      <div>Green 200 <span className="inline-block w-[20px] h-[20px] bg-green-200"></span></div>
      <div>Green 300 <span className="inline-block w-[20px] h-[20px] bg-green-300"></span></div>
      <div>Green 400 <span className="inline-block w-[20px] h-[20px] bg-green-400"></span></div>
      <div>Green 500 <span className="inline-block w-[20px] h-[20px] bg-green-500"></span></div>
      <div>Green 600 <span className="inline-block w-[20px] h-[20px] bg-green-600"></span></div>
      <div>Green 700 <span className="inline-block w-[20px] h-[20px] bg-green-700"></span></div>
      <div>Green 800 <span className="inline-block w-[20px] h-[20px] bg-green-800"></span></div>
      <div>Green 900 <span className="inline-block w-[20px] h-[20px] bg-green-900"></span></div>
      <div>Green 950 <span className="inline-block w-[20px] h-[20px] bg-green-950"></span></div> */}
      
      {/* <Frame title="Alerts">
        <Alert variant="success" description="Profile updated successfully!" />
        <Alert variant="warning" description="Profile updated successfully!" />
        <Alert variant="error" description="Profile updated successfully!" />
        <Alert variant="info" description="Profile updated successfully!" />
      </Frame> */}

      {/* <Frame title="Headings">
        <Heading size={'3xl'} level={3}>Heading 3xl</Heading>
        <Heading size={'2xl'} level={3}>Heading 2xl</Heading>
        <Heading size={'xl'} level={3}>Heading xl</Heading>
        <Heading size={'lg'} level={3}>Heading lg</Heading>
        <Heading size={'md'} level={3}>Heading md</Heading> 
        <Heading size={'sm'} level={3}>Heading sm</Heading> 
      </Frame> */}
 
    </div>
  );
}

// ─── SECTION: GLOBAL COMPONENTS ──────────────────────────────────────────────

function GlobalSection() {
  const [inputVal, setInputVal] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [toastType, setToastType] = useState<
    "success" | "error" | "warning" | "info"
  >("success");

  const showToast = (type: "success" | "error" | "warning" | "info") => {
    setToastType(type);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3500);
  };

  const toastConfig = {
    success: {
      bg: "bg-[#d1fae5]",
      text: "text-[#059669]",
      icon: <CheckCircle size={16} />,
      msg: "Profile updated successfully!",
    },
    error: {
      bg: "bg-[#fee2e2]",
      text: "text-[#dc2626]",
      icon: <X size={16} />,
      msg: "Something went wrong. Try again.",
    },
    warning: {
      bg: "bg-[#fef3c7]",
      text: "text-[#d97706]",
      icon: <AlertCircle size={16} />,
      msg: "Your session expires in 5 min.",
    },
    info: {
      bg: "bg-[#dbeafe]",
      text: "text-[#2563eb]",
      icon: <Info size={16} />,
      msg: "New feature available — check it out.",
    },
  };

  return (
    <div className="space-y-8">
      <HeadingHeader
        label="Global Components"
        sub="Shared across both platforms: buttons, forms, feedback, and overlays."
      />

      
     
      {/* Forms */}
      <Frame title="Form Inputs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          {/* Text input default */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-[#374151]">
              Full Name
            </label>
            <Input
              type="text"
              placeholder="e.g. Sophia Reyes"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <p className="text-xs text-[#9ca3af]">
              Enter your legal full name.
            </p>
          </div>

          {/* Password input */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-[#374151]">
              Password
            </label>
            <PasswordInput placeholder="Min. 8 characters" />
          </div>

          {/* Dropdown */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-[#374151]">
              Category
            </label>
            <div className="relative">
              <Select
                value={dropdown}
                onChange={(e) => setDropdown(e.target.value)}
                options={[
                  { value: "", label: "Select a category…" },
                  { value: "electronics", label: "Electronics" },
                  { value: "apparel", label: "Apparel" },
                  { value: "home", label: "Home & Living" },
                  { value: "beauty", label: "Beauty" },
                ]}
              />
              <ChevronDown
                size={15}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] pointer-events-none"
              />
            </div>
          </div>

          {/* Error state */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-[#374151]">
              Email Address
            </label>
            <Input
              type="email"
              defaultValue="not-an-email"
              className="border-[#ef4444] bg-[#fff5f5] focus:ring-[#ef4444]"
            />
            <p className="text-xs text-[#ef4444] flex items-center gap-1">
              <AlertCircle size={12} /> Please enter a valid email address.
            </p>
          </div>



        </div>
      </Frame>

      {/* Toasts */}
      <Frame title="Toast Notifications">
        <div className="flex flex-wrap gap-3">
          {(["success", "error", "warning", "info"] as const).map((t) => (
            <Button
              key={t}
              variant="tertiary"
              size="sm"
              onClick={() => showToast(t)}
            >
              Show {t}
            </Button>
          ))}
        </div>
        {/* Live toast */}
        <div
          className={`mt-4 flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border transition-all duration-300 ${
            toastVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          } ${toastConfig[toastType].bg} border-transparent max-w-sm`}
        >
          <span className={toastConfig[toastType].text}>
            {toastConfig[toastType].icon}
          </span>
          <span
            className={`text-sm font-medium ${toastConfig[toastType].text}`}
          >
            {toastConfig[toastType].msg}
          </span>
          <button
            className={`ml-auto ${toastConfig[toastType].text} opacity-60 hover:opacity-100`}
            onClick={() => setToastVisible(false)}
          >
            <X size={14} />
          </button>
        </div>
      </Frame>

      {/* Modal trigger */}
      <Frame title="Modal / Dialog">
        <Button variant="primary" onClick={() => setModalOpen(true)}>
          Open Modal
        </Button>
        <p className="text-xs text-[#9ca3af] mt-2">
          Elevation High — 16px radius, dark backdrop.
        </p>
      </Frame>

      {/* Modal overlay */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#0f0e2a]/50 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-[#111827]">
                  Confirm Action
                </h3>
                <p className="text-sm text-[#6b7280] mt-0.5">
                  This cannot be undone.
                </p>
              </div>
              <button
                className="text-[#9ca3af] hover:text-[#374151] transition-colors"
                onClick={() => setModalOpen(false)}
              >
                <X size={20} />
              </button>
            </div>
            <p className="text-sm text-[#374151] mb-6">
              Are you sure you want to delete{" "}
              <strong>Wireless Headphones Pro</strong>? All associated data,
              including reviews and sales history, will be permanently removed.
            </p>
            <div className="flex items-center gap-3 justify-end">
              <Button variant="tertiary" onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => setModalOpen(false)}>
                Delete Product
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── SECTION: E-COMMERCE ─────────────────────────────────────────────────────

function EcommerceSection() {
  const [cartCount, setCartCount] = useState(2);
  const [qty, setQty] = useState(1);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const toggleWishlist = (id: number) =>
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  const products = [
    {
      id: 1,
      name: "Wireless Headphones Pro",
      price: 249,
      originalPrice: 299,
      rating: 4.7,
      reviews: 312,
      badge: "sale" as const,
      img: "photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 2,
      name: "Ultralight Running Shoes",
      price: 119,
      originalPrice: null,
      rating: 4.5,
      reviews: 187,
      badge: "new" as const,
      img: "photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 3,
      name: "Ceramic Pour-Over Set",
      price: 64,
      originalPrice: null,
      rating: 4.9,
      reviews: 93,
      badge: null,
      img: "photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 4,
      name: "Smart Watch Series 4",
      price: 399,
      originalPrice: 449,
      rating: 4.6,
      reviews: 540,
      badge: "sale" as const,
      img: "photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&auto=format",
    },
  ];

  const cartItems = [
    {
      name: "Wireless Headphones Pro",
      variant: "Black",
      price: 249,
      img: "photo-1505740420928-5e560c06d30e?w=80&h=80&fit=crop&auto=format",
    },
    {
      name: "Ultralight Running Shoes",
      variant: "Size 10 / White",
      price: 119,
      img: "photo-1542291026-7eec264c27ff?w=80&h=80&fit=crop&auto=format",
    },
  ];

  return (
    <div className="space-y-8">
      <HeadingHeader
        label="E-commerce Components"
        sub="Navigation header, product cards, cart drawer, badges, and checkout elements."
      />

      {/* Header */}
      <Frame title="Navigation Header">
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
      </Frame>

      {/* Product Cards */}
      <Frame title="Product Cards">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-xl border border-[#e5e7eb] overflow-hidden hover:shadow-lg hover:border-[#c7d2fe] transition-all duration-200"
            >
              <div className="relative bg-[#f8f9fc] aspect-square overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${p.img}`}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {p.badge && (
                  <div className="absolute top-2.5 left-2.5">
                    <Badge
                      label={p.badge === "sale" ? "SALE" : "NEW"}
                      variant={p.badge}
                    />
                  </div>
                )}
                <button
                  onClick={() => toggleWishlist(p.id)}
                  className="absolute top-2.5 right-2.5 p-1.5 bg-white rounded-full shadow-sm border border-[#e5e7eb] hover:border-[#c7d2fe] transition-colors"
                >
                  <Heart
                    size={14}
                    className={
                      wishlist.includes(p.id)
                        ? "fill-[#ef4444] text-[#ef4444]"
                        : "text-[#9ca3af]"
                    }
                  />
                </button>
              </div>
              <div className="p-3.5">
                <p className="text-sm font-semibold text-[#111827] leading-snug line-clamp-2">
                  {p.name}
                </p>
                <div className="flex items-center gap-1 mt-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={11}
                      className={
                        i < Math.floor(p.rating)
                          ? "fill-[#f59e0b] text-[#f59e0b]"
                          : "text-[#e5e7eb]"
                      }
                    />
                  ))}
                  <span className="text-[11px] text-[#6b7280] ml-1">
                    {p.rating} ({p.reviews})
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-base font-bold text-[#111827]">
                    ${p.price}
                  </span>
                  {p.originalPrice && (
                    <span className="text-xs text-[#9ca3af] line-through">
                      ${p.originalPrice}
                    </span>
                  )}
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setCartCount((c) => c + 1)}
                >
                  <Plus size={13} /> Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Frame>

      {/* Cart + Checkout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Frame title="Cart Item List">
          <div className="space-y-3">
            {cartItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 bg-[#f8f9fc] rounded-xl border border-[#e5e7eb]"
              >
                <div className="w-14 h-14 rounded-lg overflow-hidden bg-white border border-[#e5e7eb] shrink-0">
                  <img
                    src={`https://images.unsplash.com/${item.img}`}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#111827] truncate">
                    {item.name}
                  </p>
                  <p className="text-xs text-[#6b7280]">{item.variant}</p>
                  <p className="text-sm font-bold text-[#4f46e5] mt-0.5">
                    ${item.price}
                  </p>
                </div>
                <div className="flex items-center border border-[#e5e7eb] rounded-lg overflow-hidden">
                  <button
                    className="px-2 py-1.5 text-[#374151] hover:bg-[#f1f3f9] transition-colors"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                  >
                    <Minus size={13} />
                  </button>
                  <span className="px-3 text-sm font-semibold text-[#111827] bg-white">
                    {i === 0 ? qty : 1}
                  </span>
                  <button
                    className="px-2 py-1.5 text-[#374151] hover:bg-[#f1f3f9] transition-colors"
                    onClick={() => setQty((q) => q + 1)}
                  >
                    <Plus size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Promo code */}
          <div className="mt-4">
            <label className="text-xs font-semibold text-[#374151] block mb-2">
              Promo Code
            </label>
            <div className="flex gap-2">
              <Input
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                placeholder="e.g. NOVA20"
                className="flex-1 px-3 py-2 rounded-lg border border-[#e5e7eb] bg-[#f9fafb] text-sm font-mono placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#4f46e5] transition-all"
              />
              <Button
                variant={promoApplied ? "secondary" : "primary"}
                size="sm"
                onClick={() => promoCode && setPromoApplied(true)}
              >
                {promoApplied ? (
                  <>
                    <CheckCircle size={13} /> Applied
                  </>
                ) : (
                  "Apply"
                )}
              </Button>
            </div>
            {promoApplied && (
              <p className="text-xs text-[#059669] mt-1.5 flex items-center gap-1">
                <CheckCircle size={11} /> Promo code applied — 20% off!
              </p>
            )}
          </div>
        </Frame>

        <Frame title="Order Summary">
          <div className="space-y-3">
            <div className="flex justify-between text-sm text-[#374151]">
              <span>Subtotal (2 items)</span>
              <span>$368.00</span>
            </div>
            <div className="flex justify-between text-sm text-[#374151]">
              <span>Shipping</span>
              <span className="text-[#059669] font-medium">Free</span>
            </div>
            {promoApplied && (
              <div className="flex justify-between text-sm text-[#059669] font-medium">
                <span>Promo (NOVA20)</span>
                <span>–$73.60</span>
              </div>
            )}
            <div className="flex justify-between text-sm text-[#374151]">
              <span>Tax (8%)</span>
              <span>{promoApplied ? "$23.55" : "$29.44"}</span>
            </div>
            <div className="border-t border-[#e5e7eb] pt-3 flex justify-between">
              <span className="font-bold text-[#111827]">Total</span>
              <span className="font-bold text-[#4f46e5] text-lg">
                {promoApplied ? "$317.95" : "$397.44"}
              </span>
            </div>
          </div>
          <div className="mt-5 space-y-2.5">
            <Button variant="primary" size="lg">
              <ShoppingCart size={16} /> Checkout
            </Button>
            <Button variant="tertiary" size="md">
              Continue Shopping
            </Button>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-[#9ca3af]">
            <CheckCircle size={12} className="text-[#10b981]" />
            Secure checkout · 256-bit SSL encryption
          </div>
        </Frame>
      </div>
    </div>
  );
}

// ─── SECTION: DASHBOARD ──────────────────────────────────────────────────────

function DashboardSection() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sortCol, setSortCol] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);
  const totalPages = 3;

  const navItems = [
    { icon: <Home size={18} />, label: "Overview" },
    { icon: <ShoppingBag size={18} />, label: "Orders", badge: "12" },
    { icon: <Package size={18} />, label: "Products" },
    { icon: <Users size={18} />, label: "Customers" },
    { icon: <BarChart2 size={18} />, label: "Analytics" },
    { icon: <FileText size={18} />, label: "Reports" },
    { icon: <Settings size={18} />, label: "Settings" },
  ];

  const metrics = [
    {
      label: "Total Revenue",
      value: "$74,230",
      trend: "+12.4%",
      up: true,
      sub: "vs. last month",
    },
    {
      label: "Orders",
      value: "1,248",
      trend: "+8.1%",
      up: true,
      sub: "this month",
    },
    {
      label: "Active Customers",
      value: "9,431",
      trend: "+3.7%",
      up: true,
      sub: "registered users",
    },
    {
      label: "Avg. Order Value",
      value: "$59.48",
      trend: "–1.2%",
      up: false,
      sub: "per transaction",
    },
  ];

  const handleSort = (col: string) => {
    if (sortCol === col) setDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortCol(col);
      setSortDir("asc");
    }
  };
  function setDir(fn: (d: "asc" | "desc") => "asc" | "desc") {
    setSortDir(fn(sortDir));
  }

  return (
    <div className="space-y-8">
      <HeadingHeader
        label="Admin Dashboard Components"
        sub="Sidebar navigation, metric cards, data table with sorting, charts, and pagination."
      />

      {/* Sidebar + content layout */}
      <Frame title="Sidebar Navigation">
        <div className="flex gap-0 rounded-xl overflow-hidden border border-[#e5e7eb] h-[480px]">
          {/* Sidebar */}
          <aside
            className={`flex flex-col transition-all duration-300 ${sidebarCollapsed ? "w-14" : "w-52"} bg-[#1e1b4b] shrink-0`}
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
              {!sidebarCollapsed && (
                <span className="font-bold text-white text-sm tracking-tight">
                  NOVA Admin
                </span>
              )}
              <button
                onClick={() => setSidebarCollapsed((v) => !v)}
                className="text-[#a5b4fc] hover:text-white transition-colors ml-auto"
              >
                <Menu size={18} />
              </button>
            </div>
            <nav className="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto">
              {navItems.map((item, i) => (
                <button
                  key={i}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    i === 0
                      ? "bg-[#4f46e5] text-white"
                      : "text-[#a5b4fc] hover:bg-[#312e81] hover:text-white"
                  }`}
                >
                  <span className="shrink-0">{item.icon}</span>
                  {!sidebarCollapsed && (
                    <>
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.badge && (
                        <span className="bg-[#ef4444] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </button>
              ))}
            </nav>
            <div className="p-3 border-t border-white/10">
              {!sidebarCollapsed ? (
                <div className="flex items-center gap-2 px-2 py-1.5">
                  <div className="w-7 h-7 rounded-full bg-[#4f46e5] flex items-center justify-center text-white text-xs font-bold shrink-0">
                    SR
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-white truncate">
                      Sophia Reyes
                    </p>
                    <p className="text-[10px] text-[#818cf8] truncate">Admin</p>
                  </div>
                  <button className="ml-auto text-[#818cf8] hover:text-white">
                    <LogOut size={14} />
                  </button>
                </div>
              ) : (
                <div className="flex justify-center">
                  <div className="w-7 h-7 rounded-full bg-[#4f46e5] flex items-center justify-center text-white text-xs font-bold">
                    SR
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* Dashboard content preview */}
          <div className="flex-1 overflow-y-auto bg-[#f8f9fc] p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-[#111827]">Overview</h3>
                <p className="text-xs text-[#6b7280]">Thu, July 3, 2026</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="tertiary" size="sm">
                  <Filter size={13} /> Filter
                </Button>
                <Button variant="primary" size="sm">
                  <Download size={13} /> Export
                </Button>
              </div>
            </div>

            {/* Metric cards */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-white rounded-xl border border-[#e5e7eb] p-4 shadow-sm"
                >
                  <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider">
                    {m.label}
                  </p>
                  <p className="text-2xl font-bold text-[#111827] mt-1 font-mono">
                    {m.value}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <span
                      className={`flex items-center gap-0.5 text-xs font-semibold ${m.up ? "text-[#059669]" : "text-[#ef4444]"}`}
                    >
                      {m.up ? (
                        <TrendingUp size={12} />
                      ) : (
                        <TrendingDown size={12} />
                      )}
                      {m.trend}
                    </span>
                    <span className="text-[11px] text-[#9ca3af]">{m.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#9ca3af] text-center">
              ↓ Scroll for charts & table
            </p>
          </div>
        </div>
      </Frame>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Frame title="Revenue Trend — Line Chart" className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={220}>
            <LineChart
              data={revenueData}
              margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f3f9" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 11, fill: "#9ca3af" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#9ca3af" }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `$${v / 1000}k`}
              />
              <Tooltip
                contentStyle={{
                  fontSize: 12,
                  borderRadius: 8,
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
                formatter={(v: any) => [`$${v.toLocaleString()}`, "Revenue"]}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#4f46e5"
                strokeWidth={2.5}
                dot={{ r: 4, fill: "#4f46e5", strokeWidth: 0 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="orders"
                stroke="#818cf8"
                strokeWidth={1.5}
                strokeDasharray="4 3"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex items-center gap-4 mt-2">
            <span className="flex items-center gap-1.5 text-xs text-[#6b7280]">
              <span className="w-3 h-0.5 bg-[#4f46e5] rounded inline-block" />{" "}
              Revenue
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#6b7280]">
              <span className="w-3 h-0.5 bg-[#818cf8] rounded inline-block" />{" "}
              Orders
            </span>
          </div>
        </Frame>

        <Frame title="Sales by Category — Donut">
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={70}
                paddingAngle={3}
                dataKey="value"
              >
                {categoryData.map((_, i) => (
                  <Cell key={i} fill={DONUT_COLORS[i]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  fontSize: 12,
                  borderRadius: 8,
                  border: "1px solid #e5e7eb",
                }}
                formatter={(v: number) => [`${v}%`, ""]}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-1.5 mt-2">
            {categoryData.map((d, i) => (
              <div key={d.name} className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: DONUT_COLORS[i] }}
                />
                <span className="text-[11px] text-[#6b7280] truncate">
                  {d.name}
                </span>
                <span className="text-[11px] font-semibold text-[#374151] ml-auto">
                  {d.value}%
                </span>
              </div>
            ))}
          </div>
        </Frame>
      </div>

      <Frame title="Monthly Sales — Bar Chart">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={revenueData}
            margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f1f3f9"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 11, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `$${v / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                fontSize: 12,
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
              formatter={(v: number) => [`$${v.toLocaleString()}`, "Revenue"]}
            />
            <Bar dataKey="revenue" fill="#4f46e5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Frame>

      {/* Data Table */}
      <Frame title="Orders Data Table">
        <div className="flex items-center justify-between mb-4">
          <div className="relative">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]"
            />
            <Input
              placeholder="Search orders…"
              className="pl-8 pr-3 py-2 rounded-lg w-56"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="tertiary" size="sm">
              <Filter size={13} /> Filter
            </Button>
            <Button variant="tertiary" size="sm">
              <Download size={13} /> Export
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#e5e7eb]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#f8f9fc] border-b border-[#e5e7eb]">
                {[
                  "Order ID",
                  "Customer",
                  "Product",
                  "Amount",
                  "Status",
                  "Date",
                ].map((col) => (
                  <th
                    key={col}
                    className="px-4 py-3 text-left text-xs font-semibold text-[#6b7280] uppercase tracking-wider cursor-pointer hover:text-[#4f46e5] select-none group"
                    onClick={() => handleSort(col)}
                  >
                    <div className="flex items-center gap-1">
                      {col}
                      <span
                        className={`transition-opacity ${sortCol === col ? "opacity-100 text-[#4f46e5]" : "opacity-0 group-hover:opacity-50"}`}
                      >
                        {sortCol === col && sortDir === "desc" ? (
                          <ChevronDown size={12} />
                        ) : (
                          <ChevronRight size={12} className="rotate-[-90deg]" />
                        )}
                      </span>
                    </div>
                  </th>
                ))}
                <th className="px-4 py-3 w-10" />
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f1f3f9]">
              {tableOrders.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-[#f8f9fc] transition-colors"
                >
                  <td className="px-4 py-3 font-mono text-xs text-[#4f46e5] font-semibold">
                    {row.id}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#eef2ff] flex items-center justify-center text-[#4f46e5] text-[10px] font-bold shrink-0">
                        {row.customer
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="font-medium text-[#111827] text-sm">
                        {row.customer}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[#374151] max-w-[180px] truncate">
                    {row.product}
                  </td>
                  <td className="px-4 py-3 font-mono font-semibold text-[#111827]">
                    {row.amount}
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={row.status} />
                  </td>
                  <td className="px-4 py-3 text-[#9ca3af] text-xs">
                    {row.date}
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-[#9ca3af] hover:text-[#374151] p-1 rounded hover:bg-[#f1f3f9] transition-colors">
                      <MoreHorizontal size={15} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-xs text-[#9ca3af]">
            Showing <span className="font-semibold text-[#374151]">5</span> of{" "}
            <span className="font-semibold text-[#374151]">124</span> results
          </p>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="p-1.5 rounded-lg border border-[#e5e7eb] text-[#374151] hover:bg-[#f1f3f9] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={14} />
            </button>
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`w-8 h-8 rounded-lg text-sm font-semibold transition-colors ${
                  page === n
                    ? "bg-[#4f46e5] text-white shadow-sm"
                    : "border border-[#e5e7eb] text-[#374151] hover:bg-[#f1f3f9]"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="p-1.5 rounded-lg border border-[#e5e7eb] text-[#374151] hover:bg-[#f1f3f9] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </Frame>
    </div>
  );
}

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<SectionKey>("tokens");

  const sections: Record<SectionKey, React.ReactNode> = {
    tokens: <TokensSection />,
    global: <GlobalSection />,
    ecommerce: <EcommerceSection />,
    dashboard: <DashboardSection />,
  };

  return (
    <>
      <div
      // className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black"
      >
        <main
        // className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start"
        >
          {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /> */}

          {/*         
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div> 
        */}

          {/* 
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
        */}
        </main>
      </div>

      <header className="sticky top-0 z-40 bg-white border-b border-[#e5e7eb] shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 py-0 flex items-center gap-0">
          <div className="flex items-center gap-2.5 py-4 pr-8 border-r border-[#e5e7eb]">
            <div className="w-7 h-7 rounded-lg bg-[#4f46e5] flex items-center justify-center">
              <Zap size={14} className="text-white" />
            </div>
            <div>
              <span className="font-bold text-[#111827] text-sm leading-none block">
                Nova Design System
              </span>
              <span className="text-[10px] text-[#9ca3af] font-mono">
                v1.0.0
              </span>
            </div>
          </div>
          <nav className="flex-1 flex items-center gap-0 ml-2">
            {NAV_SECTIONS.map((s) => (
              <button
                key={s.key}
                onClick={() => setActiveSection(s.key)}
                className={`flex items-center gap-2 px-4 py-4 text-sm font-semibold border-b-2 transition-colors ${
                  activeSection === s.key
                    ? "border-[#4f46e5] text-[#4f46e5]"
                    : "border-transparent text-[#6b7280] hover:text-[#374151] hover:border-[#e5e7eb]"
                }`}
              >
                {s.icon}
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            ))}
          </nav>
          <div className="pl-8 border-l border-[#e5e7eb] py-4 flex items-center gap-2">
            <span className="hidden md:flex items-center gap-1.5 text-xs text-[#9ca3af]">
              <ArrowUpRight size={12} />
              B2C + Admin
            </span>
            <Badge label="Draft" variant="muted" />
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 py-10">
        {sections[activeSection]}
      </main>
    </>
  );
} 