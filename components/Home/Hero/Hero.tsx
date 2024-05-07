"use client";

import ModalVideo from "@/components/utils/modal-video";
import VideoThumb from "@/public/images/hero-image.png";
import Link from "next/link";
import "../../../app/styles/additional-styles/hero-text.css"
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  //bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-red-400
  return (
    <section className="relative">
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#b8b8b8" offset="77.402%" />
              <stop stopColor="#808080" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-28 pb-12 md:pt-32 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Kolkata's Premiere <br /> <span className="software-text">Software</span> + <span className="animated-gradient-text">Hardware</span> <br />
              <span className="">
                Hackathon <span className="blinking-underscore"></span>
              </span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                <span className="font-bold">InnoFusion,</span> Kolkata's premier
                Software + Hardware Hackathon! 30 hours of innovation,
                collaboration, and groundbreaking projects. Ready to hack the
                future? Register now!
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div
                  className="apply-button"
                  data-hackathon-slug="innofusionhackathon"
                  data-button-theme="light"
                ></div>
              </div>
              <div>
                <Link href="https://discord.gg/wRRqeN23a5" target="_blank">
                  <button
                    className="bg-blue-600 py-2 px-4 rounded-md text-white mt-4 hover:bg-blue-800"
                    rel="noopener noreferrer"
                  >
                    Join Discord!
                  </button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
