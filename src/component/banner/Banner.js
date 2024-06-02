import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/img-banner.png";
import Flex from "../components/flex/Flex";
import { MdNavigateNext } from "react-icons/md";
import "./banner.scss";
const Banner = () => {
  return (
    <Flex justify="center" className="bg-main banner ">
      <Flex
        justify="between"
        className="max-w-main  w-[100%] flex-col md:flex-row banner__container px-full md:px-o "
      >
        {/* slogan */}
        <div>
          <h1 className="text-[1.8rem] md:text-[2.2rem] text-white z-[20] text__banner ">
            Change Your Life Style
          </h1>
          <Link
            to="/products"
            className="button inline-block bg-red text-white px-[0.4rem] py-[0.6rem] my-half"
          >
            Start Shoping
            <MdNavigateNext className="text-[1.1rem]" />
          </Link>
          <div className="info__banner w-[100%] grid grid-cols-2 md:grid-cols-3 gap-y-[12px]">
            <div className="info__wrapper">
              <h4>90K</h4>
              <span>Happy Clients</span>
            </div>
            <div className="info__wrapper rounded-[100%]">
              <h4>0.4M</h4>
              <span>Monthly Traffic</span>
            </div>
            <div className="info__wrapper rounded-[270px]">
              <h4>11+</h4>
              <span>Sales Per Year</span>
            </div>
          </div>
        </div>
        {/* img */}
        <Flex justify="end" className="banner__images">
          <img
            className="w-[36rem] h-[36rem] object-contain z-10 "
            src={bannerImg}
            alt="banner__img"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Banner;
