"use client";

import { ArrowUpFromDot } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Banner() {
  const [top, setTop] = useState<boolean>(true);
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  return (
    <>
      <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50 max-md:p-4">
        {!top ? (
          <Link href="" scroll={true}>
            <ArrowUpFromDot />
          </Link>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
