"use client";

import React from "react";

interface AnonymousLogoProps {
  className?: string;
}

const AnonymousLogo: React.FC<AnonymousLogoProps> = ({ className = "w-[46px] h-auto" }) => {
  return (
    <svg
      viewBox="0 0 46 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background enhancement */}
      <circle cx="23" cy="10" r="9.5" fill="#0c0d0e" stroke="#333" strokeWidth="0.5" />

      {/* Guy Fawkes mask - Anonymous logo */}
      <g transform="translate(13, 1) scale(0.14)">
        {/* Mask base */}
        <path
          d="M100 15C44.77 15 0 59.77 0 115C0 170.23 44.77 215 100 215C155.23 215 200 170.23 200 115C200 59.77 155.23 15 100 15Z"
          fill="white"
        />

        {/* Eyebrows */}
        <path
          d="M55 75C60 63 70 65 80 70C90 75 100 75 100 75C100 75 110 75 120 70C130 65 140 63 145 75C150 87 140 95 130 95C120 95 110 90 100 90C90 90 80 95 70 95C60 95 50 87 55 75Z"
          fill="black"
        />

        {/* Eyes */}
        <ellipse cx="75" cy="100" rx="15" ry="10" fill="black" />
        <ellipse cx="125" cy="100" rx="15" ry="10" fill="black" />

        {/* Nose */}
        <path
          d="M95 105C95 105 90 120 100 120C110 120 105 105 105 105"
          stroke="black"
          strokeWidth="2"
          fill="none"
        />

        {/* Cheeks */}
        <circle cx="65" cy="120" r="8" fill="#FF9999" opacity="0.6" />
        <circle cx="135" cy="120" r="8" fill="#FF9999" opacity="0.6" />

        {/* Smile/mouth */}
        <path
          d="M80 130C85 140 115 140 120 130"
          stroke="black"
          strokeWidth="2"
          fill="none"
        />

        {/* Goatee/beard */}
        <path
          d="M100 140L100 155M90 145L110 145M95 150L105 150M92 155L108 155"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* Binary code elements for hacker aesthetic */}
      <text
        x="6"
        y="5"
        fill="#2294f1"
        opacity="0.8"
        style={{ fontSize: '1.5px', fontFamily: 'monospace' }}
      >
        010101
      </text>

      <text
        x="37"
        y="5"
        fill="#2294f1"
        opacity="0.8"
        style={{ fontSize: '1.5px', fontFamily: 'monospace' }}
      >
        101010
      </text>

      {/* Anonymous slogan */}
      <text
        x="23"
        y="18.5"
        textAnchor="middle"
        fill="white"
        style={{ fontSize: '2.2px', fontFamily: 'monospace', fontWeight: 'bold' }}
      >
        We are Anonymous
      </text>
    </svg>
  );
};

export default AnonymousLogo;
