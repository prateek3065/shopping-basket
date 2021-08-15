import React, { useEffect } from "react";
import "./App.css";
const { v4: uuidv4 } = require("uuid");
export default function Items({ setInsideCart, items, setItems, insideCart }) {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
      });
  }, []);

  function handleItemClick(id) {
    var newInsideCart = [];
    var frequency = 0;
    for (let i = 0; i < insideCart.length; i++) {
      if (insideCart[i].id !== id) newInsideCart.push(insideCart[i]);
      else frequency = insideCart[i].frequency;
    }

    newInsideCart.push({ id: id, frequency: frequency + 1 });
    setInsideCart(newInsideCart);
  }
  return (
    <div
      style={{
        width: "70%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      {items.map((element) => {
        return (
          <div
            className="item"
            onClick={() => {
              handleItemClick(element.id);
            }}
            key={uuidv4()}
            style={{
              width: "300px",
              padding: "8px",
              margin: "1rem",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <div>
              <img style={{ width: "100%" }} src={element.image} alt="" />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>{element.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
