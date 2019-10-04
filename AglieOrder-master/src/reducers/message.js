import * as types from './../constants/ActionType';
import * as mess from './../constants/Message';
var initialState = mess.MSG_WELCOM;

var message = (state = initialState, action) => {
    switch (action.type) { 
        case types.CHANGE_MASSAGE:
            return action.message;
        default:
            return state;
    }
}
export default message;