import React from "react";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-[calc(100%-50vw)] h-[80vh] w-[50vw]"
          fill="pink"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
    </section>
  );
};

export default Hero;
