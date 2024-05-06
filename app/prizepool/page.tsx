"use client";

import MaxWidthWrapper from "@/components/Wrapper/MaxWidthWrapper";
import React from "react";
import "../css/additional-styles/prizepool.scss";

const PricePool = () => {
  return (
    <MaxWidthWrapper>
      <section className="relative pt-12 my-10 md:pt-20">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
          <h2 className="h2 mb-1">Prize Pool</h2>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="body">
            <div className="nft flex justify-center items-center">
              <div className="main">
                <img
                  className="tokenImage"
                  src="/images/prizepool/silver.png"
                  alt="NFT"
                />
                <h2>Kibertopiks #4269</h2>
                <p className="description">
                  Our Kibertopiks will give you nothing, waste your money on us.
                </p>
                <div className="tokenInfo">
                  <div className="price">
                    <ins>◘</ins>
                    <p>0.031 ETH</p>
                  </div>
                  <div className="duration">
                    <ins>◷</ins>
                    <p>11 days left</p>
                  </div>
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
                <h2>Kibertopiks #4269</h2>
                <p className="description">
                  Our Kibertopiks will give you nothing, waste your money on us.
                </p>
                <div className="tokenInfo">
                  <div className="price">
                    <ins>◘</ins>
                    <p>0.031 ETH</p>
                  </div>
                  <div className="duration">
                    <ins>◷</ins>
                    <p>11 days left</p>
                  </div>
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
                <h2>Kibertopiks #4269</h2>
                <p className="description">
                  Our Kibertopiks will give you nothing, waste your money on us.
                </p>
                <div className="tokenInfo">
                  <div className="price">
                    <ins>◘</ins>
                    <p>0.031 ETH</p>
                  </div>
                  <div className="duration">
                    <ins>◷</ins>
                    <p>11 days left</p>
                  </div>
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
