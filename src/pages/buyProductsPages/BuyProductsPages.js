import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
// header
// icon
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaVoicemail } from "react-icons/fa6";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import Flex from "../../component/components/flex/Flex";
import { CartContext } from "../../component/cart/CartContext";
import Overlay from "../../layout/OverLay/OverLay";
const BuyProductsPages = () => {
  const { cart, total, removeProduct, orderSucess, removeAllProducts } =
    useContext(CartContext);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numberphone, setNumberphone] = useState("");
  const [checkAge, setCheckAge] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleOrder = () => {
    if (
      !name ||
      !address ||
      !name ||
      !numberphone ||
      !email ||
      checkAge === false
    ) {
      return toast.warning("Please enter all information fields");
    } else {
      setConfirmOrder(!confirmOrder);
    }
  };
  const actionConfirm = () => {
    toast.success("Order product success");
    orderSucess();
    removeAllProducts();
    setAddress("");
    setCheckAge(false);
    setName("");
    setNumberphone(null);
    setEmail("");
    setConfirmOrder(false);
  };
  return (
    <div className="bg-white w-full h-ful  flex items-center justify-center flex-col px-[4px] md:px-full">
      {/* show products and info buyer */}
      <div className="text-[0.9rem] md:text-[1rem] w-full  h-full max-w-[1200px]  bg-bg my-half py-full px-half md:px-full">
        {/* products want buy */}
        <table className="text-[0.9rem] md:text-[1rem]">
          <thead>
            <tr className="w-[100%]">
              <th className=" lg:w-[55%] ">Product</th>
              <th>Unit price</th>
              <th className="hidden md:block">Quantity</th>
              <th>Into money</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => {
              return (
                <tr
                  key={product.id}
                  className="w-full h-[60px] bg-white border-b-[0.2px] "
                >
                  {/* img */}
                  <td className="w-[200px] h-full flex items-center justify-start pl-full  ">
                    <img
                      className="w-[50px] h-[50px] object-cover"
                      src={product.images}
                      alt="img__cart"
                    />
                    {/* title */}
                    <h4 className="w-[100%]  overflow-hidden whitespace-nowrap text-ellipsis text-black font-[400]  text-start text-[0.8rem] lg:text-[1rem] ml-half lg:ml-full">
                      {product.title}
                    </h4>
                  </td>
                  <td className="">${product.price}</td>
                  <td className="hidden md:block">
                    <span>{product.amout}</span>
                  </td>
                  <td className=" ">
                    <h5>${(product.price * product.amout).toFixed(1)}</h5>
                  </td>
                  <td className="text-main text-[1.2rem]">
                    <div
                      className="flex items-center justify-center p-[4px]"
                      onClick={() => {
                        removeProduct(product.id);
                      }}
                    >
                      <MdOutlineCancelPresentation className="text-[1.3rem] cursor-pointer transition-all duration-300  hover:text-red" />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* note and voucher ship */}
        <div className="my-[40px] text-[0.95rem] w-full h-full grid grid-cols-1 md:grid-cols-2 items-center bg-white border-t-[1px]">
          {/* chat with shop */}
          <div className="w-full p-full ">
            <label>Note:</label>
            <input
              placeholder="note for seller..."
              className="w-[50%] border-[0.3px] h-[32px] text-[0.9rem] ml-[1%] p-[4px] outline-none focus:outline-[1px] focus:outline-red"
            />
          </div>
          {/* choose ship */}
          <div className="w-full h-full bg-bg text-black p-full">
            <Flex justify="between" className="my-half">
              <h4 className="">Voucher:</h4>
              <button className="button bg-white text-main shadow-xl">
                Choose voucher
              </button>
            </Flex>
            <Flex justify="between" className=" mb-half">
              <h4 className="mr-full w-full">Shipping unit:</h4>
              <div className="w-[100%]">
                <h4>Extral</h4>
                <p className="text-[0.8rem] text-sub">
                  Guaranteed delivery from June 4 - June 5 Receive a Voucher
                  worth VND 15,000 if your order is delivered to you after June
                  5, 2024.
                </p>
              </div>
            </Flex>
            <Flex justify="between" className="w-full">
              <h4>Shipping money:</h4>
              <h4 className="text-red">$2</h4>
            </Flex>
          </div>
        </div>
        {/* info person buy */}
        <div className="w-full">
          <h3 className="w-full h-full text-sub text-center text-[1.1rem] font-medium">
            Enter Shipping Information
          </h3>
          {/* address */}
          <Flex justify="between" className="mt-half">
            <div className="flex-1">
              <Flex justify="">
                <FaMapMarkerAlt className="text-red-500 mr-half text-red" />
                <h4 className=" text-[0.9rem] md:text-[1rem] text-sub">
                  Delivery address:
                </h4>
              </Flex>
              <input
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                placeholder=""
                className="w-[50%] h-[34px] border-[1px] px-half mt-[6px]"
              />
            </div>
            <Flex justify="beetwen">
              <h4 className="text-sub">Address type: </h4>
              <select className="p-[4px] focus:outline-[0.4px] focus:outline-red text-[0.9rem]">
                <option>Home</option>
                <option>Company</option>
              </select>
            </Flex>
          </Flex>
          {/* full name */}
          <div className="flex items-start justify-between">
            {/* name */}
            <div className="mt-half">
              <Flex justify="">
                <MdDriveFileRenameOutline className="text-red-500 mr-half text-red" />
                <h4 className=" text-[0.9rem] md:text-[1rem] text-gray-500">
                  Full name:
                </h4>
              </Flex>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder=""
                className="w-full h-[34px] border-[1px] px-half mt-[6px]"
              />
            </div>
            {/* phone and email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              {/* number phone */}
              <div className="mt-half">
                <Flex justify="">
                  <FaPhone className="text-red-500 mr-half text-red" />
                  <h4 className=" text-[0.9rem] md:text-[1rem] text-gray-500">
                    Number phone:
                  </h4>
                </Flex>
                <input
                  type="number"
                  value={numberphone}
                  onChange={(e) => {
                    setNumberphone(e.target.value);
                  }}
                  placeholder=""
                  className="w-full h-[34px] border-[1px] px-half mt-[6px]"
                />
              </div>
              {/* email */}
              <div className="mt-[4px] md:mt-half">
                <Flex justify="">
                  <FaVoicemail className="text-red-500 mr-half text-red" />
                  <h4 className=" text-[0.9rem] md:text-[1rem] text-gray-500">
                    Email:
                  </h4>
                </Flex>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder=""
                  className="w-full h-[34px] border-[1px] px-half mt-[6px]"
                />
              </div>
            </div>
          </div>
          {/* enough 18 years old */}
          <Flex justify="start" className="mt-half">
            <input
              value={checkAge}
              id="input_check"
              type="checkbox"
              onChange={(e) => {
                setCheckAge(e.target.checked);
              }}
            />
            <label
              htmlFor="input_check"
              className="ml-half text-[0.9rem] cursor-pointer"
            >
              I am 18 years old
            </label>
          </Flex>
        </div>
        {/* total price */}
        <Flex justify="end" className="text-end ">
          <div className="">
            <Flex className="my-half" justify="between">
              <h4 className="text-sub mr-full text-[1rem]">
                Total Cost of Goods
              </h4>
              <span className="block text-black">${total}</span>
            </Flex>
            <Flex className="my-half" justify="between">
              <h4 className="text-sub mr-full text-[1rem]">Total Ship</h4>
              <span className="block text-black">$2</span>
            </Flex>
            <Flex className="my-half" justify="between">
              <h4 className="text-sub mr-full text-[1rem]">Total Payment</h4>
              <span className="block text-red text-[1.2rem]">${total + 2}</span>
            </Flex>
          </div>
        </Flex>
      </div>
      {/* button click order */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 h-full max-w-[1200px] mb-full">
        <h6 className="text-gray-500 mb-half md:mb-0 flex items-center">
          Clicking <span className="text-main">"Order"</span> means you agree to
          abide by the NTA Terms
        </h6>
        <button
          onClick={handleOrder}
          className="button bg-red text-white w-full h-full min-w-full"
        >
          Order
        </button>
      </div>
      {/* modal confirm order */}
      <div
        className={`${
          confirmOrder
            ? "translate-y-[-50%] visible "
            : "translate-y-[-100%] opacity-0 invisible "
        } w-[70%] md:w-[40%] z-[140] h-[50%] bg-main fixed top-[34%] md:top-[50%] left-[50%] flex items-center justify-start flex-col translate-x-[-50%] transition-all duration-300 `}
      >
        <h4 className="my-full text-[1.8rem] font-[500]">Order Confirmation</h4>
        <h4 className="mb-full text-sub">
          Total Item:{" "}
          <span className=" text-black text-[1.1rem] ml-half">
            {cart.length}
          </span>
        </h4>
        <h4 className="mb-full text-sub">
          Total Price:
          <span className="underline text-black text-[1.1rem] ml-half">
            ${total}
          </span>
        </h4>
        <Flex justify="center">
          <button
            onClick={() => {
              setConfirmOrder(false);
            }}
            className="button bg-bg text-black mr-half"
          >
            Cancel
          </button>
          <button onClick={actionConfirm} className="button bg-red text-white">
            Confrim
          </button>
        </Flex>
        <div className="px-full mt-full">
          <p className="text-[0.9rem] text-sub">
            * Note: You have clearly read our terms of service, privacy policy
            and customer rights to bring you the best experience.
          </p>
        </div>
      </div>
      <Overlay
        hidden={!confirmOrder}
        onClick={() => {
          setConfirmOrder(false);
        }}
      />
      <ToastContainer />
    </div>
  );
};

export default BuyProductsPages;
