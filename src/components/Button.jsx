import React from "react";

function Button({ text, color, onClick }) {

  return (

    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: "white",
        padding: "10px",
        border: "none"
      }}
    >

      {text}

    </button>

  );

}

export default Button;
