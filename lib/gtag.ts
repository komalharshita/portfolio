// lib/gtag.ts

// Read measurement ID from environment variable
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Send a pageview to Google Analytics
export const pageview = (url: string) => {
  // Only run in production AND only if GA ID exists
  if (!GA_MEASUREMENT_ID || process.env.NODE_ENV !== "production") return;

  (window as any).gtag?.("config", GA_MEASUREMENT_ID, {
    page_path: url,
    anonymize_ip: true, // helps with privacy compliance
  });
};

// Send a custom event
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}) => {
  // Only run in production
  if (!GA_MEASUREMENT_ID || process.env.NODE_ENV !== "production") return;

  (window as any).gtag?.("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
