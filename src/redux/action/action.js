import { ADD_CART, CHANGE_QUANLITY } from "../type/type";

export const addToCart = (addData) => ({
  type: ADD_CART,
  addData
})
export const ChangeQuanlity = (id,value) => ({
  type: CHANGE_QUANLITY,
  id,
  value
})

