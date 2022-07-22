import { Empty } from "antd";
import axios from "axios";
import "./Product.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddItemInCart } from "../../redux/action/AddItemInCart";
import { debounce } from "lodash";
function Product() {
  const [product, setProduct] = useState([]);
  const [item, setItem] = useState([]);
  const dispatch = useDispatch();
  const url = "https://fakestoreapi.com/products";
  const fetchProductApi = debounce(async (singleCategory) => {
    const res = await axios.get(url);
    const data = res.data.filter((i) => i.category == singleCategory);
    setProduct(data);
    singleCategory === "all"
      ? (setProduct(res.data), setItem(res.data))
      : setProduct(data),
      setItem(res.data);
  }, 0.5);

  useEffect(() => {
    fetchProductApi("all");
  }, []);

  const addItemCartHAndler = (item) => dispatch(AddItemInCart(item));

  let Category = [];

  item.map((i) => {
    Category.push(i.category);
  });
  const filterForCategory = (category) => {
    console.log(category);
    fetchProductApi(category);
  };

  return (
    <div>
      <div style={{ marginLeft: "33%" }} className="CategoryBtn">
        {item.length >= 1 ? (
          <button
            className="button-23"
            onClick={() => filterForCategory("all")}
          >
            All
          </button>
        ) : null}

        {Category.length >= 1
          ? [...new Set(Category)].map((i) => {
              return (
                <button
                  className="button-23"
                  key={i.id}
                  onClick={() => filterForCategory(i)}
                >
                  {i}
                </button>
              );
            })
          : null}
      </div>
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
                    style={{ marginBottom: "10px" }}
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
