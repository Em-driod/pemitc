import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.title === item.title);

    if (itemIndex > -1) {
      const newCart = [...cart];
      newCart[itemIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
