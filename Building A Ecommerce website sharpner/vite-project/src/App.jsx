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
      <div style={{ backgroundColor: "gray", height: "190px" }}>
        <h1 style={{ textAlign: "center", color: "white", fontSize: "100px" }}>
          The Generics
        </h1>

      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <div style={{background:"#56CCF2", height:"150px", width:"100%"}}>
         <h1 style={{ textAlign: "center", color: "white", fontSize: "50px", paddingRight:"800px", paddingTop:"20px"}}>
          The Generics
         </h1>
      </div>
    </GlobalContextProvider>
  );
};

export default App;
