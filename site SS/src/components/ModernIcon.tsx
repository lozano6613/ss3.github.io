"use client";

import React, { useId } from "react";

interface ModernIconProps {
  className?: string;
}

const ModernIcon: React.FC<ModernIconProps> = ({ className = "w-[46px] h-auto" }) => {
  // Создаем уникальные идентификаторы для градиентов
  const bgGradId = useId();
  const mainGradId = useId();
  const accentGradId = useId();

  return (
    <svg
      width="46"
      height="20"
      viewBox="0 0 46 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id={bgGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#222233" />
          <stop offset="100%" stopColor="#101018" />
        </linearGradient>
        <linearGradient id={mainGradId} x1="10%" y1="10%" x2="90%" y2="90%">
          <stop offset="0%" stopColor="#2294f1" />
          <stop offset="100%" stopColor="#0d47a1" />
        </linearGradient>
        <linearGradient id={accentGradId} x1="10%" y1="90%" x2="90%" y2="10%">
          <stop offset="0%" stopColor="#ff4081" />
          <stop offset="100%" stopColor="#aa00ff" />
        </linearGradient>
      </defs>

      {/* Фоновый круг */}
      <rect x="3" y="1" width="40" height="18" rx="9" fill={`url(#${bgGradId})`} />

      {/* Левая скобка */}
      <path
        d="M13 5 L18 10 L13 15"
        strokeWidth="2"
        stroke={`url(#${mainGradId})`}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Правая скобка */}
      <path
        d="M33 5 L28 10 L33 15"
        strokeWidth="2"
        stroke={`url(#${mainGradId})`}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Слеш посередине */}
      <path
        d="M25 4 L21 16"
        strokeWidth="2"
        stroke={`url(#${accentGradId})`}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Декоративные элементы */}
      <circle cx="23" cy="10" r="8" fill="none" stroke={`url(#${mainGradId})`} strokeWidth="0.3" opacity="0.5" />
      <circle cx="16" cy="7" r="0.5" fill="white" opacity="0.8" />
      <circle cx="30" cy="7" r="0.5" fill="white" opacity="0.8" />
      <circle cx="23" cy="17" r="0.5" fill="white" opacity="0.8" />
    </svg>
  );
};

export default ModernIcon;
