import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cart from './../../components/Cart/Cart'
import CartProductItem from './../../components/CartProductItem/CartProductItem'
import {actFetchCartItemsRequest,actDeleteCartItemRequest,actUpdateQuantityCartItemRequest} from './../../actions/index';


class CartPage extends Component {

    componentDidMount() {
        this.props.fetchAllCartItems();
    }

    
    render() {
        var {cart} = this.props;
        return (
            <div>
                <Cart cart={cart}>
                    {this.showCartItems(cart)}
                </Cart>
            </div>
        )
    }

    showCartItems = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = cart.map((cartItem,index) => {
                return (
                    <CartProductItem
                        key={index}
                        cartItem={cartItem}
                        onDelete = {this.onDelete}
                        handleUpdateQuantity = {this.handleUpdateQuantity}
                    />
                )
            })
        }else {
            result = (
                <h3 style={{textAlign: 'center', paddingBottom: '30px'}}>
                     Không có sản phẩm nào trong giỏ hàng của bạn
                </h3>

            )
        }
        return result;
    }

    onDelete = (id) => {
        this.props.onDeleteCartItem(id);
    }

    handleUpdateQuantity = (cartItem) => {
        this.props.onUpdateQuantityCartItem(cartItem);
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCartItems : () => {
            dispatch(actFetchCartItemsRequest())
        },
        onDeleteCartItem : (id) => {
            dispatch(actDeleteCartItemRequest(id))
        },
        onUpdateQuantityCartItem: (cartItem) => {
            dispatch(actUpdateQuantityCartItemRequest(cartItem));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartPage);