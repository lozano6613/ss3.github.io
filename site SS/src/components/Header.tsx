"use client";

import Link from "next/link";
import ReactLogo from "./ReactLogo";

export default function Header() {
  return (
    <header className="flex shrink-0 select-none items-center bg-[#0c0d0e] pl-5 pr-4 border-b h-[60px] border-transparent">
      <div className="flex grow-1 basis-60 items-center gap-2 text-white">
        <Link href="/" className="font-semibold text-white flex items-center gap-2">
          <ReactLogo className="text-[#61dafb] hover:text-white transition-colors duration-300 animate-spin-slow" />
          <span className="text-xl tracking-tight font-medium">Bolt<span className="text-[#61dafb] font-normal">.new</span></span>
        </Link>
      </div>

      <div className="flex-1 select-text px-4 text-sm text-center text-white">
        <div className="relative flex items-center justify-center gap-1.5">
          <span className="max-w-96 truncate"></span>
        </div>
      </div>

      <div className="flex grow-1 basis-60 justify-end items-center gap-2.5">
        <div className="inline-flex items-center gap-2.5">
          <a
            href="https://x.com/boltdotnew"
            className="hover:text-white text-gray-400"
            target="_blank"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.62 1.813h1.93L8.332 6.63l4.96 6.556H9.409L6.368 9.212l-3.48 3.976H.955l4.55-5.189L.784 1.813h4.043l2.731 3.543 3.063-3.543zm.61 2.252L5.224 11.48l6.006 0-5.032-7.023 5.032-0.392z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/stackblitz"
            className="hover:text-white text-gray-400"
            target="_blank"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M451.2 451.2h-78.5V328.3c0-29.3-.5-67-40.8-67s-47.1 31.9-47.1 64.9v125H206.3V206h75.2v34.4c10.6-20.3 36.5-39 75.1-39 80.5 0 95.3 52.9 95.3 121.8v128zM137.7 171.6C108.4 171.6 85 148 85 118.7c0-29.2 23.4-52.8 52.7-52.8 29.2 0 52.6 23.6 52.6 52.8 0 29.3-23.4 52.9-52.6 52.9zm39.3 279.6h-78.5V206h78.5v245.2zM489.7 0H41.3C18.5 0 0 18 0 40.2v450.6C0 512.8 18.5 531 41.3 531h448.4c22.8 0 41.3-18.2 41.3-40.2V40.2C531 18 512.5 0 489.7 0z"
                transform="scale(0.045)"
              />
            </svg>
          </a>
          <a
            href="https://discord.com/invite/stackblitz"
            className="hover:text-white text-gray-400"
            target="_blank"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.914 4.865 14.7 26.771a.663.663 0 0 1-1.155.005L1.088 4.867a.665.665 0 0 1 .124-.79.659.659 0 0 1 .435-.16h9.496c.218 0 .412.13.504.317l5.239 10.41c.304.57 1.172.57 1.475 0l5.273-10.41a.567.567 0 0 1 .504-.317h7.75c.223 0 .427.08.579.218a.68.68 0 0 1 .182.562.643.643 0 0 1-.735.168Z"
                transform="scale(0.85)"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
