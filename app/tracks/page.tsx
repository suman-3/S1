"use client";

import TracksComponent from "@/components/Tracks/Tracks";

export default function page() {
  return (
    <section className="relative my-10 mt-20">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 mt-10">
        <div>
          <h1 className="h1 text-center">Tracks</h1>
        </div>
        <div className="pt-12 md:pt-20">
          <TracksComponent />
        </div>
      </div>
    </section>
  );
}
