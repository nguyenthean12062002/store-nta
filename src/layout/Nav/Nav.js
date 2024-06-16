import React, { useContext } from "react";
import { ProductsContext } from "../../component/products/ProductsContext";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Nav.scss";
const ItemNav = ({ children, className, setShowSidebar }) => {
  return (
    <div
      className={` ${className}  item__nav text-[1.1rem] hover:text-gray-500 w-full h-[60px] md:h-full px-full md:px-0   text-start md:text-center   lg:w-full transition-all duration-300`}
    >
      {children}
    </div>
  );
};

export const ListItemNav = ({ setShowSidebar }) => {
  const { products } = useContext(ProductsContext);
  const handleLoadCategory = () => {
    const arr = [];
    products.filter((item) => {
      return arr.push(item.category.name);
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
    <div className="w-full h-full font-[400]">
      <section
        className={`transition-all duration-300 w-full h-full   flex  items-center justify-center `}
      >
        <nav className=" w-[60%] h-full flex items-center justify-start flex-col md:flex-row transition-all duration-300">
          <ItemNav setShowSidebar={setShowSidebar} className="item__home">
            <Link
              className=" w-full h-full flex items-center justify-start md:justify-center "
              to="/"
            >
              HOME
              <FaChevronDown className="item__icon" />
            </Link>
            {/* hover home */}
            <div className="hover__home shadow-xl text-white p-full transition-all duration-300 ">
              {/* list link in the home pages */}
              <div>
                <a className="block text-start py-[6px] cursor-pointer hover:text-red transition-all duration-300">
                  Category of products
                </a>
                <a className="block text-start py-[6px] cursor-pointer hover:text-red transition-all duration-300">
                  Suggestion today
                </a>
                <Link
                  className="block text-start py-[6px] cursor-pointer hover:text-red transition-all duration-300"
                  to="/products"
                >
                  Products
                </Link>
              </div>
            </div>
          </ItemNav>
          <ItemNav setShowSidebar={setShowSidebar} className="item__products">
            <Link
              className="w-full h-full flex items-center justify-start md:justify-center"
              to="/products"
            >
              PRODUCTS
              <FaChevronDown className="item__icon" />
            </Link>
            <div className="hover__products shadow-xl text-white pl-full pt-full">
              <div className="block text-start mb-half ">All</div>
              <div className="grid grid-cols-2 ">{handleLoadCategory()}</div>
            </div>
          </ItemNav>
          <ItemNav setShowSidebar={setShowSidebar}>
            <Link
              className="w-full h-full flex items-center justify-start md:justify-center"
              to="/abouts"
            >
              ABOUTS
            </Link>
          </ItemNav>
          <ItemNav setShowSidebar={setShowSidebar}>
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
