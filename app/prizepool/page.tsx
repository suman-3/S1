"use client";

import PrizepoolCard from "@/components/Card/PrizepoolCard";
import MaxWidthWrapper from "@/components/Wrapper/MaxWidthWrapper";
import { prizepoolContent } from "@/data/prizepoolContent";
import React from "react";

const PricePool = () => {
  return (
    <MaxWidthWrapper>
      <section className="relative pt-12 my-10 md:pt-20">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
          <h2 className="h2 mb-1">Prize Pool</h2>
        </div>
        <h4 className="h4 mb-1">Ultimate Prize</h4>
        <div className="flex lg:flex-row flex-col justify-between items-center lg:gap-10">
          {prizepoolContent.map((props, index) => (
            <PrizepoolCard key={index} {...props} />
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default PricePool;
