import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
// cart context
import { CartContext } from "../../component/cart/CartContext";
// css pages
import "./productsPages.scss";
// import products
import Product from "../../component/products/Product";
// import Chats
import Chats from "../../component/chatmess/Chats";
import Flex from "../../component/components/flex/Flex";
// search
import Search from "../../component/search/Search";
// icons
import { CiFilter, CiCircleList } from "react-icons/ci";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

import { Overlay, Loading } from "../../component/components";

// Custom hook to fetch products
const useFetchProducts = (API) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${API}`);
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch {
        console.error("Get products error");
      }
    };
    getData();
  }, [API]);

  return { products, isLoading };
};

// Custom hook to filter products
const useFilteredProducts = (products, value, minPrice, maxPrice) => {
  return useMemo(() => {
    return products.filter((item) => {
      const matchesCategory =
        value === null || item.category.id === parseInt(value);
      const matchesPrice =
        (!minPrice || item.price >= parseFloat(minPrice)) &&
        (!maxPrice || item.price <= parseFloat(maxPrice));
      return matchesCategory && matchesPrice;
    });
  }, [products, value, minPrice, maxPrice]);
};

const Products = () => {
  const { addProducts } = useContext(CartContext);
  const API = process.env.REACT_APP_API_PRODUCTS;
  const [value, setValue] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const minPriceRef = useRef();
  const maxPriceRef = useRef();
  const { products, isLoading } = useFetchProducts(API);
  const filteredProducts = useFilteredProducts(
    products,
    value,
    minPrice,
    maxPrice
  );
  const showButtonToTop = false;
  const lengthProducts = products.length;
  const idRandom = Math.floor(Math.random() * lengthProducts);
  const randomProduct = products[idRandom];
  const handleFilterPrice = useCallback(() => {
    setMinPrice(minPriceRef.current.value);
    setMaxPrice(maxPriceRef.current.value);
  }, []);

  const Item = ({ children, id }) => {
    return (
      <div
        data-id={id}
        className="item my-[2px] w-full capitalize text-gray-500 hover:text-black h-[42px] flex items-center justify-start cursor-pointer p-[8px]"
        onClick={() => setValue(id)}
      >
        {children}
      </div>
    );
  };

  const LoadCategory = () => {
    const categories = products.reduce((acc, item) => {
      acc[item.category.id] = item.category.name;
      return acc;
    }, {});
    return Object.entries(categories).map(([id, name], index) => (
      <Item id={id} key={index}>
        {name}
      </Item>
    ));
  };

  const ChildrenFilter = ({ title, select1, select2, select3 }) => {
    return (
      <div className="w-full h-full py-full border-b-[0.5px] border-[#EF4444]">
        <h4 className="text-[0.95rem] my-half mb-full capitalize  ml-half ">
          {title}
        </h4>
        <div className="my-half pl-full text-gray-500 text-[0.9rem]">
          <Flex justify="start" className="my-[6px]">
            <input
              id={`checkbox_${select1}`}
              type="checkbox"
              className="mr-half"
            />
            <label htmlFor={`checkbox_${select1}`}>{select1}</label>
          </Flex>
          <Flex justify="start" className="my-[6px]">
            <input
              id={`checkbox_${select2}`}
              type="checkbox"
              className="mr-half"
            />
            <label htmlFor={`checkbox_${select2}`}>{select2}</label>
          </Flex>
          {select3 && (
            <Flex justify="start" className="my-[6px]">
              <input
                id={`checkbox_${select3}`}
                type="checkbox"
                className="mr-half"
              />
              <label htmlFor={`checkbox_${select3}`}>{select3}</label>
            </Flex>
          )}
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      {isLoading && <Loading />}
      {isLoading && <Overlay />}
      <div className="products__page bg-bg w-full flex items-center flex-col justify-center relative transition-all duration-500">
        <Flex
          justify="center"
          className="w-full h-full min-h-[400px] bg-white border-b-[1px] mb-half px-full lg:px-0"
        >
          {randomProduct && (
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-main w-full h-full py-full px-full xl:px-0">
              <div className="mb-full md:mb-0">
                <span className="text-[1.6rem] mb-[40px] block mt-[24px]">
                  SALES PRODUCTS
                </span>
                <div>
                  <h2 className="py-half text-[1.3rem]">
                    {randomProduct.title}
                  </h2>
                  <h4 className="text-main text-[1.1rem] py-half">
                    {randomProduct.category.name}
                  </h4>
                  <p className="text-gray-500 tracking-wider text-[1rem]">
                    {randomProduct.description}
                  </p>
                </div>
                <div className="mt-full">
                  <Flex justify="start">
                    <button
                      onClick={() =>
                        addProducts(randomProduct, randomProduct.id)
                      }
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
                    to={`/products/id/${randomProduct.id}`}
                    className="border-[1px] p-half hover:opacity-[0.7] bg-bg"
                  >
                    More
                  </Link>
                </Flex>
              </div>
              <div className="w-full h-full flex flex-col items-end justify-center bg-main">
                <img
                  className="w-[80%] h-[80%] object-contain"
                  src={randomProduct.images}
                  alt="img__product"
                />
                <span className="inline-block text-center text-gray-400 pt-[4px] text-[0.8rem] mr-full">
                  {randomProduct.updatedAt}
                </span>
              </div>
            </div>
          )}
        </Flex>
        <h3
          id="showproducts"
          className="mt-full text-gray-600 text-[1.1rem] select-none"
        >
          Please enter name product!
        </h3>
        <div className="w-[100%] md:w-[70%]">
          <Search />
        </div>
        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-[20%,80%] px-full md:px-full xl:px-0 transition-all duration-200 pb-full">
          <aside className="max-w-[90%] md:max-w-[80%] w-full mt-full">
            <div className="w-[100%]">
              <div className="w-full">
                <Flex className="font-bold text-[1rem] mt-[22px] mb-[20px] md:text-[1.2rem]">
                  <CiCircleList className="font-bold mr-half text-red text-[1.5rem]" />
                  <h4>Category</h4>
                </Flex>
                <ul className="mt-[12px] text-[0.9rem] w-full ml-[10px]">
                  <div
                    onClick={() => setValue(null)}
                    className="item my-[2px] w-full capitalize text-gray-500 hover:text-black h-[42px] flex items-center justify-start cursor-pointer p-[8px]"
                  >
                    All
                  </div>
                  {products && LoadCategory()}
                </ul>
              </div>
              <div className="max-w-[90%] md:max-w-[80%]">
                <Flex
                  justify="start"
                  className="font-bold text-[1rem] mt-[22px] md:text-[1.2rem]"
                >
                  <CiFilter className="font-bold mr-half text-red text-[1.5rem]" />
                  <h4>Filter</h4>
                </Flex>

                <div className="mt-[12px] text-[0.9rem] w-full">
                  <ChildrenFilter
                    title="Condition"
                    select1="New"
                    select2="Used"
                    select3="Refurbished"
                  />
                  <ChildrenFilter
                    title="Evaluate"
                    select1="5 star"
                    select2="4 star or more"
                    select3="3 star or more"
                  />
                </div>
              </div>
            </div>
          </aside>
          <section className="w-full mt-[20px] md:mt-0">
            <div className="w-full  py-full">
              <Flex justify="end" className="items-center h-[32px]">
                <h4 className="text-red font-[500] mr-half">Price: </h4>
                <input
                  ref={minPriceRef}
                  type="number"
                  placeholder="Min"
                  className="border-[1px] text-[0.9rem] w-[10%] h-full border-gray-300 px-half  outline-red"
                />
                <FaLongArrowAltRight className="mx-half text-sub" />
                <input
                  ref={maxPriceRef}
                  type="number"
                  placeholder="Max"
                  className="border-[1px] text-[0.9rem] w-[10%] h-full border-gray-300 px-half mr-half outline-red"
                />
                <button
                  onClick={handleFilterPrice}
                  className="bg-main h-full text-white px-half border-[1px] border-main hover:opacity-[0.7]"
                >
                  Filter
                </button>
              </Flex>
            </div>
            <div justify="start" className="grid grid-cols-4 gap-[10px]">
              {filteredProducts.map((product) => (
                <Product
                  key={product.id}
                  data={product}
                  addProducts={addProducts}
                />
              ))}
            </div>
          </section>
        </div>
        {showButtonToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-4 right-4 bg-main text-white p-[10px] rounded-full"
          >
            <BsArrowUpCircleFill className="text-[1.5rem]" />
          </button>
        )}
      </div>
    </Fragment>
  );
};

export default Products;
