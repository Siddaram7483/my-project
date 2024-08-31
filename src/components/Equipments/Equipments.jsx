// import React from 'react'
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa"; // Corrected import path
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";

const EquipmentData = [
  {
    id: 1,
    title: "Yoga Equipments",
    desc: "It is a long-established fact that a reader will be more engaged by readable content on a page when it presents the best product.",
    icon: <GrYoga />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Muscle Equipments",
    desc: "It is a long-established fact that a reader will be more engaged by readable content on a page when it presents the best product.",
    link: "/",
    icon: <FaDumbbell />,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fitness Equipments",
    desc: "It is a long-established fact that a reader will be more engaged by readable content on a page when it presents the best product.",
    link: "/",
    icon: <GiGymBag />,
    delay: 0.9,
  },
];

const Equipments = () => {
  return (
    <>
      <div>
        <div className="container py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
            <div className="space-y-4 p-6">
              <h1 className="text-3xl md:text-4xl font-bold">
                What We Offer For You
              </h1>
              <p className="text-gray-500">
                It is a long-established fact that a reader can read it.
              </p>
            </div>
            {EquipmentData.map((item) => {
              return (
                <motion.div
                  variants={SlideLeft(item.delay)}
                  initial="hidden"
                  whileInView="visible"
                  key={item.id} // Added key prop
                  className=" bg-gray-100 space-y-4 p-6  hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
                >
                  <div className="text-4xl ">{item.icon}</div>
                  <p className="text-2xl font-semibold">{item.title}</p>
                  <p className="text-gray-500">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Equipments;
