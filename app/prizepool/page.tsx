"use client";

import PrizepoolCard from "@/components/Card/PrizepoolCard";
import MaxWidthWrapper from "@/components/Wrapper/MaxWidthWrapper";
import { prizepoolContent } from "@/data/prizepoolContent";
import React from "react";
import "../styles/additional-styles/prizepool.scss";
import Tracks from "@/components/Tracks/Tracks";

const PricePool = () => {
  return (
    <MaxWidthWrapper className="flex flex-col gap-10">
      <section className="relative pt-12 my-10 md:pt-20">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
          <h2 className="h2 mb-1">Prize Pool</h2>
        </div>
        <div>
          <fieldset
            style={{ border: "1px solid #fff", borderRadius: "15px" }}
            className="p-5 px-10 rounded-lg"
          >
            <legend className="h2 px-2">Ultimate Champions</legend>
            <div className="flex flex-wrap gap-5 md:gap-10 justify-center">
              {prizepoolContent.map((props, index) => (
                <PrizepoolCard key={index} {...props} />
              ))}
            </div>
          </fieldset>
        </div>
      </section>
      <div>
        <fieldset
          style={{ border: "1px solid #fff", borderRadius: "15px" }}
          className="px-10 p-5 rounded-lg"
        >
          <legend className="h2 px-2">Track Prizes</legend>
          <Tracks />
        </fieldset>
      </div>
    </MaxWidthWrapper>
  );
};

export default PricePool;
