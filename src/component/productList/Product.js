import { Empty } from "antd";
import axios from "axios";
import "./Product.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddItemInCart } from "../../redux/action/AddItemInCart";

function Product() {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const url = "https://fakestoreapi.com/products";
  const fetchProductApi = async () => {
    const res = await axios.get(url);
    setProduct(res.data);
  };

  useEffect(() => {
    fetchProductApi();
  }, []);

  const addItemCartHAndler = (item) => dispatch(AddItemInCart(item));

  return (
    <div>
      <div>
        {product.length >= 1 ? (
          product.map((item) => {
            const { image, id, price } = item;
            return (
              <div key={id}>
                <div className="card_of_products">
                  <img
                    alt="productImage"
                    width="200px"
                    height="200px"
                    src={image}
                    style={{ marginLeft: "24%", paddingTop: "2%" }}
                  ></img>
                  <h2>Price : {price}</h2>
                  <button
                    onClick={() => addItemCartHAndler(item)}
                    className="button-88"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <Empty></Empty>
        )}
      </div>
    </div>
  );
}

export default Product;
