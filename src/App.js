import CompanyNameBar from "./CompanyNameBar.js";
import Items from "./Items.js";
import { useState } from "react";
import ShowItemsInBasket from "./ShowItemsInBasket.js";
function App() {
  const [items, setItems] = useState(() => []); //for storing API data
  const [insideCart, setInsideCart] = useState(() => {
    return [];
  });

  return (
    <>
      <CompanyNameBar insideCart={insideCart} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <Items
          setInsideCart={setInsideCart}
          items={items}
          setItems={setItems}
          insideCart={insideCart}
        />
        <div
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            overflow: "scroll",
          }}
        >
          <h1>Your Basket</h1>
          <ShowItemsInBasket insideCart={insideCart} items={items} />
        </div>
      </div>
    </>
  );
}

export default App;
// <ShowItemsInBasket insideCart={insideCart} items={items} />
