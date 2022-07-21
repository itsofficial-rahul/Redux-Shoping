import {
  ADD_ITEM_IN_CART,
  DECRIMENT_ITEM,
  DELETE_AFTER_PAYMENT,
  INCRIMENT_ITEM,
} from "../action/AddItemInCart";

const cart = [];
export const reducer = (state = cart, { type, payload }) => {
  switch (type) {
    case ADD_ITEM_IN_CART: // Add Item in cart
      const exit = state.find((i) => i.id === payload.id);
      if (exit) return state;
      return state.concat({ ...payload, quentity: 1 });
    case INCRIMENT_ITEM: //  Incriment Item Quentity
      return state.map((i) => {
        if (i.id === payload) {
          return { ...i, quentity: i.quentity + 1 };
        }
        return { ...i };
      });
    case DECRIMENT_ITEM: // Decriment Item Quentity
      const exit2 = state.find((x) => x.id === payload);
      if (exit2.quentity === 1) {
        return state.filter((i) => i.id !== payload);
      } else {
        return state.map((i) => {
          return i.id === payload ? { ...i, quentity: i.quentity - 1 } : i;
        });
      }
    case DELETE_AFTER_PAYMENT:
      return state.filter((i) => {
        return i.id !== payload;
      });
    default:
      return state;
  }
};
