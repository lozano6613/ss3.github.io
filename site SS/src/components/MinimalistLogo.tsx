"use client";

import React, { useId } from "react";

interface MinimalistLogoProps {
  className?: string;
}

const MinimalistLogo: React.FC<MinimalistLogoProps> = ({ className = "w-[36px] h-auto" }) => {
  // Создаем уникальные идентификаторы для градиентов
  const mainGradId = useId();
  const accentGradId = useId();

  return (
    <svg
      width="36"
      height="24"
      viewBox="0 0 36 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id={mainGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#aaaaaa" />
        </linearGradient>
        <linearGradient id={accentGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2294f1" />
          <stop offset="100%" stopColor="#0d47a1" />
        </linearGradient>
      </defs>

      {/* Основная буква "B" */}
      <path
        d="M8 4 L8 20 L18 20 C22 20 24 18 24 16 C24 14 22 12 19 12 C21 12 22 10 22 8 C22 6 20 4 16 4 Z"
        strokeWidth="1.5"
        stroke={`url(#${mainGradId})`}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Внутренняя часть буквы "B" */}
      <path
        d="M12 8 L16 8 C17 8 18 8 18 9 C18 10 17 10 16 10 L12 10 Z"
        fill={`url(#${mainGradId})`}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M12 14 L17 14 C18 14 19 14 19 15 C19 16 18 16 17 16 L12 16 Z"
        fill={`url(#${mainGradId})`}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Вспышка молнии - акцент */}
      <path
        d="M26 8 L30 8 L27 14 L32 14 L24 20 L26 14 L22 14 Z"
        fill={`url(#${accentGradId})`}
        strokeWidth="0.2"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MinimalistLogo;
