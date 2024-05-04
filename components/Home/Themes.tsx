"use client";

import CategoryCard from "@/components/Card/TracksCard";
import CATEGORIES from "@/data/themes";
import MaxWidthWrapper from "../Wrapper/MaxWidthWrapper";

export function Themes() {
  return (
    <MaxWidthWrapper>
      <section className="container mx-auto px-8 pt-20" id="Themes">
        <div className="mb-10 grid place-items-center text-center">
          <h1 className="h3 font-bold mt-5 mb-10">Themes</h1>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="col-span-1 flex flex-col gap-6">
            {CATEGORIES.slice(0, 2).map((props, key) => (
              <CategoryCard key={key} {...props} />
            ))}
          </div>
          <div className="col-span-1 flex flex-col gap-6">
            {CATEGORIES.slice(3, 5).map((props, key) => (
              <CategoryCard key={key} {...props} />
            ))}
          </div>
          <div className="col-span-1 flex flex-col gap-6">
            {CATEGORIES.slice(6, 8).map((props, key) => (
              <CategoryCard key={key} {...props} />
            ))}
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}

export default Themes;
