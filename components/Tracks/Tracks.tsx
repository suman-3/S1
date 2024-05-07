"use client";
import React from "react";
import TracksContainer from "../TracksContainer/TracksContainer";
import { tracks } from "@/data/tracks";

export default function Tracks() {
  return (
    <div className="flex flex-wrap gap-5 md:gap-10 justify-center">
      {tracks.map((track, index) => (
        <TracksContainer key={index} {...track} />
      ))}
    </div>
  );
}
