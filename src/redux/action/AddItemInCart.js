export const ADD_ITEM_IN_CART = "ADD_ITEM_IN_CART";
export const INCRIMENT_ITEM = "INCRIMENT_ITEM";
export const DECRIMENT_ITEM = "DECRIMENT_ITEM";
export const DELETE_AFTER_PAYMENT = "DELETE_AFTER_PAYMENT";
export const AddItemInCart = (item) => {
  return {
    type: ADD_ITEM_IN_CART,
    payload: item,
  };
};
export const IncimentQuentity = (id) => {
  return {
    type: INCRIMENT_ITEM,
    payload: id,
  };
};

export const DicimentQuentity = (id) => {
  return {
    type: DECRIMENT_ITEM,
    payload: id,
  };
};
export const DeleteItemAfterPayment = (id) => {
  return {
    type: DELETE_AFTER_PAYMENT,
    payload: id,
  };
};
