import * as types from './../constants/ActionType'

export const actAddToCart = (product,quantity) =>{
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}
export const actSubtractToCart = (product,quantity) =>{
    return {
        type: types.SUBTRACT_TO_CART,
        product,
        quantity
    }
}
export const actChangeMessage = (message) =>{
    return {
        type: types.CHANGE_MASSAGE,
        message
    }
}
export const actRemoveProductInCart = (product) =>{
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        product
    }
}