import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// cart context
import { CartContext } from "../../component/cart/CartContext";
// css pages
import "./productsPages.scss";
import { ProductsContext } from "../../component/products/ProductsContext";
//import products
import Product from "../../component/products/Product";
//import Chats
import Chats from "../../component/chatmess/Chats";
import Flex from "../../component/flex/Flex";
// search
import Search from "../../component/search/Search";
// path
import Path from "../../layout/Path/Path";
// icon
import { FaAngleDown } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { CiCircleList } from "react-icons/ci";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { BsArrowUpCircleFill } from "react-icons/bs";

const Products = () => {
  const { addProducts } = useContext(CartContext);

  const { products } = useContext(ProductsContext);
  //  value filer category
  const [values, setValue] = useState("");
  const [upOrDown, setUpOrDown] = useState("=");
  // filter sản phẩm tăng hoặc giảm theo giá
  const [isStatusPrciceFilter, setIsStatusPriceFilter] = useState(null);
  // random ngẫu nhiên một sản phẩm review
  const lenghProducts = products.length;
  const idRandom = Math.floor(Math.random() * lenghProducts);

  useEffect(() => {
    window.scrollTo(0, 0); // Thực hiện scroll đến đầu trang khi component được render lại
  }, []);
  useEffect(() => {
    window.addEventListener("load", () => {
      handleReload();
    });
    return () => {
      window.removeEventListener("load", () => {});
    };
  }, []);
  const Item = ({ children }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(true);
    };
    return (
      <div
        className={`item my-[2px] w-full capitalize text-gray-500 hover:text-black h-[42px] flex items-center justify-start cursor-pointer p-[8px] ${
          isActive ? "active" : ""
        }`}
        onClick={(e) => {
          setValue(e.target.innerText);
        }}
        onMouseUp={() => {
          setIsActive(true);
        }}
      >
        {children}
      </div>
    );
  };
  // handleFilter products follow price
  const LoadCategory = () => {
    const arr = [];
    products.filter((item) => {
      arr.push(item.category.name);
    });
    const newArr = [...new Set(arr)];
    return newArr.map((item, index) => {
      return <Item key={index}>{item}</Item>;
    });
  };
  // các phần tử con của Filter
  const ChildrenFilter = ({ title, select1, select2, select3 }) => {
    return (
      <div className="w-full h-full py-full border-b-[0.5px] border-[#EF4444]">
        <h4 className="text-[0.95rem] my-half mb-full capitalize  ml-half ">
          {title}
        </h4>
        {/* show các danh mục chọn lựa */}
        <div className="my-half pl-full text-gray-500 text-[0.9rem]">
          <Flex justify="start" className="my-[6px]">
            <input type="checkbox" className="mr-half" />
            <h5>{select1}</h5>
          </Flex>
          <Flex justify="start" className="my-[6px]">
            <input type="checkbox" className="mr-half" />
            <h5>{select2}</h5>
          </Flex>
          {select3 ? (
            <>
              <Flex justify="start" className="my-[6px]">
                <input type="checkbox" className="mr-half" />
                <h5>{select3}</h5>
              </Flex>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  };
  var newArr = [];
  const handleFilterProductsPrice = () => {
    for (var i = 0; i < products.length - 1; i++) {
      for (var j = i; j < products.length; j++) {
        var temp;
        if (upOrDown === "up" && products[i].price > products[j].price) {
          temp = products[i];
          products[i] = products[j];
          products[j] = temp;
        } else if (
          upOrDown === "down" &&
          products[i].price < products[j].price
        ) {
          temp = products[i];
          products[i] = products[j];
          products[j] = temp;
        }
      }
    }
    return products;
  };
  const [showButtonToTop, setShowButtonToTop] = useState(true);
  window.addEventListener("scroll", () => {
    var currentScrollPos = window.scrollY;
    if (currentScrollPos > 520) {
      setShowButtonToTop(false);
    } else {
      setShowButtonToTop(true);
    }
  });
  const handleReload = () => {
    window.location.href = "/"; // Đặt lại pathname về trang chủ
  };

  const itemNameCategory = document.querySelectorAll(".item");
  itemNameCategory.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.add("active");
    });
  });
  return (
    <div className="bg-bg w-full flex items-center flex-col justify-center relative transition-all duration-500">
      {/* path */}
      <div className="w-full h-full max-w-main mt-full px-full md:px-0">
        <Path />
      </div>
      {/* demo sản phẩm hot */}
      <Flex
        justify="center"
        className="w-full h-full min-h-[400px] bg-white border-b-[1px] mb-half    "
      >
        {idRandom ? (
          <>
            {products.map((item, index) => {
              if (index === idRandom) {
                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 max-w-main w-full h-full py-full px-full md:px-0">
                    {/*info and button action  */}
                    <div className="mb-full md:mb-0">
                      {/* title */}
                      <span className="text-[1.6rem] mb-[40px] block mt-[24px]">
                        SALES PRODUCTS
                      </span>
                      {/* info */}
                      <div>
                        {/* tên sản phẩm */}
                        <h2 className="py-half text-[1.3rem]">{item.title}</h2>
                        {/* category */}
                        <h4 className="text-main text-[1.1rem] py-half">
                          {item.category.name}
                        </h4>
                        {/* des */}
                        <p className="text-gray-500 tracking-wider text-[1rem]">
                          {item.description}
                        </p>
                      </div>
                      {/* button action */}
                      <div className="mt-full">
                        <Flex justify="start">
                          <button
                            onClick={() => {
                              addProducts(item, item.id);
                            }}
                            className="bg-main mr-half border-[1px] p-half hover:opacity-[0.7]"
                          >
                            Add to cart
                          </button>
                          <Link
                            to={`/cart/buy`}
                            className="bg-red text-white border-[1px] p-half hover:opacity-[0.7]"
                          >
                            Buy now
                          </Link>
                        </Flex>
                      </div>
                      <Flex justify="center" className="mt-half">
                        <Link
                          to={`/products/id/${item.id}`}
                          className="border-[1px] p-half hover:opacity-[0.7] bg-bg"
                        >
                          SEE MORE
                        </Link>
                      </Flex>
                    </div>
                    {/* ảnh */}
                    <Flex justify="start" className="w-full h-full flex-col  ">
                      <img
                        className="w-[70%] h-[80%] object-cover 	"
                        src={item.images}
                      />
                      <span className="block text-center text-gray-400 pt-[4px] text-[0.8rem]">
                        {item.updatedAt}
                      </span>
                    </Flex>
                  </div>
                );
              }
            })}
          </>
        ) : (
          <div className="flex items-center justify-center">Loading</div>
        )}
      </Flex>
      {/* search */}
      <h3
        id="showproducts"
        className="mt-full text-gray-600 text-[1.1rem] select-none"
      >
        Enter the product name you are looking for!
      </h3>
      <div className="w-[100%] md:w-[70%]">
        <Search />
      </div>
      {/* list products */}
      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-[20%,80%] px-full md:px-full xl:px-0 transition-all duration-200  pb-full">
        {/* thanh bên */}
        <aside className="max-w-[90%]  md:max-w-[80%] w-full  mt-full ">
          <div className="w-[100%]">
            {/* list các tên danh mục mặt hàng */}
            <div className="w-full   ">
              <Flex className="font-bold text-[1rem] mt-[22px] mb-[20px] md:text-[1.2rem]">
                <CiCircleList className="font-bold mr-half text-red text-[1.5rem]" />
                <h4>Category</h4>
              </Flex>
              <ul className="mt-[12px] text-[0.9rem] w-full ml-[10px] md:text-[1.1rem] md:ml-[22px]">
                <Item>All</Item>
                {LoadCategory()}
              </ul>
            </div>
            {/* bộ lọc tìm kiếm */}
            <div className="max-w-[90%] md:max-w-[80%]">
              <Flex
                justify="start"
                className="font-bold text-[1rem] mt-[22px]  md:text-[1.2rem]"
              >
                <CiFilter className="text-[1.5rem] text-red" />
                <span>Search fillter</span>
              </Flex>
              <ChildrenFilter
                title="place of sale"
                select1="Viet Nam"
                select2="Foreign"
              />
              <ChildrenFilter
                title="shipping unit"
                select1="Express"
                select2="Save money"
                select3="Fast"
              />
              <ChildrenFilter
                title="shop type"
                select1="Mall"
                select2="Favourite"
              />
            </div>
            <div className="mt-[12px]">
              <Chats />
            </div>
          </div>
        </aside>
        {/* show products */}
        <div className="max-w-[100%] w-full scroll-smooth mt-full">
          {/* show sorted by */}
          <Flex justify="between" className="w-full my-half  h-[40px]">
            <Flex justify="start" className=" overflow-x-auto ">
              <div className="w-full min-w-[100px]">
                <span className="text-gray-500">Sorted by:</span>
              </div>
              <button className="px-half py-[8px] shadown-4xl mx-[6px]  cursor-pointer  bg-red text-white  hover:opacity-80">
                Popular
              </button>
              <button className="px-half py-[8px] shadown-4xl mx-[6px]  cursor-pointer  bg-white hover:text-gray-500">
                Latest
              </button>
              <button className="px-half py-[8px] shadown-4xl mx-[6px]  cursor-pointer  bg-white hover:text-gray-500">
                Selling
              </button>
              {/* sap xep theo gia */}

              <Flex
                className="bg-white min-w-[190px] w-full h-full mx-[6px] py-[4.5px]  p-[8.2px]  "
                justify="between"
              >
                <h4 className="select-none text-gray-600">Price</h4>
                {/* tang hoac giam */}
                <Flex justify="start">
                  <div
                    className="text-white  hover:text-black bg-red mx-[2px] transition-all cursor-pointer duration-300 p-[4px] px-[8px]"
                    onClick={() => {
                      setUpOrDown("down");
                      setIsStatusPriceFilter(true);
                    }}
                  >
                    <FaArrowDown className="" />
                  </div>
                  <div
                    onClick={() => {
                      setIsStatusPriceFilter(!isStatusPrciceFilter);
                      setUpOrDown("up");
                    }}
                    className="text-white   hover:text-black bg-red mx-[2px] transition-all cursor-pointer duration-300 p-[4px] px-[8px]"
                  >
                    <FaArrowUp />
                  </div>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <div className="w-full h-[full] mt-[20px]  grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[12px]   transtion-all duration-500  overflow-y-auto scroll-smooth">
            {products
              .filter((product) => {
                if (product) {
                  if (product.category.name === values) {
                    if (isStatusPrciceFilter && upOrDown) {
                      handleFilterProductsPrice();
                    }
                    return product.category.name;
                  } else if (values === "All" || values === "") {
                    if (isStatusPrciceFilter && upOrDown) {
                      handleFilterProductsPrice();
                    }
                    return product;
                  }
                }
              })
              .map((product, index) => {
                return <Product products={product} key={index} />;
              })}
          </div>
        </div>
      </div>
      {/* button lên đầu trang */}
      <div
        hidden={showButtonToTop}
        className="fixed z-[110] w-full bottom-[20px] right-[-10px] transition-all duration-500 "
      >
        <div
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="w-[30px] h-[30px] md:w-[40px] flex items-center justify-center md:h-[40px] bg-main shadow-3xl cursor-pointer animate-bounce"
        >
          <BsArrowUpCircleFill className="text-[2rem]" />
        </div>
      </div>
    </div>
  );
};

export default Products;
