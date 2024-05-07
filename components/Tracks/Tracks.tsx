"use client";
import React from "react";
import { PinContainer } from "../PinContainer/PinContainer";
import { tracks } from "@/data/tracks";
import Image from "next/image";

export default function Tracks() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      {tracks.map((props, index) => (
        <PinContainer
          key={index}
          title={props.prize}
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              {props.track}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">{props.description}</span>
            </div>
            <div className="flex flex-1 justify-center items-center w-full rounded-lg mt-4 bg-transparent">
              <Image src={props.img} alt="logo" width={200} height={100} />
            </div>
          </div>
        </PinContainer>
      ))}
    </div>
  );
}
