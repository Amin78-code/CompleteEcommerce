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
import StorefrontHomePage from "./src/app/storefront/page";

export default function HOME() {

  return (
    <>
      <StorefrontHomePage />
    </>
  );
} 