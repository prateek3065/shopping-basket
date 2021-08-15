import React, { useEffect, useState } from "react";
import "./App.css";
const { v4: uuidv4 } = require("uuid");
export default function Items() {
  const [items, setItems] = useState(() => []);
  const [pageNo, setPageNo] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
      });
  }, []);
  /*
  items.map((element) => {
    console.log(element);
  });
  */
  function handleItemClick(id) {
    console.log(id);
  }
  return (
    <div
      style={{
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
