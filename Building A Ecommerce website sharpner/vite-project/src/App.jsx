import React from "react";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import DisplayProducts from "./components/DisplayProducts";
import Cart from "./components/Cart";
import GlobalContextProvider from "./components/GlobalContext";

const App = () => {
  return (
    <GlobalContextProvider>
      <NavbarComponent />
      <DisplayProducts />
      <Cart />
    </GlobalContextProvider>
  );
};

export default App;
