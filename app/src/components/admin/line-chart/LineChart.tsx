import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export type RevenueDataItem = {
  month: string;
  revenue: number;
  orders: number;
};

type RevenueChartProps = {
  data: RevenueDataItem[];
  height?: number;
  className?: string;
};

function RevenueChart({
  data,
  height = 220,
  className = "",
}: RevenueChartProps) {
  return (
    <div className={`w-full ${className}`}>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={data}
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
          <span className="w-3 h-0.5 bg-[#4f46e5] rounded inline-block" />
          Revenue
        </span>
        <span className="flex items-center gap-1.5 text-xs text-[#6b7280]">
          <span className="w-3 h-0.5 bg-[#818cf8] rounded inline-block" />
          Orders
        </span>
      </div>
    </div>
  );
}

export default RevenueChart;