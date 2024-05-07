"use client";

import React, { useState } from "react";
import faq from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (key: any) => {
    if (openAccordion === key) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(key);
    }
  };

  return (
    <section className="relative">
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-10">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="flex flex-col items-center justify-center text-center h3 font-bold my-5">
              FAQ's
            </h2>
            <p className="text-xl text-gray-600">
              Answers to Frequently Asked Questions
            </p>
          </div>
          <div className="max-w-sm mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
            {faq.map((data) => (
              <Accordion type="single" key={data.key} collapsible>
                <AccordionItem value="item-1" className="">
                  <AccordionTrigger
                    className="transition-all duration-500 hover:no-underline text-start"
                    onClick={() => handleAccordionClick(data.key)}
                  >
                    {data.question}
                  </AccordionTrigger>
                  {openAccordion === data.key && (
                    <AccordionContent>{data.answer}</AccordionContent>
                  )}
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
