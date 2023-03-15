import { ADD_CART, CHANGE_QUANLITY, SEND, EDIT_PRODUCT, DELETE_PRODUCT, SET_ROLE, LOG_OUT } from "../type/type";

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

export const setRole = (user) => ({
  type: SET_ROLE,
  user
})

export const logOut = () => ({
  type: LOG_OUT
})