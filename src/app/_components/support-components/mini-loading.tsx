"use client";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from "@mui/material/styles";
export function MiniLoading() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  return (
    <div className="w-full h-[92%] flex flex-col justify-center items-center bg-black/60 backdrop-blur-[12px]">
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={isDark ? "#308fe8" : "#e01cd5"} />
            <stop offset="100%" stopColor={isDark ? "#1a90ff" : "#1CB5E0"} />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress
        className="overflow-hidden rounded-full"
        sx={{
          "svg circle": {
            stroke: "url(#my_gradient)",
            strokeLinecap: "round",
            strokeWidth: "6px",
          },
        }}
      />
    </div>
  );
}
