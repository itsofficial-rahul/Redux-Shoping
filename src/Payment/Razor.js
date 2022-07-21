import React from "react";
import { useDispatch } from "react-redux";
import "./Razor.css";
import { DeleteItemAfterPayment } from "../redux/action/AddItemInCart";
function Razor({ price, id }) {
  const dispatch = useDispatch();
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (price) => {
    const res = await loadScript("http://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("offfline");
      return;
    }
    const options = {
      key: "rzp_test_92xnvmwoK4k2CT",
      currency: "INR",
      amount: price * 100,
      name: "rahul",
      handler: function (response) {
        if (response) {
          dispatch(DeleteItemAfterPayment(id));
        }
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <div>
      <button className="button-21" onClick={() => displayRazorpay(price)}>
        Pay with RazorPay
      </button>
    </div>
  );
}

export default Razor;
