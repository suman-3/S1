import React from "react";
import MaxWidthWrapper from "../Wrapper/MaxWidthWrapper";
import Image from "next/image";

const partnerData = ["uem", "iic"];

const Collaboration = () => {
  return (
    <MaxWidthWrapper>
      <section className="px-8 lg:pt-2 pb-20" id="Sponsors">
        <div className=" mx-auto grid items-center place-items-center">
          <div className="text-center">
            <h6 className="mb-10 uppercase !text-gray-500 font-semibold mt-20">
              Organisers
            </h6>
            <div className="flex flex-wrap gap-5 md:gap-10 justify-center">
              {partnerData.map((props, index) => (
                <div
                  key={index}
                  className="flex flex-wrap items-center justify-center hover:shadow-lg rounded-3xl"
                >
                  <Image
                    width={1050}
                    height={700}
                    src={`/images/collaboration/${props}.png`}
                    alt="Collaboration Partners"
                    className="w-[150px] h-[100px] object-contain cursor-pointer hover:rounded-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default Collaboration;
