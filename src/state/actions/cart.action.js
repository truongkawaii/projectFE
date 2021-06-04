import Actions from './action.type';

export const getCart = () => ({
    type: Actions.GET_CART
})
export const addCart = (payload) => ({
    type: Actions.ADD_CART,
    payload,
})
export const removeCart = (payload) => ({
    type: Actions.REMOVE_CART,
    payload,
})
export const updateCartItem = (payload) => ({
    type: Actions.UPDATE_CART,
    payload,
})
export const clearAllCart = ( ) => ({
    type: Actions.CLEAR_CART,
})

