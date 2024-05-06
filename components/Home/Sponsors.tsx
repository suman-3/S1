"use client";

import Image from "next/image";
import {
  communityPartners,
  goldPartners,
  silverPartners,
  platinumPartners,
} from "@/data/sponsors";
import MaxWidthWrapper from "../Wrapper/MaxWidthWrapper";

const partnerData = [
  platinumPartners,
  goldPartners,
  silverPartners,
  communityPartners,
];

const partnerCategories = [
  "Platinum Partners",
  "Gold Partners",
  "Silver Partners",
  "Community Partners",
];

function Sponsors() {
  return (
    <MaxWidthWrapper>
      <section className="pt-8 px-8 lg:py-10" id="Sponsors">
        <div className="container mx-auto grid items-center place-items-center">
          <div className="text-center">
            <h6 className="mb-4 uppercase !text-gray-500 font-semibold mt-20">
              our Partners
            </h6>
            {partnerCategories.map((partner, idx) => (
              <section key={idx} className="relative pt-2 pb-4">
                <div className="max-w-3xl mx-auto text-center pb-5 md:py-5">
                  <h2 className="font-bold h4 text-blue-900">{partner}</h2>
                </div>

                <div className="container flex flex-wrap gap-5 md:gap-10 justify-center">
                  {partnerData[idx].map((props, index) => (
                    <div
                      key={props.id}
                      className="flex flex-wrap items-center justify-center hover:shadow-lg rounded-3xl"
                    >
                      <Image
                        width={1050}
                        height={700}
                        src={`/images/sponsors/${props.name}.png`}
                        alt={props.alt_text}
                        className="w-[150px] h-[100px] object-contain cursor-pointer hover:rounded-2xl"
                      />
                    </div>
                  ))}
                </div>
                
              </section>
            ))}
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}

export default Sponsors;
