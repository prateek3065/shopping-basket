import React, { useEffect, useState } from "react";

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
  items.map((element) => {
    console.log(element);
  });
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
          <>
            <div>
              <div
                style={{
                  width: "300px",
                  margin: "1rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img style={{ width: "100%" }} src={element.image} alt="" />
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
            </div>
          </>
        );
      })}
    </div>
  );
}
