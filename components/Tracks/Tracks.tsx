"use client";
import React from "react";
import TracksContainer from "../TracksContainer/TracksContainer";
import { tracks } from "@/data/tracks";

export default function Tracks() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row gap-10 my-5">
      {tracks.map((track, index) => (
        <TracksContainer key={index} {...track} />
      ))}
    </div>
  );
}
