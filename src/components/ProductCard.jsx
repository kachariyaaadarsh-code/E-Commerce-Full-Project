import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

  return (

    <div style={{
      border: "1px solid gray",
      padding: "10px",
      margin: "10px",
      width: "200px"
    }}>

      <img src={product.image} width="100%" height="150" />

      <h4>{product.title}</h4>

      <p>₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

    </div>

  );

}

export default ProductCard;
