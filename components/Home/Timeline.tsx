import React from "react";
import MaxWidthWrapper from "../Wrapper/MaxWidthWrapper";
import TimeLineCard from "../Card/TimeLineCard";
import "../../app/styles/additional-styles/TimeLineCard.css";
import timelineContent from "@/data/timeline";

const Timeline = () => {
  return (
    <MaxWidthWrapper>
      <section className="mt-48 pt-15 mx-auto px-10" id="Timeline">
        <div className="mb-10 grid place-items-center text-center">
          <h1 className="h3 font-bold mt-5 mb-10">Timeline</h1>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          {timelineContent.map((track, index) => (
            <TimeLineCard
              key={index}
              title={track.title}
              company_name={track.company_name}
              icon={track.icon}
              iconBg={track.iconBg}
              points={track.points}
              date={track.date}
            />
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default Timeline;
