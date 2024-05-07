import { organizer_type } from "@/interface";
import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const TeamCard = ({
  id,
  name,
  img_name,
  category,
  role,
  linkedin,
  twitter,
  position,
  org,
}: organizer_type) => {
  return (
    <center
      key={id}
      className="card w-56 bg-base-100 hover:shadow-xl border-[2px] rounded-xl cursor-pointer max-md:w-40 relative overflow-hidden bg-white bg-opacity-20 backdrop-blur-lg"
    >
      {id === 1 && category !== "advisor" && (
        <div className="absolute top-0 right-0 transform translate-x-7 translate-y-3 bg-blue-700 text-white px-10 py-1 rounded-bl-lg font-bold text-xs rotate-45">
          Lead
        </div>
      )}
      {id !== 1 && category === "organizer" && role === "Co-Lead Organizer" && (
        <div className="absolute top-0 right-0 transform translate-x-10 translate-y-3 bg-green-700 text-white px-10 py-1 rounded-bl-lg font-bold text-xs rotate-45">
          Co-Lead
        </div>
      )}
      <figure className="px-5 pt-4">
        <Image
          src={`/images/team/${category}/${img_name}.jpeg`}
          alt={`${name}`}
          height={1000}
          width={1000}
          className="rounded-xl object-cover"
          priority={true}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold pt-4">{name}</h2>
        {position.length && org.length ? (
          <>
          <p className="pb-0 text-sm text-gray-200">{position}</p>
          <p className="pb-2 text-sm text-gray-400">{"@" + org}</p>
          </>
        ) : (
          <>
          <p className="pb-0 text-sm text-gray-200">{role}</p>
          <p className="pb-2 text-sm text-gray-400">{"@InnoFusion"}</p>
          </>
        )}
      </div>
      <center className="flex justify-center">
        <ul className="flex mb-4 md:order-1 py-0 gap-4">
          <li>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
          </li>
          <li>
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
              aria-label="Twitter"
            >
              <Twitter />
            </a>
          </li>
        </ul>
      </center>
    </center>
  );
};

export default TeamCard;
