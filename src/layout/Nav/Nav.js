import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import { flushSync } from "react-dom";
const ItemNav = ({ children, classe }) => {
  return (
    <div
      className={`${classe} item__nav text-[1.1rem]  hover:text-main  w-full h-[50px] mx-[6px] my-[4px] md:my-[0px] md:h-[40px] text-center  md:w-[full] lg:w-full transition-all duration-300`}
    >
      {children}
    </div>
  );
};
const ListItemNav = () => {
  const [hiddenNav, setHiddenNav] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 450) {
      setHiddenNav(true);
    }
  }, []);
  console.log(hiddenNav);
  return (
    <>
      <section
        className={`transition-all duration-200 w-full h-[full]  py-[2px] px-[8px] flex  items-center justify-center `}
      >
        <nav
          hidden={hiddenNav}
          className="w-[70%] h-full flex items-center justify-evenly md:flex-row transition-all duration-300"
        >
          <ItemNav classe="active">
            <Link
              className="w-full h-full flex items-center justify-center "
              to="/"
            >
              Home
            </Link>
          </ItemNav>
          <ItemNav>
            <Link
              className="w-full h-full flex items-center justify-center"
              to="/products"
            >
              Products
            </Link>
          </ItemNav>
          <ItemNav>
            <Link
              className="w-full h-full flex items-center justify-center"
              to="/abouts"
            >
              Abouts
            </Link>
          </ItemNav>
          <ItemNav>
            <Link
              className="w-full h-full flex items-center justify-center"
              to="/contact"
            >
              Contacts
            </Link>
          </ItemNav>
        </nav>
      </section>
    </>
  );
};
const Nav = () => {
  const allItem = document.querySelectorAll(".item__nav");
  allItem.forEach((item) => {
    item.addEventListener("click", () => {
      allItem.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
  return <ListItemNav />;
};

export default Nav;
