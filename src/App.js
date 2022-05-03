import React, { useState } from "react";
import Sidebar from "./Component/Sidebar/Sidebar";
import State from "./data.json";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Products from "./Component/Products/Products";
import "./App.css";
function App() {
  const [ele, setEle] = useState("");
  const [products, setProducts] = useState(State.products);

  const handleUpdateProducts = (prds) => {
    setProducts([...prds]);
  };

  return (
    <BrowserRouter>
      <Sidebar ele={ele} setEle={setEle} />
      <Navbar ele={ele} />
      <Products
        products={products}
        handleUpdateProducts={handleUpdateProducts}
      />
    </BrowserRouter>
  );
}

export default App;
