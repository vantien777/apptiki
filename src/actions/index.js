import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data))
        });
    }
}

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    };
}

export const actGetProductDetailRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actGetProductDetail(res.data));
        });
    }
}

export const actGetProductDetail = (productDetail) => {
    return {
        type: Types.GET_PRODUCT_DETAIL,
        productDetail
    }
}

export const actFetchCartItemsRequest = () => {
    return (dispatch) => {
        return callApi('cart', 'GET', null).then(res => {
            dispatch(actFetchCartItems(res.data))
        });
    }
}

export const actFetchCartItems = (cartItems) => {
    return {
        type: Types.FETCH_CART_ITEMS,
        cartItems
    };
}

export const actAddToCartRequest = (cartItem) => {
    return (dispatch) => {
        return callApi('cart', 'POST', cartItem).then((res) => {
            dispatch(actAddToCart(res.data))
        })
    }
}

export const actAddToCart = (cartItem) => {
    return {
        type: Types.ADD_TO_CART,
        cartItem
    }
}

export const actDeleteCartItemRequest = (id) => {
    return (dispatch) => {
        return callApi(`cart/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteCartItem(id))
        });
    }
}

export const actDeleteCartItem = (id) => {
    return {
        type: Types.DELETE_CART_ITEM,
        id
    }
}

export const actUpdateQuantityCartItemRequest = (cartItem) => {
    return (dispatch) => {
        return callApi(`cart/${cartItem.id}`, 'PUT', cartItem).then(res => {
            dispatch(actUpdateQuantityCartItem(res.data))
        });
    }
}

export const actUpdateQuantityCartItem = (cartItem) => {
    return {
        type: Types.UPDATE_QUANTITY_CART_ITEM,
        cartItem
    }
}

export const actSearchProductRequest = (keyword) => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actSearch(res.data, keyword))
            dispatch(actSearchKeyword(keyword))
        });
    }
}

export const actSearch = (products,keyword) => {
    return {
        type: Types.SEARCH,
        products,
        keyword
    }
}

export const actSearchKeyword = (keyword) => {
    return {
        type: Types.SEARCH_KEYWORD,
        keyword
    }
}

export const actFetchProductsInSearch = () => {
    return {
        type: Types.FETCH_PRODUCTS_IN_SEARCH
    }
}

export const actFilterInSearchRequest = (keyword,productType,rating,fastPrice,valueInputPrice,colors) => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFilter(res.data,keyword,productType,rating,fastPrice,valueInputPrice,colors))
        });
    }
}

export const actFilter = (products,keyword,productType,rating,fastPrice,valueInputPrice,colors) => {
    return {
        type: Types.FILTER_IN_SEARCH,
        products,
        keyword,
        productType,
        rating,
        fastPrice,
        valueInputPrice,
        colors
    }
}


//Add product
export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callApi('products', 'POST', product)
    }
}