"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageProgress() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const timerRef = useRef(null);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;

    // New route loaded — complete the bar
    setWidth(100);
    const hide = setTimeout(() => {
      setVisible(false);
      setWidth(0);
    }, 400);
    return () => clearTimeout(hide);
  }, [pathname]);

  // Show a crawling bar immediately on mount to catch initial navigations
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest("a[href]");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto") || href.startsWith("http")) return;
      // Internal navigation starting
      setVisible(true);
      setWidth(15);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setWidth(70), 100);
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      clearTimeout(timerRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 3,
        width: `${width}%`,
        background: "linear-gradient(90deg, #5cdda2, #04a56f)",
        boxShadow: "0 0 10px #5cdda2, 0 0 4px #5cdda2",
        zIndex: 9999,
        transition: width === 100 ? "width 0.2s ease" : "width 0.8s ease",
        borderRadius: "0 2px 2px 0",
      }}
    />
  );
}
