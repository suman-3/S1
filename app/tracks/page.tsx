"use client";

import { useState } from "react";

export default function Features() {
  const [butt, setButt] = useState("");
  console.log(butt);

  return (
    <section className="relative my-10">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <center>
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border  border-gray-500 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-500"
                onClick={() => {
                  setButt("tracks");
                }}
              >
                Tracks
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-500 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-500"
                onClick={() => {
                  setButt("problem");
                }}
              >
                Problem Statement
              </button>
            </div>
          </center>

        </div>
      </div>
    </section>
  );
}
