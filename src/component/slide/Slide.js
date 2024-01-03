import React, { useContext, useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "./slide.scss";
//product context
import { ProductsContext } from "../products/ProductsContext";
const Slides = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 450) {
      setIsMobile(true);
    }
  }, []);
  const { products } = useContext(ProductsContext);
  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "contain",
    width: "100%",
    height: isMobile ? "260px" : "420px",
  };
  const slideImages = [
    {
      url: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "1",
    },
    {
      url: "https://images.unsplash.com/photo-1587046729199-3c96d71037f4?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: " 2",
    },
    {
      url: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "3",
    },
  ];
  return (
    <div className="slide-container z-[10]">
      <Slide autoplay={true}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              {/* <span style={spanStyle}>{slideImage.caption}</span> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slides;
