import * as Types from './../constants/ActionTypes';

var initialState = [];

var findIndex = (cart, id) => {
    var result = -1;
    cart.forEach((cartItem,index) => {
        if(cartItem.id === id) {
            result = index;
        }
    });
    return result;
}

var findProductInCart = (cart, cartItem) => {
    var result = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if(cart[i].productDetail.id === cartItem.productDetail.id
                && cart[i].optionColor === cartItem.optionColor)
                {
                result = i;
                break;
            }
        };
    }
    return result;
}

const cart = (state = initialState, action) => {
    var index = -1;
    var {id,cartItem} = action;
    switch (action.type) {
        case Types.FETCH_CART_ITEMS:
            state = action.cartItems;
            return [...state];
        case Types.ADD_TO_CART:
            index = findProductInCart(state,cartItem);
            if (index !== -1) {
                state[index].quantity += action.cartItem.quantity;
            }else {
                state.push(cartItem);
            }
            return [...state];
        case Types.DELETE_CART_ITEM:
            index = findIndex(state, id);
            state.splice(index,1);
            return [...state];
        case Types.UPDATE_QUANTITY_CART_ITEM:
            index = findIndex(state,cartItem.id);
            state[index] = cartItem;
            return [...state];
        default: return[...state];
    }
}

export default cart;