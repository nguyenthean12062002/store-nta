import React, { useContext, useEffect, useState } from "react";
// css pages
import "./productsPages.scss";
import { ProductsContext } from "../../component/products/ProductsContext";
//import products
import Product from "../../component/products/Product";
//import Chats
import Chats from "../../component/chatmess/Chats";
import Flex from "../../component/flex/Flex";
// icon
import { FaAngleDown } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { CiCircleList } from "react-icons/ci";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { BsArrowUpCircleFill } from "react-icons/bs";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Thực hiện scroll đến đầu trang khi component được render lại
  }, []);
  const [values, setValue] = useState("");

  const { products } = useContext(ProductsContext);
  //  value filer category
  // filter sản phẩm tăng hoặc giảm theo giá
  const [isStatusPrciceFilter, setIsStatusPriceFilter] = useState(null);
  const [upOrDown, setUpOrDown] = useState("=");
  const Item = ({ children }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(true);
    };
    return (
      <div
        className={`item my-[2px] w-full text-gray-500 hover:text-black h-[42px] flex items-center justify-start cursor-pointer p-[8px] ${
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
  useEffect(() => {
    window.addEventListener("load", () => {
      handleReload();
    });
    return () => {
      window.removeEventListener("load", () => {});
    };
  }, []);
  const itemNameCategory = document.querySelectorAll(".item");
  itemNameCategory.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.add("active");
    });
  });
  return (
    <div className="bg-[#F5F5F5] w-full flex items-center justify-center relative">
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
              <button className="px-half py-[8px] shadown-4xl mx-[6px] rounded-2xl cursor-pointer  bg-red text-white  hover:opacity-80">
                Popular
              </button>
              <button className="px-half py-[8px] shadown-4xl mx-[6px] rounded-2xl cursor-pointer  bg-white hover:text-gray-500">
                Latest
              </button>
              <button className="px-half py-[8px] shadown-4xl mx-[6px] rounded-2xl cursor-pointer  bg-white hover:text-gray-500">
                Selling
              </button>
              {/* sap xep theo gia */}

              <Flex
                className="bg-white min-w-[190px] w-full h-full mx-[6px] py-[4.5px]  p-[8.2px] rounded-2xl "
                justify="between"
              >
                <h4 className="select-none text-gray-600">Price</h4>
                {/* tang hoac giam */}
                <Flex justify="start">
                  <div
                    className="text-white rounded-2xl hover:text-black bg-red mx-[2px] transition-all cursor-pointer duration-300 p-[4px] px-[8px]"
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
                    className="text-white rounded-2xl  hover:text-black bg-red mx-[2px] transition-all cursor-pointer duration-300 p-[4px] px-[8px]"
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
