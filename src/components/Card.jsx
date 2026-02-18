import React from "react";

function Card({ children }) {

  return (

    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        borderRadius: "10px",
        width: "200px",
        boxShadow: "0px 0px 10px gray"
      }}
    >

      {children}

    </div>

  );

}

export default Card;
