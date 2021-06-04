import actions from './action.type';

export const getAllProduct = () => ({
  type: actions.GET_ALL_PRODUCT
})

export const getAllProductSuccess = (payload) => ({
  type: actions.GET_ALL_PRODUCT_SUCCESS,
  payload
})
export const addNewProduct = (payload) => ({
  type: actions.ADD_PRODUCT,
  payload
})
export const removeProduct = (payload) => ({
  type: actions.REMOVE_PRODUCT,
  payload
})
export const editProduct = (payload) => ({
  type: actions.EDIT_PRODUCT,
  payload
})
 
export const paginationProduct = (payload) => ({
  type: actions.PAGINATION_DATA,
  payload
})
export const showModal = () => ({
  type: actions.SHOW_MODAL,

})
export const hideModal = () => ({
  type: actions.HIDE_MODAL,

})

export const filterCategory = (payload)=>({
  type: actions.FILTER_CATEGORY,
  payload,
})

export const searchProductName = (payload)=>({
  type: actions.SEARCH_NAME_PRODUCT,
  payload,
})
export const filterPrice = (payload)=>({
  type: actions.FILTER_PRICE_PRODUCT,
  payload,
})

