import * as Types from '../constants/ActionTypes'

var initialState = {};

const productDetail = (state=initialState, action) => {
    switch(action.type) {
        case Types.GET_PRODUCT_DETAIL:
            return action.productDetail;
        default:
            return state;
    }
}

export default productDetail;