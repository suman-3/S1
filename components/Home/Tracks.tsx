"use client";

import CategoryCard from "@/components/Card/TracksCard";
import CATEGORIES from "@/data/tracks";
import MaxWidthWrapper from "../Wrapper/MaxWidthWrapper";

export function CoursesCategories() {
  return (
    <MaxWidthWrapper>
      <section className="container mx-auto px-8 pt-20" id="Tracks">
        <div className="mb-10 grid place-items-center text-center">
          <h1 className="h3 font-bold mt-5 mb-10">Tracks</h1>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="col-span-1 flex flex-col gap-6">
            {CATEGORIES.slice(0, 4).map((props, key) => (
              <CategoryCard key={key} {...props} />
            ))}
          </div>
          <div className="col-span-1 flex flex-col gap-6">
            {CATEGORIES.slice(4, 9).map((props, key) => (
              <CategoryCard key={key} {...props} />
            ))}
          </div>
          <div className="col-span-1 flex flex-col gap-6">
            {CATEGORIES.slice(9, 13).map((props, key) => (
              <CategoryCard key={key} {...props} />
            ))}
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}

export default CoursesCategories;
