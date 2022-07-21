import { Empty } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DicimentQuentity,
  IncimentQuentity,
} from "../../redux/action/AddItemInCart";
import Razor from "../../Payment/Razor";
import Stripe from "../../Payment/Stripe";
import "./cart.css";
export default function Cart() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.reducer);
  console.log(item);
  const incrimentItemQuentity = (id) => {
    dispatch(IncimentQuentity(id));
  };
  const decrimentItemQuentity = (id) => {
    dispatch(DicimentQuentity(id));
  };

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
                ></img>
                <h2>price : {item.price * item.quentity}</h2>

                <button
                  className="button-18"
                  onClick={() => incrimentItemQuentity(item.id)}
                >
                  +
                </button>
                <h2 className="qty">{item.quentity}</h2>
                <button
                  className="button-18"
                  onClick={() => decrimentItemQuentity(item.id)}
                >
                  -
                </button>
                <Razor price={item.price * item.quentity} id={item.id}></Razor>
                {/* <Pay price={item.price * item.quentity}></Pay> */}
                <Stripe
                  price={item.price * item.quentity}
                  id={item.id}
                ></Stripe>
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
