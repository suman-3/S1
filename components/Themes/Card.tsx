import React from "react";
import "../../app/styles/additional-styles/themes.scss";
import { tracks_type } from "@/interface";
import Image from "next/image";

const Card = ({ img, icon: Icon, title }: tracks_type) => {
  return (
    <div className="body">
      <div className="card">
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
        <div className="background">
          <div className="tiles">
            <div className="tile tile-1"></div>
            <div className="tile tile-2"></div>
            <div className="tile tile-3"></div>
            <div className="tile tile-4"></div>

            <div className="tile tile-5"></div>
            <div className="tile tile-6"></div>
            <div className="tile tile-7"></div>
            <div className="tile tile-8"></div>

            <div className="tile tile-9"></div>
            <div className="tile tile-10"></div>
          </div>

          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
