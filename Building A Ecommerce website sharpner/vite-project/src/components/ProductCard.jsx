import React, { useContext } from "react";
import { myContext } from "./GlobalContext";

const ProductCard = ({ product }) => {

const {addToCart} = useContext(myContext)

const handleAddToCart = (item) => {
  addToCart(item);
};

  return (
    <div>
      <h1>{product.title}</h1>
      <img
        src={product.imageUrl}
        alt={product.title}
        style={{ width: "100px", height: "100px" }}
      />
      <p>${product.price}</p>
      <button style={{ background: 'turquoise' }} onClick={() => handleAddToCart(product)}>Add To Cart</button>
      </div>
  );
};

export default ProductCard;
