import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";

const Banner2 = () => {
  return (
    <div className="container my-14 ">
      <div className="bg-[#f9f9f9] py-14 md:py-24 flex justify-center items-center">
        {/*brand info */}
        <div className="flex flex-col justify-center text-center space-y-8 lg:px-44 ">
          <motion.h1
            variants={SlideLeft(0.5)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold uppercase"
          >
            Get 20% Discount on Your First Order, Are you Ready To buy?{" "}
            <span>Lets Go</span>{" "}
          </motion.h1>
          <motion.p
            variants={SlideLeft(0.7)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className=""
          >
            We will make sure you get the right and best quality Equipments and
            products for your work out
          </motion.p>
        </div>
        <motion.div
          variants={SlideLeft(0.9)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="flex justify-center gap-6"
        >
          <button className="primary-btn"> Learn More</button>
          <button className=" border-2 text-primary font-bold px-5 rounded-lg border-primary">
            {" "}
            Stay in Touch
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner2;
