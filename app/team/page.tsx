"use client";

import TeamCard from "@/components/Card/TeamCard";
import MaxWidthWrapper from "@/components/Wrapper/MaxWidthWrapper";
import {
  organizerTeam,
  advisorTeam,
  devTeam,
  techTeam,
  brandingTeam,
  designTeam,
  documentationTeam,
  socialMediaTeam,
  contentTeam,
  financeTeam,
  coordinatorTeam,
} from "@/data/team";

const teamData = [
  organizerTeam,
  advisorTeam,
  devTeam,
  techTeam,
  brandingTeam,
  designTeam,
  documentationTeam,
  contentTeam,
  financeTeam,
  coordinatorTeam,
  socialMediaTeam,
];
const teamCategories = [
  "Organizers",
  "Advisors",
  "Dev Dynamos",
  "Tech Wizards",
  "Branding & PR",
  "Design Squad",
  "Documentation Squad",
  "Pen Pioneers",
  "Finance",
  "Coordinators",
  "Social Media",
];

const Team = () => {
  return (
    <MaxWidthWrapper>
      {teamCategories.map((team, idx) => (
        <section key={idx} className="relative pt-12 my-10 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
            <h2 className="h2 mb-1">{team}</h2>
          </div>

          <div className="container flex flex-wrap gap-5 md:gap-10 justify-center">
            {teamData[idx].map((props, index) => (
              <div
                key={props.id}
                className="flex flex-wrap items-center justify-center hover:shadow-lg rounded-3xl"
              >
                <TeamCard key={props.id} {...props} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </MaxWidthWrapper>
  );
};

export default Team;
