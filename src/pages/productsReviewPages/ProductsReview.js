import React, {
  useContext,
  useLayoutEffect,
  useState,
  useMemo,
  Fragment,
} from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../component/cart/CartContext";
import { ProductsContext } from "../../component/products/ProductsContext";
import Product from "../../component/products/Product";
import Flex from "../../component/components/flex/Flex";
import OverLay from "../../layout/OverLay/OverLay";
import { FaFacebookSquare } from "react-icons/fa";
import { GiTwister } from "react-icons/gi";
import { SiShopee } from "react-icons/si";
import { PiStarThin } from "react-icons/pi";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
const ProductsReview = () => {
  const [imageSelect, setImageSelect] = useState("");
  const [indexImageSelect, setIndexImageSelect] = useState(0);
  const [open, setOpen] = useState(true);
  const [valueComments, setValueComments] = useState("");
  const { addProducts } = useContext(CartContext);
  const { products } = useContext(ProductsContext);
  const { id } = useParams();
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  useLayoutEffect(() => {
    setImageSelect(images);
  }, []);
  const product = useMemo(() => {
    return products.find((item) => item.id === parseInt(id));
  }, [id, products]);
  const { title, images, price, description } = product;

  const randomPriceSale = useMemo(() => Math.floor(Math.random() * 200), []);
  const salesPrice = (
    ((randomPriceSale + price - price) / (price + randomPriceSale)) *
    100
  ).toFixed(0);
  const relatedProducts = useMemo(() => {
    return products.filter(
      (item) =>
        item.category.name === product.category.name &&
        item.title !== product.title
    );
  }, [product, products]);

  const showComments = () => {};
  // modal preview
  const handlePreImg = () => {
    setIndexImageSelect((preIndex) => {
      // preIndex : initvalue === indexImagesSelect(0)
      const newIndex = preIndex <= 0 ? images.length - 1 : preIndex - 1;
      setImageSelect(images[newIndex]);
      // asign value newIndex
      return newIndex;
    });
  };

  const handleNextImg = () => {
    setIndexImageSelect((preIndex) => {
      const newIndex = preIndex >= images.length - 1 ? 0 : preIndex + 1;
      setImageSelect(images[newIndex]);
      return newIndex;
    });
  };
  const ModalPreviewImages = ({ hidden, images }) => {
    return (
      <Flex
        hidden={hidden}
        justify="center"
        className={`modal__preview w-[90%] lg:w-[60%]  h-[60%] top-[50%] left-[50%] fixed  translate-x-[-50%] z-[150] transition-all duration-500   ${
          hidden
            ? "translate-y-[100%] opacity-0 invisible"
            : "translate-y-[-50%]  opacity-100 visible"
        } `}
      >
        <div
          className={`w-[100%] h-[100%] flex items-center  justify-center 
         `}
        >
          <img
            alt="img__preview"
            src={images}
            className={`w-[100%] h-[100%] object-cover`}
          />
          {/* button next and back preview img */}
          <Flex
            justify="between"
            className="absolute w-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
          >
            <button
              className="button bg-bg text-black px-half rounded-[180px] shadow-3xl"
              onClick={handlePreImg}
            >
              <MdArrowBackIos />
            </button>
            <button
              className="button bg-bg text-black px-half rounded-[180px] shadow-3xl"
              onClick={handleNextImg}
            >
              <MdArrowForwardIos />
            </button>
          </Flex>
        </div>
      </Flex>
    );
  };
  return (
    <Fragment>
      <div className="bg-bg  w-full h-full flex items-center justify-center">
        <div className="w-full max-w-[1200px] h-full mt-full pb-full">
          {/* review */}
          <div className="w-full h-full bg-white px-full md:px-[10%] pb-full">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 ">
              {/* img */}
              <div className="w-[90%] md:w-[70%] lg:w-[70%] h-auto m-auto  flex flex-col items-center justify-center py-full">
                <img
                  src={images[0]}
                  alt="images"
                  className="h-full w-full object-cover cursor-pointer"
                  onClick={() => {
                    setOpen(false);
                    setImageSelect(images[0]);
                  }}
                />
                {/* more images   */}
                <div className="w-full h-[120px] grid grid-cols-2 mt-half gap-x-[8px]">
                  {images
                    .filter((img, index) => {
                      if (index > 0) {
                        return img;
                      }
                      return;
                    })
                    .map((img, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => {
                            setOpen(false);
                            setImageSelect(img);
                            setIndexImageSelect(index + 1);
                          }}
                          className="cursor-pointer"
                        >
                          <img
                            src={img}
                            alt="more__img"
                            key={index}
                            className="w-full cursor-pointer object-cover"
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
              {/* info products */}
              <div className="h-full w-full pb-full  flex items-start justify-start font-[300] ">
                <div className="w-full mt-full">
                  {/* title */}
                  <h4 className="py-half text-black font-[500] text-[1.5rem] text-center">
                    {title}
                  </h4>
                  {/* category */}
                  <h5 className="text-[1.1rem]  py-half text-start border-b-[0.7px]">
                    Category:
                    <span className="italic font-[400]">
                      {product.category.name}
                    </span>
                  </h5>
                  {/* price */}
                  <Flex justify="start">
                    <h4 className="font-[300] text-[1.1rem] my-half text-black ">
                      Price: ${" "}
                      <span className="text-main  font-[400]">{price}</span>
                    </h4>
                    <h4 className="font-[300] line-through text-[0.9rem] my-half text-sub mx-half ">
                      ${price + randomPriceSale}
                    </h4>
                    <h4 className="bg-red text-white p-[2px] px-lg text-[0.9rem]">
                      {salesPrice}% reduce
                    </h4>
                  </Flex>
                  {/* count product sold */}
                  <h2 className="font-[300] text-[1rem] py-half text-sub">
                    Sold: <span>{randomPriceSale}</span>
                  </h2>
                  {/* socical action */}
                  <Flex
                    justify="start"
                    className="border-t-[0.7px] w-full h-[50px]"
                  >
                    {/* fb */}
                    <Flex
                      justify="center"
                      className="px-[4px] cursor-pointer h-[65%] bg-[#0866FF] text-white"
                    >
                      <FaFacebookSquare />
                      <span className="ml-[4px]">Facebook</span>
                    </Flex>
                    {/* twister */}
                    <Flex
                      justify="center"
                      className="w-[86px] cursor-pointer h-[65%] ml-half bg-[#1DA1F2] text-white"
                    >
                      <GiTwister />
                      <span className="ml-[4px]">Twister</span>
                    </Flex>
                    {/* shoppee */}
                    <Flex
                      justify="center"
                      className="w-[86px] cursor-pointer h-[65%] ml-half bg-[#EE4D2D] text-white"
                    >
                      <SiShopee />
                      <span className="ml-[4px]">Shoppe</span>
                    </Flex>
                  </Flex>
                  {/* rating */}
                  <Flex
                    justify="start"
                    className="mb-half border-t-[0.7px] pt-half"
                  >
                    <span>Rating:</span>
                    {/* show start */}
                    <Flex justify="center" className="ml-half">
                      <PiStarThin className="mx-[2px] select-none text-red" />
                      <PiStarThin className="mx-[2px] select-none text-red" />
                      <PiStarThin className="mx-[2px] select-none text-red" />
                      <PiStarThin className="mx-[2px] select-none text-red" />
                      <PiStarThin className="mx-[2px] select-none" />
                    </Flex>
                  </Flex>
                  {/* color */}
                  <Flex justify="start" className="mb-half">
                    <span>Color:</span>
                    {/* show color products */}
                    <Flex justify="start" className="ml-half">
                      <button className="w-[16px] h-[16px] mx-[2px] cursor-pointer text-black rounded-full bg-black"></button>
                      <button className="w-[16px] h-[16px] mx-[2px] cursor-pointer text-black rounded-full bg-red"></button>
                      <button className="w-[16px] h-[16px] mx-[2px] cursor-pointer text-black rounded-full bg-bg"></button>
                      <button className="w-[16px] h-[16px] mx-[2px] cursor-pointer text-black rounded-full bg-main"></button>
                    </Flex>
                  </Flex>
                  {/* size */}
                  <Flex justify="start">
                    <span>Size:</span>
                    {/* size */}
                    <Flex justify="start" className="ml-half">
                      <button className="w-[44px] bg-bg hover:opacity-[0.7] py-[5px] mx-[2px] border-[1px] text-[0.8rem] font-medium">
                        S
                      </button>
                      <button className="w-[44px] bg-bg hover:opacity-[0.7] py-[5px] mx-[2px] border-[1px] text-[0.8rem] font-medium">
                        M
                      </button>{" "}
                      <button className="w-[44px] bg-bg hover:opacity-[0.7] py-[5px] mx-[2px] border-[1px] text-[0.8rem] font-medium">
                        L
                      </button>{" "}
                      <button className="w-[44px] bg-bg hover:opacity-[0.7] py-[5px] mx-[2px] border-[1px] text-[0.8rem] font-medium">
                        XL
                      </button>
                    </Flex>
                  </Flex>
                  {/* button action */}
                  <div className="flex items-center justify-between h-[32px] md:h-[40px] mt-full pt-full border-t-[0.7px]">
                    <div className="h-[34px] flex items-center jusify-center">
                      <button
                        className="button text-white bg-red h-full mr-full "
                        onClick={() => {
                          addProducts(product, id);
                        }}
                      >
                        Add cart
                      </button>
                      <Link
                        to="/cart/buy"
                        className=" button text-white bg-main h-full    hover:opacity-80 "
                      >
                        Buy now
                      </Link>
                    </div>
                  </div>
                  {/* date create , date update */}
                  <div className=" mt-full h-full">
                    <span className="text-gray-500 italic text-[0.9rem]">
                      {product.updatedAt}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full mt-full">
              <h4 className="text-black font-medium ">Warranty Policy:</h4>
              <p className="text-[0.9rem] text-sub font-[300]">
                Our warranty and return support policy complies with the rights
                of customers (Note: Contact us immediately if the product is
                defective within 24 hours of delivery, after During that time we
                will not be responsible for your order. No return warranty if it
                is your fault)
              </p>
            </div>
          </div>
          {/* describe products */}
          <div className="w-full h-full border-b-[0.7px] mt-full">
            <h3 className="text-[1.2rem] px-full xl:px-0">
              Product Description
            </h3>
            <p className="text-sub font-[300] block  my-half  w-full tracking-normal text-[1.1rem] leading-[1.4rem] px-full lg:pl-[40px] md:pl-half">
              {description}
            </p>
          </div>
          {/* feedback abouts products*/}
          <div className="w-fulll border-[1px] border-red min-h-[320px] mx-full xl:mx-0 mt-full  relative">
            <div>
              <span className="block py-half px-half bg-white text-[1.2rem]">
                Comments
              </span>
              {/* show comment */}
              <div className="w-full h-full ">{showComments()}</div>
              {/* write comment and button */}
              <div className="w-full h-[62px] absolute bottom-[42px] p-half mb-half">
                <input
                  className="border-b-[1px] w-full h-full px-half mb-half "
                  onChange={(e) => {
                    setValueComments(e.target.value);
                  }}
                  placeholder="...aaa"
                />
                <button className="w-[100px] h-full flex items-center justify-center bg-main text-white cursor-pointer ">
                  Comments
                </button>
              </div>
            </div>
          </div>
          {/* more product */}
          <div className="w-full mt-[60px] px-full md:px-0 ">
            <div className="text-center w-full pt-full md:mt-0">
              <h3 className="text-sub text-[1.4rem] mb-full font-medium ">
                Related Products:
                <span className="text-red-500 pl-half text-[1.5rem]">
                  {product.category.name}
                </span>
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[12px]">
              {relatedProducts.map((product, index) => {
                return <Product data={product} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <ModalPreviewImages hidden={open} images={imageSelect} />
      <OverLay
        hidden={open}
        onClick={() => {
          setOpen(!open);
        }}
      />
    </Fragment>
  );
};

export default ProductsReview;
