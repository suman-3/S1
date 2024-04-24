import { organizer_type } from "@/interface";
import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const TeamCard = ({
  id,
  name,
  category,
  role,
  linkedin,
  twitter,
}: organizer_type) => {
  return (
    <center
      key={id}
      className="card w-96 bg-base-100 hover:shadow-xl border-[2px] rounded-xl cursor-pointer mb-10 max-md:w-80 max-md:mx-8"
    >
      <figure className="px-5 pt-4">
        <Image
          src={`/images/team/${category}/${name}.jpeg`}
          alt={`${category} image`}
          height={1000}
          width={1000}
          className="rounded-xl object-cover"
          priority={true}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold pt-4">{name}</h2>
        <p className="pb-4">{role}</p>
      </div>
      <center className="flex justify-center">
        <ul className="flex mb-4 md:order-1 py-0 gap-4">
          <li>
            <a
              href={linkedin}
              target="_blank"
              className="text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
              aria-label="Facebook"
            >
              <Linkedin />
            </a>
          </li>
          <li>
            <a
              href={twitter}
              target="_blank"
              className="text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
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
