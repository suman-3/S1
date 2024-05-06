"use client";

import MaxWidthWrapper from "@/components/Wrapper/MaxWidthWrapper";
import React from "react";
import "../styles/additional-styles/prizepool.scss";

const PricePool = () => {
  return (
    <MaxWidthWrapper>
      <section className="relative pt-12 my-10 md:pt-20">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
          <h2 className="h2 mb-1">Prize Pool</h2>
        </div>
        <h4 className="h4 mb-1">Ultimate Prize</h4>
        <div className="flex flex-row justify-between items-center">
          <div className="body">
            <div className="nft flex justify-center items-center">
              <div className="main">
                <img
                  className="tokenImage"
                  src="/images/prizepool/silver.png"
                  alt="NFT"
                />
                <h2 className="text-3xl text-[#7B8185] font-semibold">
                  2nd Prize
                </h2>
                <p className="description">
                  Our Kibertopiks will give you nothing, waste your money on us.
                </p>
                <div className="tokenInfo">
                  <div className="price">
                    <p>INR 15,000</p>
                  </div>
                  <div className="duration"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="body">
            <div className="nft flex justify-center items-center">
              <div className="main">
                <img
                  className="tokenImage"
                  src="/images/prizepool/gold.png"
                  alt="NFT"
                />
                <h2 className="text-3xl text-[#EFA604] font-semibold">
                  1st Prize
                </h2>
                <p className="description">
                  Our Kibertopiks will give you nothing, waste your money on us.
                </p>
                <div className="tokenInfo">
                  <div className="price">
                    <p>INR 25,000</p>
                  </div>
                  <div className="duration"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="body">
            <div className="nft flex justify-center items-center">
              <div className="main">
                <img
                  className="tokenImage"
                  src="/images/prizepool/bronze.png"
                  alt="NFT"
                />
                <h2 className="text-3xl font-semibold text-[#D9A05D]">
                  3rd Prize
                </h2>
                <p className="description">
                  Our Kibertopiks will give you nothing, waste your money on us.
                </p>
                <div className="tokenInfo">
                  <div className="price">
                    <p>INR 10,000</p>
                  </div>
                  <div className="duration"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default PricePool;
