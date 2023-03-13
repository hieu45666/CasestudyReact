import { ADD_CART, CHANGE_QUANLITY, SEND, EDIT_PRODUCT, DELETE_PRODUCT } from "../type/type";

export const addToCart = (addData) => ({
  type: ADD_CART,
  addData
})
export const ChangeQuanlity = (id,value) => ({
  type: CHANGE_QUANLITY,
  id,
  value
})
export const send = (product) => ({
  type: SEND,
  product
})
export const editProduct = (product) => ({
  type: EDIT_PRODUCT,
  product
})

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: {id}
})
