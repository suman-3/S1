"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./TimeLineCard.css";
import { timeline_type } from "@/interface";

const TimeLineCard = ({
  title,
  company_name,
  icon,
  iconBg,
  date,
  points,
}: timeline_type) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <motion.div
      className={`card2 ${inView ? "active" : ""}`}
      ref={ref}
      transition={{ duration: 0.5 }}
    >
      <section className="relative min-h-[10rem] lg:h-[12rem] w-[20rem] lg:w-[25rem] overflow-hidden rounded-xl hover:shadow-xl">
        <div className="absolute inset-0 h-full w-full bg-black/70" />
        <div className="relative">
          <div className="text px-5 py-10">
            <h1 className="mb-3 text-white">{date}</h1>
            <h1 className="text-white font-semibold">{title}</h1>
            <p></p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default TimeLineCard;