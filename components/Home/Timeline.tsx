"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import timelineContent from "../../data/timeline";
import MaxWidthWrapper from "../Wrapper/MaxWidthWrapper";

const ExperienceCard = ({ experience }: { experience: any }) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: "#E8E8E8",
        color: "#000",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold">{experience.title}</h3>
        {/* <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p> */}
      </div>

      <ul className="mt-3 list-disc ml-5 space-y-2">
        {experience.points.map((point: string, index: number) => (
          <li key={index} className="text-[14px] pl-1 tracking-wider">
            {point === "link" ? (
              <a
                href="https://discord.gg/wRRqeN23a5"
                className="underline"
                target="_blank"
              >
                Click Here to Join Directly
              </a>
            ) : (
              point
            )}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export const Timeline = () => {
  return (
    <MaxWidthWrapper>
      <section className="container mx-auto px-8 pt-20" id="Timeline">
        <div className="mb-10 grid place-items-center text-center">
          <h1 className="h3 font-bold mt-5 mb-10">Timeline</h1>
        </div>

        <div id="timeline" className="mt-10 flex flex-col mb-10">
          <VerticalTimeline lineColor="#B2AFAF" animate={true}>
            {timelineContent.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};
