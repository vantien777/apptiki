import React, { Component } from 'react';
import {connect} from 'react-redux';

class CartSuccessPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cart: this.props.cart
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            cart: nextProps.cart
        })
    }

    render() {
        var cart = this.state.cart
        return (
            <div className="container">
                {this.showNotification(cart)}
                <h4 className="cart-notification">
                    Cảm ơn quý khách đã kiểm thử chức năng mua hàng của Website.
                </h4>
            </div>
        );
    }

    showNotification = (cart) => {
        if (cart.length > 0) {
            return (
                <h2 className="cart-success">
                    Quý khách đã mua hàng thành công
                </h2>
            )
        }
        else {
            return (
                <h2 className="cart-fail">
                    Mua hàng thất bại. Quý khách không có sản phẩm nào trong giỏ hàng.
                </h2>
            )
        }
    }
    
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps,null)(CartSuccessPage);