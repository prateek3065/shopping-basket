import React from "react";
export default function ShowItemsInBasket({
  insideCart,
  items,
  setInsideCart,
}) {
  function deleteItem(id) {
    var newInsideCart = [];
    for (let i = 0; i < insideCart.length; i++) {
      if (insideCart[i].id !== id) newInsideCart.push(insideCart[i]);
    }
    setInsideCart(newInsideCart);
  }

  function addOneItem(id, add) {
    console.log(`id= ${id}`);
    var newInsideCart = [];
    var frequency = 0;
    for (let i = 0; i < insideCart.length; i++) {
      if (insideCart[i].id !== id) newInsideCart.push(insideCart[i]);
      else frequency = insideCart[i].frequency;
    }
    if (frequency > 1 || add === 1)
      newInsideCart.push({ id: id, frequency: frequency + add });

    console.log(newInsideCart);
    setInsideCart(newInsideCart);
  }

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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "20px",
                }}
              >
                <button
                  onClick={() => addOneItem(obj.id, -1)}
                  style={{ borderRadius: "20px", backgroundColor: "#FFCCCB" }}
                >
                  -
                </button>
                <button
                  onClick={() => {
                    addOneItem(obj.id, 1);
                  }}
                  style={{ borderRadius: "20px", backgroundColor: "#FFCCCB" }}
                >
                  +
                </button>
                <button
                  onClick={() => deleteItem(obj.id)}
                  style={{ borderRadius: "20px", backgroundColor: "#FFCCCB" }}
                >
                  Delete
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
