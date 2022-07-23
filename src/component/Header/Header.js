import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../productList/Product";
import { Badge } from "antd";
import "./Header.css";
import Slider from "../slider/Slider";
function Header() {
  const item = useSelector((state) => state.reducer);

  return (
    <div>
      <div className="hedaerConatiner">
        <div className="headerContainet2">
          <h2 className="hederComponent">Home</h2>
          <h2 className="hederComponent">Aboute US</h2>
          <h2 className="hederComponent">Contact Us</h2>
          <h2 className="hederComponent">Order History</h2>
          <h2 className="hederComponent">Product</h2>

          <h2 className="hederComponent">
            {" "}
            <Badge
              color="blue"
              style={{ marginTop: "8px" }}
              offset={[10, 10]}
              count={item.length}
            >
              <Link className="link_oF_Cart" to="/cart">
                Cart
              </Link>
            </Badge>
          </h2>
        </div>
        <Slider></Slider>
        <Product></Product>
      </div>
    </div>
  );
}

export default Header;
