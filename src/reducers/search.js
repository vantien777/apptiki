import * as Types from './../constants/ActionTypes';

var initialState = [];

const search = (state = initialState, action) => {
    
    switch (action.type) {
        case Types.SEARCH:
            state = action.products;
            var result = state.filter((product) => {
                var productNameConvert = product.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                var keywordNameConvert = action.keyword.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                return ((product.name.toLowerCase().indexOf(action.keyword) !== -1)||(productNameConvert.indexOf(keywordNameConvert)!== -1))
            })
            return state = result;
        case Types.FETCH_PRODUCTS_IN_SEARCH:
            return [...state];
        default : return[...state];
    }
}

export default search;