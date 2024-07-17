import React from "react";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Cart from "./components/Cart";
import GlobalContextProvider from "./components/GlobalContext";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Store from "./components/Store";
import About from "./components/About";

const App = () => {
  return (
    <GlobalContextProvider>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </GlobalContextProvider>
  );
};

export default App;
