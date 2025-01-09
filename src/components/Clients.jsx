import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Clients = () => {
  return (
    <div className="py-20">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Kind words from <span className="text-purple-300">Clients</span>
        </h2>
      </motion.div>

      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 mt-10">
          {companies.map(({ id, img, name }) => (
            <div
              key={id}
              className="flex flex-row items-center md:max-w-60 max-w-32 gap-2"
            >
              <img
                src={img}
                alt={name}
                width={40}
                height={40}
                className="md:w-10 w-5"
              />
              <span className="text-center text-xl font-semibold">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Clients, "");
