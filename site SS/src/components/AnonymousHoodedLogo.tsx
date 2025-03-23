"use client";

import React from "react";

interface AnonymousHoodedLogoProps {
  className?: string;
}

const AnonymousHoodedLogo: React.FC<AnonymousHoodedLogoProps> = ({ className = "w-[46px] h-auto" }) => {
  return (
    <svg
      viewBox="0 0 46 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background for better visibility */}
      <rect x="0" y="0" width="46" height="20" fill="#0c0d0e" rx="2" opacity="0.4" />

      {/* We'll scale and center our logo design */}
      <g transform="translate(9, 0.5) scale(0.6)">
        {/* Red background triangles/ears */}
        <path
          d="M0 6L13 0L14 9L10 17L0 6Z"
          fill="#DD2222"
        />
        <path
          d="M46 6L33 0L32 9L36 17L46 6Z"
          fill="#DD2222"
        />

        {/* Hood outer shape - dark gray */}
        <path
          d="M10 1L23 0L36 1L43 10L36 18L30 24L23 30L16 24L10 18L3 10L10 1Z"
          fill="#222222"
        />

        {/* Hood inner shape - medium gray */}
        <path
          d="M12 4L23 2.5L34 4L38 10L34 16L28 20L23 22L18 20L12 16L8 10L12 4Z"
          fill="#444444"
        />

        {/* Top hood highlight - light gray */}
        <path
          d="M15 5L23 4L31 5L30 8L23 10L16 8L15 5Z"
          fill="#777777"
        />

        {/* Red accents on hood sides */}
        <path
          d="M10 10L13 14L13 17L10 19L7 15L10 10Z"
          fill="#DD2222"
        />
        <path
          d="M36 10L33 14L33 17L36 19L39 15L36 10Z"
          fill="#DD2222"
        />

        {/* Face/mask - white with slight gradient */}
        <defs>
          <linearGradient id="maskGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E0E0E0" />
          </linearGradient>
        </defs>

        <path
          d="M15 8L23 6L31 8L30 15L27 17L23 19L19 17L16 15L15 8Z"
          fill="url(#maskGradient)"
        />

        {/* Mask shadows/contours */}
        <path
          d="M17 9L19 8L20 9M29 9L27 8L26 9"
          stroke="#AAAAAA"
          strokeWidth="0.4"
          fill="none"
        />

        {/* Eyes - black */}
        <path
          d="M17 11C18 9.5 20 9.5 21 11L19 13L17 11Z"
          fill="#111111"
        />
        <path
          d="M29 11C28 9.5 26 9.5 25 11L27 13L29 11Z"
          fill="#111111"
        />

        {/* Eyebrows - dark gray */}
        <path
          d="M16 9L21 7L19 9.5L16 9Z"
          fill="#333333"
        />
        <path
          d="M30 9L25 7L27 9.5L30 9Z"
          fill="#333333"
        />

        {/* Smile - black line with subtle curve */}
        <path
          d="M19 13.5C19.5 14.5 26.5 14.5 27 13.5"
          stroke="#111111"
          strokeWidth="0.6"
          fill="none"
        />

        {/* Goatee - black */}
        <path
          d="M23 14.5L23 18M21 16L25 16"
          stroke="#111111"
          strokeWidth="0.8"
          strokeLinecap="round"
        />

        {/* Bottom shadow and neck area */}
        <path
          d="M18 19L23 22L28 19L26 20L23 21L20 20L18 19Z"
          fill="#222222"
        />

        {/* Hood edge details */}
        <path
          d="M11 16L16 20M35 16L30 20"
          stroke="#333333"
          strokeWidth="0.6"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default AnonymousHoodedLogo;
