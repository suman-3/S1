import React, { useEffect, useState } from "react";
import "../../app/styles/additional-styles/countdown.css";

const Countdown = () => {
  useEffect(() => {
    let daysElement = document.querySelector(".days");
    let hoursElement = document.querySelector(".hours");
    let minutesElement = document.querySelector(".minutes");
    let secondsElement = document.querySelector(".seconds");

    let countDownDate = new Date("May 10, 2024").getTime();
    
    const interval = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (daysElement)
        daysElement.textContent = days.toString().padStart(2, "0");
      if (hoursElement)
        hoursElement.textContent = hours.toString().padStart(2, "0");
      if (minutesElement)
        minutesElement.textContent = minutes.toString().padStart(2, "0");
      if (secondsElement)
        secondsElement.textContent = seconds.toString().padStart(2, "0");

      if (distance < 0) {
        clearInterval(interval);
        if (daysElement) daysElement.textContent = "00";
        if (hoursElement) hoursElement.textContent = "00";
        if (minutesElement) minutesElement.textContent = "00";
        if (secondsElement) secondsElement.textContent = "00";
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max mb-7">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span className="days">02</span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span className="hours">12</span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span className="minutes">00</span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span className="seconds">00</span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Countdown;
