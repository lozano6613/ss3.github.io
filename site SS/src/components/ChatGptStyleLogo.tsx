"use client";

import React, { useId } from "react";

interface ChatGptStyleLogoProps {
  className?: string;
}

const ChatGptStyleLogo: React.FC<ChatGptStyleLogoProps> = ({ className = "w-[36px] h-auto" }) => {
  // Создаем уникальные идентификаторы для градиентов
  const mainGradId = useId();
  const accentGradId = useId();

  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id={mainGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d1d1d1" />
        </linearGradient>
        <linearGradient id={accentGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#63b3ed" />
          <stop offset="100%" stopColor="#2b6cb0" />
        </linearGradient>
      </defs>

      {/* Шестиугольная форма */}
      <path
        d="M18 4 L30 11.5 L30 24.5 L18 32 L6 24.5 L6 11.5 Z"
        fill="#0c0d0e"
        stroke="url(#mainGradId)"
        strokeWidth="0.5"
        opacity="0.7"
      />

      {/* Переплетенный узор в стиле логотипа ChatGPT - внешний контур */}
      <path
        d="M14.5 8.5 L21.5 8.5 L21.5 15.5 L28.5 15.5 L28.5 22.5 L21.5 22.5 L21.5 29.5 L14.5 29.5 L14.5 22.5 L7.5 22.5 L7.5 15.5 L14.5 15.5 Z"
        stroke="url(#mainGradId)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Дополнительные линии для создания эффекта переплетения */}
      <path
        d="M21.5 8.5 L21.5 15.5 L28.5 15.5"
        stroke="#0c0d0e"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M28.5 22.5 L21.5 22.5 L21.5 29.5"
        stroke="#0c0d0e"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M14.5 29.5 L14.5 22.5 L7.5 22.5"
        stroke="#0c0d0e"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M7.5 15.5 L14.5 15.5 L14.5 8.5"
        stroke="#0c0d0e"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Переплетение верхний левый угол - с синим акцентом */}
      <path
        d="M14.5 8.5 L14.5 15.5 L7.5 15.5"
        stroke="url(#accentGradId)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Переплетение верхний правый угол */}
      <path
        d="M21.5 15.5 L28.5 15.5 L28.5 22.5"
        stroke="url(#mainGradId)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Переплетение нижний правый угол - с синим акцентом */}
      <path
        d="M21.5 22.5 L21.5 29.5 L14.5 29.5"
        stroke="url(#accentGradId)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Переплетение нижний левый угол */}
      <path
        d="M14.5 22.5 L7.5 22.5 L7.5 15.5"
        stroke="url(#mainGradId)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChatGptStyleLogo;
