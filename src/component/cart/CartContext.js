import React, { createContext, useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cout, setCout] = useState(0);
  const [totalCart, setTotalCart] = useState(0);
  // add produt in cart
  useEffect(() => {
    let isCout = 0;
    cart.map((item) => {
      if (item) {
        isCout = cart.reduce((current, items) => {
          return current + items.amout;
        }, 0);
      }
    });
    setCout(isCout);

    // total all cart
    const totalCart = cart.reduce((current, item) => {
      if (item.amout) {
        return current + item.price * item.amout;
      } else {
        return current + item.price;
      }
    }, 0);

    setTotalCart(totalCart);
  }, [cart]);
  const addProducts = (product, id) => {
    const newItem = { ...product, amout: 1 };
    // tìm kiếm xem id của item đó đã có trong giỏ hàng chưa có thì return cartItem =true
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // check the item areadly in cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amout: cartItem.amout + 1 };
        } else {
          return item;
        }
      });
      const idToast = toast.warning("Products already to cart");
      setTimeout(() => {
        toast.dismiss(idToast);
      }, 1200);
      setCart(newCart);
    } else {
      const idToast = toast.success("Added to cart");
      setTimeout(() => {
        toast.dismiss(idToast);
      }, 1200);
      setCart([...cart, newItem]);
    }
  };
  const removeProduct = (id) => {
    const newArr = cart.filter((item) => {
      return item.id !== id;
    });

    setCart(newArr);
  };
  const removeAllProducts = () => {
    setCart([]);
  };
  const increaseAmout = (products, id) => {
    setCout(products.amout++);
  };
  const decreaseAmout = (products, id) => {
    if (cout === 1) {
      removeProduct(id);
    } else {
      setCout(products.amout--);
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        cout,
        totalCart,
        addProducts,
        removeProduct,
        removeAllProducts,
        increaseAmout,
        decreaseAmout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
