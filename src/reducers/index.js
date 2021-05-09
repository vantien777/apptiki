import  {combineReducers} from 'redux';
import products from './products';
import productDetail from './productDetail';
import cart from './cart';
import search from './search';
import searchKeyword from './searchKeyword';
import filter from './filter';


const appReducers = combineReducers({
    products,
    productDetail,
    cart,
    search,
    searchKeyword,
    filter
});

export default appReducers;