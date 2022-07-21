import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../productList/Product";
import "./Header.css";
function Header() {
  const item = useSelector((state) => state.reducer);

  return (
    <div>
      <div className="hedaerConatiner">
        <h2>header</h2>
        <h3>
          {" "}
          <Link className="link_oF_Cart" to="/cart">
            Cart {item.length}{" "}
          </Link>
        </h3>
        <Product></Product>
      </div>
    </div>
  );
}

export default Header;
