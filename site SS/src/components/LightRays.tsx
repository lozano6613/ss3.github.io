"use client";

import { useEffect, useRef } from "react";

export default function LightRays() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-[150%] h-[150%] top-[-25%] left-[-25%] bg-[radial-gradient(ellipse_at_center,_rgba(34,148,241,0.15)_0%,_rgba(0,0,0,0)_50%)] opacity-0 animate-ray1"></div>
          <div className="absolute w-[150%] h-[150%] top-[-25%] left-[-25%] bg-[radial-gradient(ellipse_at_center,_rgba(34,148,241,0.1)_0%,_rgba(0,0,0,0)_60%)] opacity-0 animate-ray2"></div>
          <div className="absolute w-[150%] h-[150%] top-[-25%] left-[-25%] bg-[radial-gradient(ellipse_at_center,_rgba(34,148,241,0.05)_0%,_rgba(0,0,0,0)_70%)] opacity-0 animate-ray3"></div>
          <div className="absolute w-[150%] h-[150%] top-[-25%] left-[-25%] bg-[radial-gradient(ellipse_at_center,_rgba(34,148,241,0.025)_0%,_rgba(0,0,0,0)_80%)] opacity-0 animate-ray4"></div>
          <div className="absolute w-[150%] h-[150%] top-[-25%] left-[-25%] bg-[radial-gradient(ellipse_at_center,_rgba(34,148,241,0.0125)_0%,_rgba(0,0,0,0)_90%)] opacity-0 animate-ray5"></div>
        </div>
      </div>
    </div>
  );
}
