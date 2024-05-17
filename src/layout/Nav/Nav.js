import React, { useEffect, useState, useContext } from "react";
import { ProductsContext } from "../../component/products/ProductsContext";
import { Link } from "react-router-dom";
import "./Nav.scss";
const ItemNav = ({ children, className }) => {
  return (
    <div
      className={` ${className}  item__nav text-[1.1rem] hover:text-gray-500 w-full h-[60px] md:h-full px-full md:px-0   text-start md:text-center   lg:w-full transition-all duration-300`}
    >
      {children}
    </div>
  );
};

export const ListItemNav = () => {
  const [hiddenNav, setHiddenNav] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 450) {
      setHiddenNav(true);
    }
  }, []);
  // const allItem = document.querySelectorAll(".item__nav");
  // allItem.forEach((item) => {
  //   item.addEventListener("click", () => {
  //     allItem.forEach((item) => {
  //       item.classList.remove("active");
  //     });
  //     item.classList.add("active");
  //   });
  // });
  // load category
  const { products } = useContext(ProductsContext);
  const handleLoadCategory = () => {
    const arr = [];
    products.filter((item) => {
      arr.push(item.category.name);
    });
    const newArr = [...new Set(arr)];
    return newArr.map((item, index) => {
      return (
        <a
          href="#showproducts"
          key={index}
          className="cursor-pointer text-start py-[6px] hover:text-red transition-all duration-300"
        >
          {item}
        </a>
      );
    });
  };
  return (
    <div className="w-full h-full">
      <section
        className={`transition-all duration-300 w-full h-full   flex  items-center justify-center `}
      >
        <nav className=" w-[60%] h-full flex items-center justify-start flex-col md:flex-row transition-all duration-300">
          <ItemNav className="item__home">
            <Link
              className=" w-full h-full flex items-center justify-start md:justify-center "
              to="/"
            >
              HOME
            </Link>
            {/* hover home */}
            <div className="hover__home shadow-xl text-white p-full transition-all duration-300 ">
              {/* list link in the home pages */}
              <div>
                <a
                  href="#home__details"
                  className="block text-start py-[6px] cursor-pointer hover:text-red transition-all duration-300"
                >
                  Category of products
                </a>
                <a
                  href="#home__suggestion"
                  className="block text-start py-[6px] cursor-pointer hover:text-red transition-all duration-300"
                >
                  Suggestion today
                </a>
                <Link
                  className="block text-start py-[6px] cursor-pointer hover:text-red transition-all duration-300"
                  to="/products"
                >
                  Products
                </Link>
              </div>
              {/* img */}
              {/* <div className="w-full h-[180px]  absolute bottom-0 ">
                <img
                  className="w-full h-full object-cover"
                  src="https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-taobao-july-cool-sky-promotion-poster-banner-background-image_157029.jpg"
                />
              </div> */}
            </div>
          </ItemNav>
          <ItemNav className="item__products">
            <Link
              className="w-full h-full flex items-center justify-start md:justify-center"
              to="/products"
            >
              PRODUCTS
            </Link>
            {/* hover products */}
            <div className="hover__products shadow-xl text-white pl-full pt-full">
              <div className="block text-start mb-half ">All</div>
              <div className="grid grid-cols-2 ">{handleLoadCategory()}</div>
            </div>
          </ItemNav>
          <ItemNav>
            <Link
              className="w-full h-full flex items-center justify-start md:justify-center"
              to="/abouts"
            >
              ABOUTS
            </Link>
          </ItemNav>
          <ItemNav>
            <Link
              className="w-full h-full flex items-center justify-start md:justify-center"
              to="/contact"
            >
              CONTACTS
            </Link>
          </ItemNav>
        </nav>
      </section>
    </div>
  );
};
const Nav = () => {
  return <ListItemNav />;
};

export default Nav;
