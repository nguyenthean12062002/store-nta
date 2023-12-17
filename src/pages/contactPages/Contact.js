import React from "react";
import Header from "../../layout/Header/Header";
const Contact = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <h2 className="text-[1.6rem] text-center font-bold py-[22px]">CONTACT</h2>
      <div className="px-[5%] text-start md:px-[10%] leading-[1.4rem] tracking-[1px] text-[#444]">
        <ul className="mb-[12px]">
          <li>Address: Bằng Doãn, Đoan Hùng, 19 Phú Thọ</li>
          <li>Phone: +0961563714</li>
          <li>Email: nguyenthean1206@gmail.com</li>
          <a
            href="https://github.com/nguyenan12a"
            className="hover:underline decoration-[#FEBD68] text-black"
          >
            Github:https://github.com/nguyenan12a
          </a>
        </ul>
        <p>
          Welcome to the Contact Us page of NTA Store! We are always eager to
          listen to your feedback, questions, and inquiries. If you have any
          queries regarding our products, services, or the purchasing process,
          please feel free to get in touch with us using the contact information
          provided above. Our dedicated customer care team will strive to
          respond promptly and address any concerns you may have. We value every
          suggestion and feedback, and we will utilize them to improve and
          enhance our services. You can reach out to us via phone, email, or by
          visiting our physical store. Our customer support representatives are
          ready to assist you and provide the necessary assistance to ensure
          your satisfaction. We also encourage you to connect with us on our
          social media channels to stay updated with our latest products,
          promotions, and news. You can find the links to our social media
          profiles on our website. Thank you for choosing NTA Store. We
          appreciate your support and look forward to serving you better.
        </p>
      </div>
    </div>
  );
};

export default Contact;
