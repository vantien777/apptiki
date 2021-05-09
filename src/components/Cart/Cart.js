import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {formatCurrency} from './../../utils/handleCurrency'

class Cart extends Component {
    render() {
        var {cart} = this.props;
        return (
            <div className="cart">
                <div className="cart__inner">
                    <h2 className="cart__product-title">
                        Giỏ hàng
                    <span className="cart__product-count">
                            {` (${this.showQuantityInTitle(cart)} sản phẩm)`}
                    </span>
                    </h2>
                    <div className="cart__product-group">
                        <ul className="cart__product-list">
                            {this.props.children}
                        </ul>
                    </div>
                </div>
                <div className="cart__total__price">
                    <div className="cart__total-inner">
                        <div className="cart__price">
                            <p className="prices__total-item">
                                <span className="prices__text">
                                    Thành Tiền
                                </span>
                                <span className="prices__value">
                                    {this.showTotalPrice(cart)}₫
                                </span>
                            </p>
                        </div>
                        <Link to="/cart/success" className="cart__submit">
                            Tiến hành đặt hàng
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    showQuantityInTitle = (cart) => {
        var result = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                result = result + cart[i].quantity;
            }
        }
        return result;
    }

    showTotalPrice = (cart) => {
        var result = 0
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                result = result + (cart[i].productDetail.price.real)*cart[i].quantity;
            }
        }
        result = formatCurrency.format(result).substring(100,1);
        return result;
    }
}

export default Cart;