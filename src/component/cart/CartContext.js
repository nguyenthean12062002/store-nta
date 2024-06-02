import React, { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { LoginContext } from "../login/LoginProvider";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cout, setCout] = useState(0);
  const [total, setTotal] = useState(0);
  const [order, setOrder] = useState(0);

  const { user } = useContext(LoginContext);

  useEffect(() => {
    const isResultTotal = cart.reduce((curentPrice, product) => {
      return curentPrice + product.price * product.amout;
    }, 0);
    setTotal(isResultTotal);
    setCout(cart.length);
  }, [cart]);

  const addProducts = (product, id) => {
    if (user.name === "" || user.auth === false) {
      toast.warning("Please login your account!");
    } else {
      const newItem = { ...product, amout: 1 };
      const cartItem = cart.find((item) => item.id === id);

      if (cartItem) {
        const newCart = cart.map((item) => {
          if (item.id === id) {
            return { ...item, amout: cartItem.amout + 1 };
          }
          return item;
        });
        const idToast = toast.warning("Products already in cart");
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
    }
  };

  const removeProduct = (id) => {
    const newArr = cart.filter((item) => item.id !== id);
    setCart(newArr);
  };

  const removeAllProducts = () => {
    setCart([]);
  };

  const increaseAmout = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amout: item.amout + 1 };
      }
      return item;
    });
    setCart(newCart);
  };

  const decreaseAmout = (id) => {
    const product = cart.find((item) => item.id === id);
    if (product.amout === 1) {
      removeProduct(id);
    } else {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amout: item.amout - 1 };
        }
        return item;
      });
      setCart(newCart);
    }
  };
  const orderSucess = () => {
    setOrder(() => {
      return order + 1;
    });
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        cout,
        total,
        order,
        orderSucess,
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
