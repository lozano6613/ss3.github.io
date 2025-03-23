"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased bg-[#0c0d0e] text-white";
  }, []);

  return (
    <body className="antialiased bg-[#0c0d0e] text-white" suppressHydrationWarning>
      {children}
    </body>
  );
}
