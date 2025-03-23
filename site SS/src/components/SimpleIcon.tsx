"use client";

import React from "react";

interface SimpleIconProps {
  className?: string;
}

const SimpleIcon: React.FC<SimpleIconProps> = ({ className = "w-[46px] h-auto" }) => {
  return (
    <svg
      width="46"
      height="20"
      viewBox="0 0 46 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Фоновый прямоугольник */}
      <rect x="3" y="1" width="40" height="18" rx="9" fill="#1A1A2A" />

      {/* Левая скобка */}
      <path
        d="M13 5 L18 10 L13 15"
        strokeWidth="2"
        stroke="#2294f1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Правая скобка */}
      <path
        d="M33 5 L28 10 L33 15"
        strokeWidth="2"
        stroke="#2294f1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Слеш посередине */}
      <path
        d="M25 4 L21 16"
        strokeWidth="2"
        stroke="#ff4081"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Декоративные элементы */}
      <circle cx="23" cy="10" r="8" fill="none" stroke="#2294f1" strokeWidth="0.3" opacity="0.5" />
      <circle cx="16" cy="7" r="0.5" fill="white" opacity="0.8" />
      <circle cx="30" cy="7" r="0.5" fill="white" opacity="0.8" />
      <circle cx="23" cy="17" r="0.5" fill="white" opacity="0.8" />
    </svg>
  );
};

export default SimpleIcon;
