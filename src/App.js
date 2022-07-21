import React from "react";

import Cart from "./component/cart/Cart";
import Header from "./component/Header/Header";
import Product from "./component/productList/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
