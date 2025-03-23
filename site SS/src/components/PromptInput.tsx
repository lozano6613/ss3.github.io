"use client";

import { Textarea } from "@/components/ui/textarea";

export default function PromptInput() {
  return (
    <div className="relative px-10 w-full max-w-[800px] mx-auto z-10">
      <div className="relative shadow-xs border border-gray-800 bg-black/50 backdrop-blur rounded-lg">
        <div className="relative select-none">
          <Textarea
            className="w-full pl-4 pt-4 pr-16 focus:outline-none resize-none text-white placeholder-gray-500 bg-transparent text-sm min-h-[76px] max-h-[200px]"
            placeholder="Как я могу помочь тебе сегодня?"
            style={{ height: "76px" }}
          />
        </div>

        <div className="flex justify-between text-sm p-4 pt-2">
          <div className="flex gap-1 items-center">
            <button className="flex items-center text-gray-400 bg-transparent rounded-md hover:text-white hover:bg-gray-800 p-1">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1789 5.5L19.1789 11.5M19.1789 11.5L13.1789 17.5M19.1789 11.5H5.17895"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="flex items-center text-gray-400 bg-transparent rounded-md opacity-30 p-1"
              disabled
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="pb-10 bg-transparent"></div>
    </div>
  );
}
