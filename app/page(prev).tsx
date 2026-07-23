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
  Lock,
  Mail,
} from "lucide-react";

import {
  Line,
  // BarChart,
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
} from "@/app/src/components/ui";

import {
 HeadingHeader,
 Modal,
 Navigation1,
 Toast,
 PC,
 CartItemCard1,
 PromoCodeInput,
 OrderSummary,
 LineChart,
 DonutChart,
 BarChart,
 Frame,
 Table,
 ProductCard
} from "@/app/src/components";


type SectionKey = "tokens" | "dashboard";

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

function TokensSection() {

  const [toastVisible, setToastVisible] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

 // States for different dropdowns
  const [basicCategory, setBasicCategory] = useState("");
  const [errorCountry, setErrorCountry] = useState("");
  const [successRole, setSuccessRole] = useState("editor");
  const [disabledValue, setDisabledValue] = useState("pro");

  const categoryOptions = [
    { value: "", label: "Select a category…" },
    { value: "electronics", label: "Electronics" },
    { value: "apparel", label: "Apparel" },
    { value: "home", label: "Home & Living" },
  ];

  const countryOptions = [
    { value: "", label: "Select shipping country…" },
    { value: "ae", label: "United Arab Emirates" },
    { value: "pk", label: "Pakistan" },
    { value: "us", label: "United States" },
  ];

  const roleOptions = [
    { value: "admin", label: "Administrator" },
    { value: "editor", label: "Editor / Content Manager" },
    { value: "viewer", label: "Viewer Only" },
  ];

  const product1 = {
    id: "prod-1",
    name: "Wireless Noise-Cancelling Headphones Pro",
    img: "photo-1505740420928-5e560c06d30e?w=500&q=80",
    price: 299,
    originalPrice: 349,
    rating: 4.8,
    reviews: 124,
    badge: "sale",
  }

  const cart1 = {
    quantity: 3,
    name: "Wireless Headphones Pro",
    variant: "Black",
    price: 249,
    img: "photo-1505740420928-5e560c06d30e?w=80&h=80&fit=crop&auto=format",
  }

  const handleApplyPromo = async (code: string) => {
    // Simulating API call delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    if (code === "NOVA20") {
      // setDiscountPercent(20);
      return true;
    } else if (code === "WELCOME10") {
      // setDiscountPercent(10);
      return true;
    }

    return false; // Triggers error state in component
  };


  const [promo, setPromo] = useState<{ code: string; discountAmount: number } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const subtotal = 368.00;
  const handleCheckout = () => {
    setIsSubmitting(true);
    // Proceed to checkout navigation/API flow
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  const sampleRevenueData: any[] = [
  { month: "Jan", revenue: 12000, orders: 320 },
  { month: "Feb", revenue: 19000, orders: 480 },
  { month: "Mar", revenue: 15000, orders: 390 },
  { month: "Apr", revenue: 22000, orders: 550 },
  { month: "May", revenue: 28000, orders: 700 },
  { month: "Jun", revenue: 26000, orders: 640 },
];


const sampleCategoryData: any[] = [
  { name: "Electronics", value: 45 },
  { name: "Clothing", value: 25 },
  { name: "Home & Garden", value: 15 },
  { name: "Accessories", value: 15 },
];


const sampleBarData: any[] = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 19000 },
  { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 22000 },
  { month: "May", revenue: 28000 },
  { month: "Jun", revenue: 26000 },
];


const ordersData: any[] = [
  {
    id: "#ORD-9821",
    customer: "Alex Morgan",
    product: "Wireless Headphones",
    amount: "$120.00",
    status: "completed",
    date: "12 Jul 2026",
  },
  {
    id: "#ORD-9822",
    customer: "Sarah Jenkins",
    product: "Mechanical Keyboard",
    amount: "$85.50",
    status: "pending",
    date: "11 Jul 2026",
  },
];

const [page, setPage] = useState(1);

  // Column Configurations with Custom Renderers
  const columns: Column<OrderItem>[] = [
    {
      key: "id",
      header: "Order ID",
      sortable: true,
      render: (row:any) => (
        <span className="font-mono text-xs text-[#4f46e5] font-semibold">
          {row.id}
        </span>
      ),
    },
    {
      key: "customer",
      header: "Customer",
      sortable: true,
      render: (row:any) => (
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#eef2ff] flex items-center justify-center text-[#4f46e5] text-[10px] font-bold shrink-0">
            {row.customer
              .split(" ")
              .map((n:any) => n[0])
              .join("")}
          </div>
          <span className="font-medium text-[#111827] text-sm">
            {row.customer}
          </span>
        </div>
      ),
    },
    {
      key: "product",
      header: "Product",
      render: (row:any) => (
        <span className="text-[#374151] max-w-[180px] truncate block">
          {row.product}
        </span>
      ),
    },
    {
      key: "amount",
      header: "Amount",
      sortable: true,
      render: (row:any) => (
        <span className="font-mono font-semibold text-[#111827]">
          {row.amount}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (row:any) => <StatusBadge status={row.status} />,
    },
    {
      key: "date",
      header: "Date",
      render: (row:any) => <span className="text-[#9ca3af] text-xs">{row.date}</span>,
    },
    {
      key: "actions",
      header: "",
      render: () => (
        <button className="text-[#9ca3af] hover:text-[#374151] p-1 rounded hover:bg-[#f1f3f9] transition-colors">
          <MoreHorizontal size={15} />
        </button>
      ),
    },
  ];

  const handleOnWishlistToggle = () => {
    console.log('handleOnWishlistToggle called')
  }



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
      {/* <HeadingHeader
        label="UI Elements"
        sub="Color palette, typography, button, input, alert, toast"
      />  */}
     

     {/* <Input
        type="text"
        label="Full Name"
        placeholder="e.g. Sophia Reyes"
        helperText="Enter your legal full name."
        leftIcon={<User size={18} />}
        required
      />
      <Input
        type="email"
        label="Email Address"
        placeholder="you@example.com"
        defaultValue="not-an-email"
        error="Please enter a valid email address."
        leftIcon={<Mail size={18} />}
        required
      />
      <Input
        type="password"
        label="Password"
        placeholder="Min. 8 characters"
        helperText="Must include letters and numbers."
        leftIcon={<Lock size={18} />}
        required
      />
      <Input
        type="text"
        label="Success State"
        placeholder="Valid input data"
        success="Username is available!"
        leftIcon={<User size={18} />}
      />
      <Input
        type="text"
        label="Disabled Field"
        placeholder="Locked account data"
        disabled
        leftIcon={<Lock size={18} />}
      /> */}


      {/* <br /><Button size="sm">Small</Button>
      <br /><Button size="md">Medium</Button>
      <br /><Button size="lg">Large</Button> 
      
      <br /><Button variant="secondary">Secondary</Button>
      <br /><Button variant="tertiary">Tertiary</Button>
      <br /><Button variant="ghost">Ghost</Button>
      <br /><Button variant="danger">Danger</Button>

      <br /><Button variant="tertiary" size="sm"><Filter size={13} /> Filter</Button>
      <br /><Button variant="secondary" size="sm"><Filter size={13} /> Secondary</Button> */}
      
      {/* <br />
      <div>Red 50 <span className="inline-block w-[20px] h-[20px] bg-red-50"></span></div>
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
      <div>Green 950 <span className="inline-block w-[20px] h-[20px] bg-green-950"></span></div>
      

      <Frame title="Alerts">
        <Alert variant="success" description="Profile updated successfully!" />
        <Alert variant="warning" description="Profile updated successfully!" />
        <Alert variant="error" description="Profile updated successfully!" />
        <Alert variant="info" description="Profile updated successfully!" />
      </Frame>


      <Frame title="Headings">
        <Heading size={'3xl'} level={3}>Heading 3xl</Heading>
        <Heading size={'2xl'} level={3}>Heading 2xl</Heading>
        <Heading size={'xl'} level={3}>Heading xl</Heading>
        <Heading size={'lg'} level={3}>Heading lg</Heading>
        <Heading size={'md'} level={3}>Heading md</Heading> 
        <Heading size={'sm'} level={3}>Heading sm</Heading> 
      </Frame> */}
      

{/* 1. Default / Required State */}
      {/* <Select
        label="Product Category"
        value={basicCategory}
        options={categoryOptions}
        onChange={(value) => setBasicCategory(value)}
        helperText="Choose where this product will be listed."
        required
      /> */}

      {/* 2. Error / Validation State */}
      {/* <Select
        label="Shipping Destination"
        value={errorCountry}
        options={countryOptions}
        onChange={(value) => setErrorCountry(value)}
        error="We currently do not ship to the selected region."
        required
      /> */}

      {/* 3. Pre-filled / Selected State */}
      {/* <Select
        label="Dashboard Access Role"
        value={'viewer'}
        options={roleOptions}
        onChange={(value) => setSuccessRole(value)}
      /> */}

      {/* 4. Disabled State */}
      {/* <Select
        label="Subscription Plan"
        value={'pro'}
        options={[
          { value: "free", label: "Free Tier" },
          { value: "pro", label: "Enterprise Pro" }
        ]}
        onChange={(value) => setDisabledValue(value)}
        disabled={true}
        helperText="Plan changes are locked during active billing cycles."
      /> */}


      {/* <HeadingHeader
        label="Components"
        sub="Navigation Menu, Card"
      />

      <button onClick={() => setModalVisible(true)}>Show Modal</button>
      <Modal 
        isOpen={modalVisible}
        onClose={()=> setModalVisible(false)}
        title={'Heading'}
        subtitle={'Subtitle'}
        children={'lorem ipsum'}
        footerButtons={
          <>
            <Button variant="danger" onClick={()=> setModalVisible(false)}>Cancel</Button>
            <Button variant="primary" onClick={()=> setModalVisible(false)}>Oky</Button>
          </>
        }
      /> */}
      
      {/* <br />

      <button onClick={() => setToastVisible(true)}>Show Toast</button>
      <Toast
        show={toastVisible}
        message="Product added successfully."
        icon={<CheckCircle size={18} />}
        bgClass="bg-green-100"
        textClass="text-green-700"
        onClose={() => setToastVisible(false)}
      />
      <Toast
        show={toastVisible}
        message="Something went wrong."
        icon={<AlertCircle size={18} />}
        bgClass="bg-red-100"
        textClass="text-red-700"
        onClose={() => setToastVisible(false)}
      /> */}


      {/* <Navigation1 /> */}


      {/* <div className="max-w-[300px]">
        <PC
          key={3}
          product= {product1}      
          isWishlisted = {false}
          onWishlistToggle={() => {}}
          onAddToCart={() => {}}
        />
      </div> */}


      {/* cart1 */}
      {/* <CartItemCard1
        key={4}
        item={cart1}
        onUpdateQuantity={() => {}}
        onRemoveItem={() => {}}
      />
      */}


      {/* <PromoCodeInput
        onApplyPromo={handleApplyPromo}
        onRemovePromo={() => {}}
        appliedCode={""}
        discountMessage ={ "Promo code applied — 20% off!"}
        placeholder={ "e.g. NOVA20"}
        label ={ "Promo Code"}
      /> */}


      {/* <OrderSummary
        itemCount={2}
        subtotal={subtotal}
        shippingCost={0}
        taxRate={0.08}
        promo={promo}
        isLoading={isSubmitting}
        onCheckout={handleCheckout}
        onContinueShopping={() => console.log("Navigate back to shop")}
      /> */}
 
      {/* <div className="w-[500px] border border-[1px] border-[#ab6767] p-4">
        <LineChart data={sampleRevenueData} height={250}  />
      </div> */}

      {/* <div className="w-[500px]  border border-[1px] border-[#ab6767] p-4">
        <DonutChart data={sampleCategoryData} />
      </div> */}

      {/* <div className="w-[300px]">
        <ProductCard 
          product={product1}
          isWishlisted={true}
          onWishlistToggle={handleOnWishlistToggle}
          onAddToCart={() => {}}
          className={''}
        />
      </div> */}

      {/* <div className="w-[500px]  border border-[1px] border-[#ab6767] p-4">
        <BarChart data={sampleBarData} />
      </div> */}

      <Table
        data={ordersData}
        columns={columns}
        searchPlaceholder="Search orders..."
        currentPage={page}
        totalPages={3}
        totalResults={124}
        onPageChange={(p) => setPage(p)}
        onExportClick={() => console.log("Exporting...")}
        onFilterClick={() => console.log("Filtering...")}
      />
      
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
    // { icon: <BarChart2 size={18} />, label: "Analytics" },
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
      
    </div>
  );
}

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<SectionKey>("tokens");

  const sections: Record<SectionKey, React.ReactNode> = {
    tokens: <TokensSection />,
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