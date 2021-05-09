import React, { Component} from 'react';
import {connect} from 'react-redux'
import ProductDetailImage from './../../components/ProductDetailImage/ProductDetailImage';
import ProductDetailContent from './../../components/ProductDetailContent/ProductDetailContent';
import {
    actGetProductDetailRequest,
    actAddToCartRequest,
    actFetchCartItemsRequest,
    actUpdateQuantityCartItemRequest
} from './../../actions/index';


class ProductDetailPage extends Component {

    componentDidMount() {
        var {match} = this.props;
        if (match){
            var id = match.params.id;
            this.props.onGetProductDetail(id);
            this.props.fetchAllCartItems();
        }
    }

    onAddToCart = (cartItem) => {
        var result = -1;
        if (this.props.cart.length > 0) {
            for (var i = 0; i < this.props.cart.length; i++) {
                if(this.props.cart[i].productDetail.id === cartItem.productDetail.id
                    && this.props.cart[i].optionColor === cartItem.optionColor) {
                    result = i;
                    var quantity = cartItem.quantity;
                    cartItem = this.props.cart[i];
                    cartItem.quantity += quantity;
                    break;
                }
            };
            if (result === -1) {
                this.props.onAddToCartProduct(cartItem);
            }else {
                this.props.onUpdateQuantityCartItem(cartItem);
            }
        }else {
            this.props.onAddToCartProduct(cartItem);
        }        
    }

    render() {
        var {productDetail} = this.props;
        return (
            <div className="product__main__wrapper">
                {this.showProductDetail(productDetail)}
            </div>
        )
    }

    showProductDetail = (productDetail) => {
        var result = null;
        if (Object.keys(productDetail).length !== 0) {
            result = (
                <div className="grid-row">
                    <div className="grid-col10-10 grid-col10-sm-10 grid-col10-md-10 grid-col10-lg-10 grid-col10-lg-10 grid-col10-xl-4">
                        <ProductDetailImage
                            productDetail = {productDetail}
                        />
                    </div>
                    <div className="grid-col grid-col10-xl-6">
                        <ProductDetailContent
                            productDetail={productDetail}
                            onAddToCart = {this.onAddToCart}
                        />
                    </div>
                </div>
            )
        }
        return result
    }
}
const mapStateToProps = (state) => {
    return {
        productDetail: state.productDetail,
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        onGetProductDetail: (id) => {
            dispatch(actGetProductDetailRequest(id));
        },
        onAddToCartProduct: (cartItem) => {
            dispatch(actAddToCartRequest(cartItem));
        },
        fetchAllCartItems : () => {
            dispatch(actFetchCartItemsRequest())
        },
        onUpdateQuantityCartItem: (cartItem) => {
            dispatch(actUpdateQuantityCartItemRequest(cartItem));
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetailPage);