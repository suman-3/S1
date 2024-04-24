"use client";

import TeamCard from "@/components/Card/TeamCard";
import MaxWidthWrapper from "@/components/Wrapper/MaxWidthWrapper";
import {
  organizerTeam,
  leadTeam,
  coreTeam,
  coordinatorTeam,
} from "@/data/team";

const teamData = [organizerTeam, leadTeam, coreTeam, coordinatorTeam];
const teamCategories = ["Organizers", "Leads", "Core", "Coordinators"];

const Team = () => {
  return (
    <MaxWidthWrapper>
      {teamCategories.map((team, idx) => (
        <section key={idx} className="relative pt-24">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
            <h2 className="h2 mb-1">{team}</h2>
          </div>
          <div className="container flex flex-wrap justify-center">
            {teamData[idx].map((props, index) =>
              index % 4 === 0 ? (
                <div
                  key={index / 4}
                  className="container flex md:gap-10 max-lg:flex-wrap"
                >
                  {teamData[idx].slice(index, index + 4).map((props) => (
                    <TeamCard key={props.id} {...props} />
                  ))}
                </div>
              ) : null
            )}
          </div>
        </section>
      ))}
    </MaxWidthWrapper>
  );
};

export default Team;
