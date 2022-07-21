import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { DeleteItemAfterPayment } from "../redux/action/AddItemInCart";

function Stripe({ price, id }) {
  const dispatch = useDispatch();
  const handleToken = (token) => {
    if (token) {
      dispatch(DeleteItemAfterPayment(id));
    }
  };
  return (
    <StripeCheckout
      stripeKey="pk_test_51Ko4bKSBftn7azzBqpUT5ZaeS5odtaKlWNvspX6Sz6ZqOy67dAxm7gwd4NSlZdozMoUqZnHICJssoxAM6Ywue7JX00oK6HDKje"
      token={handleToken}
      amount={price * 100}
      name="rahul"
    />
  );
}
export default Stripe;
