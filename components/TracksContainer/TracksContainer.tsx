import React from "react";
import "./tracks.css";
import { tracks_type } from "@/interface";

const TracksContainer = ({
  org,
  img,
  description,
  prize,
  track,
}: tracks_type) => {
  return (
    <article className="card bg-white/5">
      <div className="flex justify-center items-center">
        <img
          className="card__background w-[60%]"
          src={img}
          alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
        />
      </div>
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">{track}</h2>
          <p className="card__description mt-10">{description}</p>
        </div>
        <div className="card__button">{prize}</div>
      </div>
    </article>
  );
};

export default TracksContainer;
