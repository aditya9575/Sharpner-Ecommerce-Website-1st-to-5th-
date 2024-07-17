import React, { createContext, useState } from 'react'

export const myContext = createContext();


const GlobalContextProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    const addToCart = (item) => {
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
          setCart((prevCart) =>
            prevCart.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
          );
        } else {
          setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
        }
        setTotalItems((prevTotalItems) => prevTotalItems + 1);
        setTotalAmount(
          (prevTotalAmount) => prevTotalAmount + parseFloat(item.price)
        );
      };
    
      const removeFromCart = (item) => {
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
          if (existingItem.quantity > 1) {
            setCart((prevCart) =>
              prevCart.map((cartItem) =>
                cartItem.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity - 1 }
                  : cartItem
              )
            );
          } else {
            setCart((prevCart) =>
              prevCart.filter((cartItem) => cartItem.id !== item.id)
            );
          }
        }
        setTotalItems((prevTotalItems) => Math.max(0, prevTotalItems - 1));
        setTotalAmount((prevTotalAmount) =>
          Math.max(0, prevTotalAmount - parseFloat(item.price))
        );
      };
    
      

  return (
    <myContext.Provider value={{
        cart,
        totalItems,
        totalAmount,
        addToCart,
        removeFromCart,
    }}>
       {props.children}
    </myContext.Provider>
  )
}

export default GlobalContextProvider