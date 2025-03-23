"use client";

import React from "react";

interface NewLogoProps {
  className?: string;
}

const NewLogo: React.FC<NewLogoProps> = ({ className = "w-[46px] h-auto" }) => {
  return (
    <svg
      viewBox="0 0 46 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main central circle */}
      <circle
        cx="22"
        cy="10"
        r="4"
        className="fill-white"
        stroke="white"
        strokeWidth="0.5"
      />

      {/* Left dot cluster */}
      <circle
        cx="10"
        cy="8"
        r="1.8"
        className="fill-white"
      />
      <circle
        cx="6"
        cy="10"
        r="2.3"
        className="fill-white"
      />
      <circle
        cx="13"
        cy="11"
        r="1.5"
        className="fill-white"
      />

      {/* Crescent/moon on the right */}
      <path
        d="M34 6C36.7614 6 39 8.23858 39 11C39 13.7614 36.7614 16 34 16C33.9331 16 33.8664 15.998 33.8 15.9939C35.7161 15.7395 37.2 14.0297 37.2 11.95C37.2 9.8703 35.7161 8.16048 33.8 7.90606C33.8664 7.90201 33.9331 7.9 34 7.9V6Z"
        className="fill-white"
      />

      {/* Connecting line element */}
      <path
        d="M26 10.5C26 10.5 28 10 30 10C32 10 32.5 10.5 32.5 10.5"
        stroke="white"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />

      {/* Light beam/ray accents */}
      <path
        d="M30 3L32 6"
        stroke="white"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M35 4L36 7"
        stroke="white"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default NewLogo;
