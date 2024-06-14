import React, { useEffect } from "react";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
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
    <div className="w-full h-full flex items-center justify-center bg-white py-full">
      <div className="max-w-[1200px] px-full md:px-full lg:px-full xl:px-0">
        <div className="w-full  text-start  leading-[1.4rem] tracking-[1px] text-[#444]">
          <ul className="w-full mb-[12px]">
            <li>
              <span className="text-[1.1rem] text-red block">Address:</span>
              <p className="ml-full mb-half">
                Bằng Doãn, Đoan Hùng, 19 Phú Thọ
              </p>
            </li>
            <li>
              <span className="text-[1.1rem] text-red block">Phone:</span>
              <p className="ml-full mb-half">+0961563714</p>
            </li>
            <li>
              <span className="text-[1.1rem] text-red block">Email:</span>
              <p className="ml-full mb-half">nguyenthean1206@gmail.com</p>
            </li>
            <a
              href="https://github.com/nguyenan12a"
              className="hover:underline decoration-[#FEBD68] text-black"
            >
              <span className="text-[1.1rem] text-red block">Github:</span>
              <p className="ml-full mb-half">
                https://github.com/nguyenthean12062002
              </p>
            </a>
          </ul>
          <p>
            Welcome to the Contact Us page of NTA Store! We are always eager to
            listen to your feedback, questions, and inquiries. If you have any
            queries regarding our products, services, or the purchasing process,
            please feel free to get in touch with us using the contact
            information provided above. Our dedicated customer care team will
            strive to respond promptly and address any concerns you may have. We
            value every suggestion and feedback, and we will utilize them to
            improve and enhance our services. You can reach out to us via phone,
            email, or by visiting our physical store. Our customer support
            representatives are ready to assist you and provide the necessary
            assistance to ensure your satisfaction. We also encourage you to
            connect with us on our social media channels to stay updated with
            our latest products, promotions, and news. You can find the links to
            our social media profiles on our website. Thank you for choosing NTA
            Store. We appreciate your support and look forward to serving you
            better.
          </p>
        </div>
        {/* liên hệ qua email */}
        <div className="w-[100%] md:w-[50%] lg:w-[30%] mt-full">
          <label htmlFor="input" className="mb-half block">
            Enter your email
          </label>
          <div className="flex item-center justify-start">
            <input
              id="input"
              placeholder="..."
              className="border-[#EF4444] w-full h-[44px] border-[1px] px-half mr-half"
            />
            <button className="bg-red text-white px-half  hover:opacity-[0.8] flex items-center justify-center transition-all duration-300">
              Send
              <IoIosSend className="text-[2rem] lg:text-[2.4rem] ml-[6px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
