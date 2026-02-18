import React, { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  // Add to Cart
  const addToCart = (product) => {

    setCart([...cart, product]);

  };

  // Remove from Cart
  const removeFromCart = (index) => {

    const newCart = cart.filter((item, i) => i !== index);

    setCart(newCart);

  };

  // Total Price
  const totalPrice = cart.reduce(

    (total, item) => total + item.price,

    0

  );

  return (

    <CartContext.Provider

      value={{

        cart,
        addToCart,
        removeFromCart,
        totalPrice

      }}

    >

      {children}

    </CartContext.Provider>

  );

}

export default CartProvider;
