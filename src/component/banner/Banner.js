import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/clem-onojeghuo-c4pbb7yNM2c-unsplash.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import { motion } from "framer-motion";

const fadeImages = [
  {
    url: banner1,
    slogan:
      "Quality brings satisfaction so you can have happy and comfortable moments ",
  },
  {
    url: banner2,
    slogan:
      "always bring great experiences and support so that you have satisfactory products",
  },
  {
    url: banner3,
    slogan:
      "If you feel anything is not satisfied, please contact us for feedback ",
  },
];

const Banner = () => {
  return (
    <motion.div
      initial={{
        y: -200,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          staggerChildren: 1,
        },
      }}
      className="slide-container relative"
    >
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                staggerChildren: 0.5,
              },
            }}
            key={index}
          >
            <img style={{ width: "100%", height: "80%" }} src={fadeImage.url} />
            <motion.div
              initial={{
                y: -100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
              className="absolute top-[32%] left-[10%] translate-x-[-50%] translate-y-[-50%] w-[80%] md:w-[70%] lg:w-[60%] h-[35%] flex flex-col items-start justify-start"
            >
              <h4
                className={`w-[70%] md:w-[60%] lg:w-[50%] text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] capitalize font-[500] md:font-[600] lg:font-[800] ${
                  index === 0 && "text-white"
                } ${index === 1 && "text-white"}`}
              >
                {fadeImage.slogan}
              </h4>
              <div className="mt-8 flex items-center justify-center text-black ">
                <Link to="/products" className="button bg-red text-white">
                  Shop Now
                </Link>
                <Link to="/contact" className="button bg-white ml-8">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </Fade>
    </motion.div>
  );
};
export default Banner;
