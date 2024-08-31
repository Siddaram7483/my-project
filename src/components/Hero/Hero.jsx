// import React from 'react'(rafce)

import { FaPlay } from "react-icons/fa";
import HeroImg from "../../assets/dumbell.png";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";

const Hero = () => {
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
          {/*brand info*/}
          <div className="flex flex-col justify-center py-14 md:py-0 font-playfair">
            <div className="text-center md:text-left space-y-6 ">
              <motion.h1
                variants={SlideRight(0.5)}
                initial="hidden"
                animate="visible"
                className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal"
              >
                Gym gives you the Perfect{" "}
                <span className="text-primary">Health</span>
              </motion.h1>
              <motion.p
                variants={SlideRight(1.2)}
                initial="hidden"
                animate="visible"
                className="text-gray-600 xl:max-[500px]:"
              >
                It is a long-established fact that a reader will be more engaged
                by readable content on a page when it presents the best product.
              </motion.p>
              {/* button section  */}
              <motion.div
                variants={SlideLeft(1.5)}
                initial="hidden"
                animate="visible"
                className="flex justify-center items-center gap-8 md:justify-start !mt-4"
              >
                <button className="primary-btn flex items-center gap-2 ">
                  Order Now
                </button>
                <button className="flex justify-center items-center gap-2 ">
                  {" "}
                  <FaPlay />
                  Watch Now
                </button>
              </motion.div>
            </div>
          </div>
          {/*hero image*/}
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, x: 100 }} // Start from right (100)
              animate={{ opacity: 1, x: 0 }} // Move to left (0)
              transition={{ duration: 1, delay: 0.9 }} // Optional transition settings
              src={HeroImg}
              alt="Hero"
              className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
