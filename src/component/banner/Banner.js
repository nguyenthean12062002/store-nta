import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/img-banner.png";
import Flex from "../components/flex/Flex";
import "./banner.scss";
const Banner = () => {
  return (
    <Flex justify="center" className="bg-main banner ">
      <Flex
        justify="between"
        className="max-w-main w-[100%] banner__container "
      >
        <div>
          <h1 className="text-[2rem] text-white z-[20] text__banner ">
            Change Your Life Style
          </h1>
          <Link
            to="/products"
            className="button inline-block bg-red text-white px-[0.4rem] py-[0.6rem] mt-half"
          >
            Start Shoping
          </Link>
          <Flex justify="start" className="info__banner">
            <div className="info__wrapper">
              <h4>90K</h4>
              <span>Happy Clients</span>
            </div>
            <div className="info__wrapper">
              <h4>0.4M</h4>
              <span>Monthly traffic</span>
            </div>
            <div className="info__wrapper">
              <h4>11+</h4>
              <span>Sales per year</span>
            </div>
          </Flex>
        </div>
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
