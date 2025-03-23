"use client";

import React from "react";

interface ClassicAnonymousLogoProps {
  className?: string;
}

const ClassicAnonymousLogo: React.FC<ClassicAnonymousLogoProps> = ({ className = "w-[46px] h-auto" }) => {
  return (
    <svg
      viewBox="0 0 46 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background to ensure visibility on all backgrounds */}
      <rect x="0" y="0" width="46" height="20" fill="#0c0d0e" rx="1" />

      {/* Circular logo - centered and properly scaled */}
      <g transform="translate(13, 0) scale(1)">
        {/* Outer white circle */}
        <circle cx="10" cy="10" r="10" fill="white" />

        {/* Inner black circle */}
        <circle cx="10" cy="10" r="9" fill="black" />

        {/* Guy Fawkes mask - simplified clean design */}
        <path
          d="M10 3
             C6.5 3 4.5 5 4.5 8
             L4.5 12
             C4.5 13 5.5 14 6.5 14.5
             L8 15
             L10 15.5
             L12 15
             L13.5 14.5
             C14.5 14 15.5 13 15.5 12
             L15.5 8
             C15.5 5 13.5 3 10 3
             Z"
          fill="white"
        />

        {/* Eyebrows - straighter, more defined */}
        <path
          d="M6 7
             L8 6.5
             L9.5 6.5
             M10.5 6.5
             L12 6.5
             L14 7"
          stroke="black"
          strokeWidth="0.9"
          strokeLinecap="round"
        />

        {/* Eyes - more angular, sharp edges */}
        <path
          d="M7 8
             L9 8
             L8.5 9.5
             L7 9
             Z"
          fill="black"
        />
        <path
          d="M13 8
             L11 8
             L11.5 9.5
             L13 9
             Z"
          fill="black"
        />

        {/* Nose line - subtler */}
        <path
          d="M10 8.5
             L10 11"
          stroke="black"
          strokeWidth="0.4"
        />

        {/* Mustache - more subtle */}
        <path
          d="M7 11
             C8.5 10.5 11.5 10.5 13 11"
          stroke="black"
          strokeWidth="0.5"
          fill="none"
        />

        {/* Mouth/smile - slight curve */}
        <path
          d="M8 12
             C9 12.2 11 12.2 12 12"
          stroke="black"
          strokeWidth="0.4"
          fill="none"
        />

        {/* Goatee - white, more defined */}
        <path
          d="M10 12.5
             L10 17
             M8.5 14
             L11.5 14
             M9 15.5
             L11 15.5"
          stroke="white"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default ClassicAnonymousLogo;
