import React from "react";
import "./themes.scss";
import { tracks_type } from "@/interface";
import Image from "next/image";

const Card = ({ img, icon: Icon, title }: tracks_type) => {
  return (
    <div className="body">
      <div className="card cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover object-center -z-1 rounded-[15px]"
        />
        <div className="absolute inset-0 h-full w-full bg-black/50 -z-1 rounded-[15px]" />
        <span className="icon">
          <Icon />
        </span>
        <h4 className="text-black">{title}</h4>
        <div className="shine"></div>
      </div>
    </div>
  );
};

export default Card;
