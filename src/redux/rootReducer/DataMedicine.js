import { ADD_CART, CHANGE_QUANLITY } from "../type/type";

const initialState = {
  Cart: [
    
  ],
};

export const DataMedicine = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART: { 
      let newCart = [...state.Cart];
      let index = newCart.findIndex((item) => {
        return item.id === action.addData.id;
      });
      let newItem = { ...action.addData, sl: 1 };
      if (index === -1) {
        newCart.push(newItem);
      } else {
        newCart[index].sl += 1;
      }
      state.Cart = newCart;
      return { ...state };
    }
    case CHANGE_QUANLITY: {
      let newCart = [...state.Cart];
      let index = newCart.findIndex((item) => {
        return item.id === action.id;
      });
      if (newCart[index].sl === 1 && action.value === -1) {
        newCart.splice(index, 1);
      } else {
        newCart[index].sl += action.value;
      }
      state.Cart = newCart;
      return { ...state };
    }
    default:
      return state;
  }
};
