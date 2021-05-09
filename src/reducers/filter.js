import * as Types from './../constants/ActionTypes';

var initialState = [];

const filter = (state = initialState, action) => {
    var {products,keyword,productType,rating,fastPrice,valueInputPrice,colors} = action;
    switch (action.type) {
        case Types.FILTER_IN_SEARCH:
            var result = products.filter((product) => {
                var productNameConvert = product.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                var keywordNameConvert = keyword.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                return ((product.name.toLowerCase().indexOf(keyword) !== -1)||(productNameConvert.indexOf(keywordNameConvert)!== -1))
            });

            if(productType !== '') {
                result = result.filter((product) => {
                    var productNameConvert = product.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    var keywordNameConvert = productType.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");    
                    return ((product.name.toLowerCase().indexOf(productType) !== -1)||(productNameConvert.indexOf(keywordNameConvert)!== -1))
                })
            }

            if(rating === 5) {
                result = result.filter((product) => {return product.rating === 5});
            }
            if(rating === 4) {
                result = result.filter((product) => {return product.rating >= 4})
            }
            if(rating === 3) {
                result = result.filter((product) => {return product.rating >= 3})
            }
            if(fastPrice === 1) {
                result = result.filter((product) => {return product.price.real < 250000})
            }
            if(fastPrice === 2) {
                result = result.filter((product) => {return ((product.price.real > 250000) && (product.price.real < 450000))})
            }
            if(fastPrice === 3) {
                result = result.filter((product) => {return ((product.price.real > 450000) && (product.price.real < 950000))})
            }
            if(fastPrice === 4) {
                result = result.filter((product) => {return product.price.real > 950000})
                return result;
            }
            if(!((valueInputPrice[0] === 0 && valueInputPrice[1] === 0) || (valueInputPrice.length === 0))) {
                result = result.filter((product) => {return ((product.price.real > valueInputPrice[0]) && (product.price.real < valueInputPrice[1]))})
            }
            if (colors !== []) {
                if (colors[0] === true) {
                    result = result.filter((product) => {return product.colors.black === 1})
                }
                if (colors[1] === true) {
                    result = result.filter((product) => {return product.colors.white === 1})
                }
                if (colors[2] === true) {
                    result = result.filter((product) => {return product.colors.red === 1})
                }
                if (colors[3] === true) {
                    result = result.filter((product) => {return product.colors.blue === 1})
                }
                if (colors[4] === true) {
                    result = result.filter((product) => {return product.colors.purple === 1})
                }
            }
            state = result;
            return [...state];
        
        default : return[...state];
    }
}

export default filter;