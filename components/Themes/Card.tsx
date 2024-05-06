import React from "react";
import "../../app/css/additional-styles/themes.scss";
import { tracks_type } from "@/interface";

const Card = ({
  img,
  icon: Icon,
  title,
}: tracks_type) => {
  return (
    <div className="body">
      <div className="card">
        <span className="icon">
          <Icon />
        </span>
        <h4>{title}</h4>
        <p>Artificial Intelligence</p>
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
