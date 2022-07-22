import { Empty } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DicimentQuentity,
  IncimentQuentity,
} from "../../redux/action/AddItemInCart";

import "./cart.css";
import ClientAddress from "../AddressForm/ClientAddress";
export default function Cart() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.reducer);

  const incrimentItemQuentity = (id) => dispatch(IncimentQuentity(id));

  const decrimentItemQuentity = (id) => dispatch(DicimentQuentity(id));

  return (
    <div>
      {item.length >= 1 ? (
        item.map((item) => {
          return (
            <div>
              <div className="card_of_products">
                <img
                  alt="productImage"
                  width="200px"
                  height="200px"
                  src={item.image}
                  style={{ marginLeft: "30%" }}
                ></img>
                <h2 style={{ marginLeft: "40px" }}>
                  Price : {(item.price * item.quentity).toFixed(1)}
                </h2>
                <h2 className="qty">{item.quentity}</h2>
                <button
                  className="button-18"
                  onClick={() => decrimentItemQuentity(item.id)}
                >
                  -
                </button>

                <button
                  className="button-1"
                  onClick={() => incrimentItemQuentity(item.id)}
                >
                  +
                </button>

                <ClientAddress
                  price={item.price * item.quentity}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                />
              </div>
            </div>
          );
        })
      ) : (
        <Empty />
      )}
    </div>
  );
}
