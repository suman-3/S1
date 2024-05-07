"use client";

import TracksComponent from "@/components/Tracks/Tracks";

export default function page() {
  return (
    <section className="relative my-10">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <TracksComponent />
        </div>
      </div>
    </section>
  );
}
