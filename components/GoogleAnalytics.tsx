"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views on route change
  useEffect(() => {
    if (!window.gtag) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");

    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID as string, {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null; // no UI, just tracking
}
