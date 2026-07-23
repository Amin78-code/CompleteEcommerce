import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

export type CategoryDataItem = {
  name: string;
  value: number;
};

type CategoryDonutChartProps = {
  data: CategoryDataItem[];
  colors?: string[];
  height?: number;
  className?: string;
};

const DEFAULT_COLORS = ["#4f46e5", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

function CategoryDonutChart({
  data,
  colors = DEFAULT_COLORS,
  height = 160,
  className = "",
}: CategoryDonutChartProps) {
  return (
    <div className={`w-full ${className}`}>
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={70}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((_, i) => (
              <Cell key={i} fill={colors[i % colors.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              fontSize: 12,
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
            formatter={(value: any) => [`${value}%`, "Share"]}
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 gap-1.5 mt-2">
        {data.map((d, i) => (
          <div key={d.name} className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: colors[i % colors.length] }}
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
    </div>
  );
}

export default CategoryDonutChart;