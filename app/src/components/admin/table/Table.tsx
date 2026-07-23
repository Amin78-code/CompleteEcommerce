import React, { useState } from "react";
import {
  Search,
  Filter,
  Download,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button, Input } from "@/app/src/components/ui";

export type Column<T> = {
  key: string;
  header: string;
  sortable?: boolean;
  render?: (row: T) => React.ReactNode;
};

type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
  title?: string;
  searchPlaceholder?: string;
  onSearch?: (term: string) => void;
  onFilterClick?: () => void;
  onExportClick?: () => void;
  currentPage?: number;
  totalPages?: number;
  totalResults?: number;
  onPageChange?: (page: number) => void;
};

function Table<T extends { id: string | number }>({
  data,
  columns,
  searchPlaceholder = "Search...",
  onSearch,
  onFilterClick,
  onExportClick,
  currentPage = 1,
  totalPages = 1,
  totalResults = data.length,
  onPageChange,
}: TableProps<T>) {
  const [sortCol, setSortCol] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const handleSort = (key: string, sortable?: boolean) => {
    if (!sortable) return;
    if (sortCol === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortCol(key);
      setSortDir("asc");
    }
  };

  return (
    <div className="p-5 bg-white rounded-2xl border border-[#e5e7eb] shadow-sm">
      {/* Top Bar Controls */}
      <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
        <div className="relative">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af] z-[1]"
          />
          <Input
            placeholder={searchPlaceholder}
            onChange={(e) => onSearch && onSearch(e.target.value)}
            className="pl-8 pr-3 py-2 rounded-lg w-64 text-xs"
          />
        </div>
        <div className="flex items-center gap-2">
          {onFilterClick && (
            <Button variant="tertiary" size="sm" onClick={onFilterClick}>
              <Filter size={13} /> Filter
            </Button>
          )}
          {onExportClick && (
            <Button variant="tertiary" size="sm" onClick={onExportClick}>
              <Download size={13} /> Export
            </Button>
          )}
        </div>
      </div>

      {/* Table Area */}
      <div className="overflow-x-auto rounded-xl border border-[#e5e7eb]">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-[#f8f9fc] border-b border-[#e5e7eb]">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`px-4 py-3 text-xs font-semibold text-[#6b7280] uppercase tracking-wider select-none ${
                    col.sortable ? "cursor-pointer hover:text-[#4f46e5]" : ""
                  }`}
                  onClick={() => handleSort(col.key, col.sortable)}
                >
                  <div className="flex items-center gap-1">
                    {col.header}
                    {col.sortable && sortCol === col.key && (
                      <span className="text-[#4f46e5]">
                        {sortDir === "asc" ? (
                          <ChevronUp size={12} />
                        ) : (
                          <ChevronDown size={12} />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f1f3f9]">
            {data.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-[#f8f9fc] transition-colors"
              >
                {columns.map((col) => (
                  <td key={`${row.id}-${col.key}`} className="px-4 py-3">
                    {col.render
                      ? col.render(row)
                      : (row as Record<string, any>)[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between mt-4">
        <p className="text-xs text-[#9ca3af]">
          Showing{" "}
          <span className="font-semibold text-[#374151]">{data.length}</span>{" "}
          of{" "}
          <span className="font-semibold text-[#374151]">
            {totalResults}
          </span>{" "}
          results
        </p>
        <div className="flex items-center gap-1">
          <button
            onClick={() => onPageChange && onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-1.5 rounded-lg border border-[#e5e7eb] text-[#374151] hover:bg-[#f1f3f9] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={14} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => onPageChange && onPageChange(n)}
              className={`w-8 h-8 rounded-lg text-sm font-semibold transition-colors ${
                currentPage === n
                  ? "bg-[#4f46e5] text-white shadow-sm"
                  : "border border-[#e5e7eb] text-[#374151] hover:bg-[#f1f3f9]"
              }`}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => onPageChange && onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-1.5 rounded-lg border border-[#e5e7eb] text-[#374151] hover:bg-[#f1f3f9] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;