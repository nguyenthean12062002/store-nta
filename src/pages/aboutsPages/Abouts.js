import React, { useEffect } from "react";
// header
import Header from "../../layout/Header/Header";
const Abouts = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Thực hiện scroll đến đầu trang khi component được render lại
  }, []);
  const handleReload = () => {
    window.location.href = "/"; // Đặt lại pathname về trang chủ
  };
  useEffect(() => {
    window.addEventListener("load", () => {
      handleReload();
    });
    return () => {
      window.removeEventListener("load", () => {});
    };
  }, []);
  return (
    <div className="bg-bg w-full h-full flex items-center  justify-center py-full">
      <div className="w-full max-w-[1200px] px-full md:px-full xl:px-0">
        <h2 className="text-center py-[22px] font-bold text-[1.6rem]">
          ABOUTS
        </h2>
        <p className=" text-start  leading-[1.4rem] tracking-[1px] text-[#444] ">
          Welcome to NTA Store! We are a reliable online shopping website that
          aims to provide you with an excellent shopping experience. At NTA
          Store, we are committed to delivering high-quality products and the
          best services to meet your shopping needs. With the desire to bring
          convenience and variety to our customers, we focus on offering a
          diverse collection of products from various fields. From fashion,
          electronics, and home appliances to beauty products and more, you will
          find everything you need at NTA Store. We take pride in the quality of
          the products we offer. We work closely with trusted suppliers and
          carefully select the best products to ensure customer satisfaction and
          trust. Our team of staff is always ready to assist you and answer any
          inquiries you may have. We prioritize our customers and are dedicated
          to providing the best online shopping experience. Our customer support
          team is available to support you throughout the entire process, from
          product selection to after-sales service. We continuously strive to
          improve our website and your experience. We value customer feedback
          and suggestions to enhance and create a safe, convenient, and reliable
          online shopping environment for you. Thank you for choosing NTA Store
          as your shopping companion. We hope you find the products you love and
          have an enjoyable shopping experience. Start exploring and shopping
          today! If you have any questions or requests, please contact us
          through our Contact page. Our team will assist you as soon as
          possible. Thank you sincerely, and we look forward to serving you at
          NTA Store!
        </p>
        {/*  liên quan */}
        <div className="leading-[1.4rem] tracking-[1px] text-[#444]">
          <span className="text-red block text-[1.2rem] my-full ">
            Our Mission
          </span>
          Our mission is to provide our customers with a seamless shopping
          experience, offering a wide range of trendy clothing, fashionable
          hats, and top-notch smartphones. We aim to deliver excellent customer
          service, ensuring that you find the perfect products that suit your
          style and preferences.
          <span className="text-red block text-[1.2rem] my-full ">
            {" "}
            Quality and Style{" "}
          </span>
          We believe that quality and style go hand in hand. That's why we
          carefully curate our collection to include fashionable clothing made
          from premium materials. Our clothing line combines comfort,
          durability, and modern designs to help you express your unique sense
          of style. When it comes to hats, we offer a diverse selection of
          styles and designs. Whether you're looking for a trendy snapback, a
          classic fedora, or a cozy beanie, we have the perfect headwear to
          complement your outfit and elevate your fashion game.
          <span className="text-red block text-[1.2rem] my-full ">
            Cutting-Edge Technology
          </span>
          In addition to clothing and hats, we also specialize in the latest
          smartphones and gadgets. We understand the importance of staying
          connected in today's fast-paced world. That's why we offer a wide
          range of smartphones that feature the latest technology, stunning
          displays, and advanced features. From flagship models to
          budget-friendly options, we have something for everyone.
          <span className="text-red block text-[1.2rem] my-full ">
            Secure Shopping Experience
          </span>
          We prioritize the security of your personal information and ensure a
          safe shopping experience. Our website is equipped with robust security
          measures to protect your data and facilitate secure transactions. You
          can shop with confidence, knowing that your privacy and sensitive
          information are safeguarded.
          <span className="text-red block text-[1.2rem] my-full ">
            Contact Us
          </span>
          We are dedicated to providing exceptional customer service. If you
          have any questions, concerns, or feedback, our friendly and
          knowledgeable support team is here to assist you. Feel free to reach
          out to us through our contact page, and we'll be more than happy to
          help. Thank you for choosing our online store. We look forward to
          serving you and helping you stay fashionable and connected!
        </div>
      </div>
    </div>
  );
};

export default Abouts;
