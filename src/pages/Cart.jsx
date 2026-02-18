import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {

  const { cart, removeFromCart, totalPrice } = useContext(CartContext);

  return (

    <div>

      <h1>Cart Items</h1>

      {

        cart.length === 0 ?

        (

          <p>Cart is empty</p>

        )

        :

        (

          cart.map((item, index) => (

            <div key={index}>

              <h4>{item.title}</h4>

              <p>₹{item.price}</p>

              <button

                onClick={() => removeFromCart(index)}

              >

                Remove

              </button>

            </div>

          ))

        )

      }

      <hr />

      <h2>Total Price: ₹{totalPrice}</h2>

    </div>

  );

}

export default Cart;
