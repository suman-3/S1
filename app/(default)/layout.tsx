"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: false,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return <main className="grow">{children}</main>;
}
