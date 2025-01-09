import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const socialMedias = [
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/sachinashelke/",
    icon: <FaLinkedin />,
  },
  {
    id: "facebook",
    link: "https://www.facebook.com/", // Change to the correct link for Facebook
    icon: <FaFacebook />,
  },
  {
    id: "twitter",
    link: "https://twitter.com/", // Change to the correct link for Twitter
    icon: <FaTwitter />,
  },
];

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="flex flex-col items-center font-bold">
        <h1 className="heading lg:max-w-[45vw] text-2xl md:text-5xl ml-10 text-center md:ml-0flex md:flex-row flex-col justify-between items-center  md:items-center md:text-center md:gap-10">
          Ready to take <span className="text-purple-300">your </span>
          digital presence tot he next level?
        </h1>
        <p className="text-gray-400 md:mt-2 text-center text-sm md:text-xl lg:text-sm ml-7">
          Reach out to me today and left&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <a href="bhaleraoprem198@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex md:flex-row flex-col justify-between items-center mt-16 md:items-center md:text-center md:gap-10">
        <p className="md:text-base text-sm md:font-normal font-light text-center md:ml-16 lg:ml-32">
          Copyright ©2024 Sachin Shelke
        </p>

        <div className="flex items-center md:gap-5 gap-6 md:justify-center md:mr-14 lg:mr-32">
          {socialMedias.map((profile) => (
            <a
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {profile.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
