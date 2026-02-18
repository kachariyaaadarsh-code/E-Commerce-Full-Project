import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (

    <div style={{
      background: "black",
      padding: "15px"
    }}>

      <Link to="/" style={{ color: "white", marginRight: "20px" }}>
        Home
      </Link>

      <Link to="/cart" style={{ color: "white" }}>
        Cart
      </Link>

    </div>

  );

}

export default Navbar;
