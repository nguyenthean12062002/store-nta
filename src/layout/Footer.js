import React from "react";
const List = ({ children }) => {
  return (
    <ul className="text-start text-gray-500 text-[0.9rem] mt-[12px]">
      {children}
    </ul>
  );
};
const Item = ({ children }) => {
  return (
    <li className="leading-[22px] tracking-wider text-[0.86rem]">{children}</li>
  );
};
const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-[30px] border-t-[1px] pt-[30px] transition-all duration-300">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-[20px] px-[20px] mb-[20px]">
        <div className="text-center ">
          <h4 className="font-bold text-[1.1rem] text-[#555]">Support</h4>
          <div className="flex items-center justify-evenly">
            <List className="text-start text-gray-500 text-[0.9rem]">
              <Item>How to Order</Item>
              <Item>Terms and Conditions</Item>
              <Item>Privacy Policy</Item>
              <Item>Order Status</Item>
              <Item>Jean</Item>
              <Item>FAQs</Item>
            </List>
            <List className="text-start text-gray-500 text-[0.9rem]">
              <Item>Return and refund</Item>
              <Item>Change size</Item>
              <Item>Guarantee</Item>
              <Item>Report violations</Item>
              <Item>Q&A</Item>
              <Item>FAQs</Item>
            </List>
          </div>
        </div>
        <div className="text-center ">
          <h4 className="font-bold text-[1.1rem] text-[#555]">Category</h4>
          <div className="flex items-center justify-evenly">
            <List className="text-start text-gray-500 text-[0.9rem]">
              <Item>Phone</Item>
              <Item>Earphone</Item>
              <Item>Laptop</Item>
              <Item>Clothes</Item>
              <Item>Furniture</Item>
              <Item>Fashion</Item>
            </List>
            <List className="text-start text-gray-500 text-[0.9rem]">
              <Item>Jean</Item>
              <Item>T shirt</Item>
              <Item>Skateboard</Item>
              <Item>Hoodie</Item>
              <Item>Hats</Item>
              <Item>Watchs</Item>
            </List>
          </div>
        </div>
        <div className="text-center ">
          <h4 className="font-bold text-[1.1rem] text-[#555]">Buy and Price</h4>
          <div className="flex items-center justify-evenly">
            <List className="text-start text-gray-500 text-[0.9rem]">
              <Item>Buy Basic</Item>
              <Item>Good price</Item>
              <Item>Right for the price</Item>
            </List>
            <List className="text-start text-gray-500 text-[0.9rem]">
              <Item>Freedom to buy and sell</Item>
              <Item>Enhance the experience</Item>
              <Item>Satisfied then pay</Item>
            </List>
          </div>
        </div>
      </div>
      <div className="text-gray-500 text-center bg-[#FEBD68] w-full h-[60px]  ">
        <h5 className="font-bold mt-[12px] mb-[4px]">
          Copy right by@ Nguyễn Thế An 1/11/2023.All rights reserved.
        </h5>
        <h6 className="text-gray-400 mb-[12px]">
          Contact for me: nguyenthean12062002@gmail.com
        </h6>
      </div>
    </div>
  );
};

export default Footer;
