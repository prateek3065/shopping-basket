import React from "react";
import { Form } from "react-bootstrap";
export default function ShowItemsInBasket({ insideCart, items }) {
  console.log(insideCart);

  return (
    <div style={{ height: "80vh", marginTop: "50px" }}>
      {insideCart.map((obj) => {
        return (
          <>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <img style={{ width: "100px" }} src={items[obj.id - 1].image} />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "20px",
                }}
              >
                X {obj.frequency}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
