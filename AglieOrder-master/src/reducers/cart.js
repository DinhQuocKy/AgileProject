import * as types from '../constants/ActionType';
import { findIndex, remove } from 'lodash';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

var cart = (state = initialState, action) => {
    var { product, quantity } = action;
    var indexInState = action.product ? findIndex(state, function (o) { return o.product.id === action.product.id; }) : null;
    switch (action.type) {
        case types.ADD_TO_CART:
            if (indexInState === -1) {
                state.push({
                    product,
                    quantity
                });
            }
            else {
                state[indexInState].quantity += 1;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.SUBTRACT_TO_CART:
            if(state[indexInState].quantity>0){
                state[indexInState].quantity -= 1;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT_IN_CART:
            state = remove(state, (item) => (item.product.id === action.product.id ? false : true));
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}
export default cart;