import React from "react";
import App from "./App";
export default function CompanyNameBar({ insideCart }) {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column-wrap",
        justifyContent: "space-around",
      }}
    >
      <h1>EKart</h1>
      <div className="cart-link">
        <h1>Go TO Cart ({insideCart.length})</h1>
      </div>
    </div>
  );
}
