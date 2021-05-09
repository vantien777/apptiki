import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {formatCurrency} from './../../utils/handleCurrency'

class CartProductItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.cartItem.quantity
        }
    }
    
    UNSAFE_componentWillReceiveProps(nextProps) {        
            this.setState({
                quantity: nextProps.cartItem.quantity
            })
        
    }

    render() {
        var {productDetail,optionColor} = this.props.cartItem
        var quantityValue = this.state.quantity;
        return (
            <li className="cart__product-item">
                <div className="cart__product-inner">
                    <div className="cart__products-thumnail">
                        <Link to={`/product/${productDetail.id}`} className="cart__products-thumnail-link">
                            <img className="cart__products-thumnail-img" src={`https://salt.tikicdn.com/cache/200x200/ts/product/${this.showProductThumnail(productDetail)}`} alt="" />
                        </Link>
                    </div>
                    <div className="cart__products-content">
                        <div className="cart__products-desc">
                            <Link to={`/product/${productDetail.id}`} className="cart__products-name">
                                {productDetail.name}
                            </Link>
                            <p className="cart__products-action">
                                <span className="optionColor">
                                    {`Màu sắc: ${optionColor}`}
                                </span>
                            </p>
                            <p className="cart__products-action">
                                <span 
                                    className="remove-product"
                                    onClick={() => this.onDelete(this.props.cartItem.id)}
                                >
                                    Xóa
                                </span>
                            </p>
                        </div>
                        <div className="cart__products-details">
                            <div className="cart__products-price">
                                <p className="cart__products-real-price">
                                    {this.showProductPriceReal(productDetail)}₫
                                </p>
                                <p className="cart__products-discount-price">
                                    <del>{this.showProductPriceFake(productDetail)}₫</del>
                                    <span className="cart__products-percent-price">
                                        -{productDetail.price.discount}%
                                </span>
                                </p>
                            </div>
                            <div className="cart__products-quantity">
                                <div className="cart__products-quantity-item">
                                    <span className="quantity-decrease" onClick={() => this.handleClickDecreaseQuantity()}>-</span>
                                    <input
                                        type="text"
                                        pattern="[0-9]*"
                                        onInput={(e) => this.handleChange(e)}
                                        onBlur={(e) => this.handleOnBlur(e)} 
                                        className="quantity-input" 
                                        value = {quantityValue}
                                        name ="txtQuantity"
                                        onChange={(e) => this.handleOnChange(e)}
                                    />
                                    <span className="quantity-increase" onClick={() => this.handleClickIncreaseQuantity()}>+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

        )
    }

    showProductPriceReal = (productDetail) => {
        var result = 0;
        if (productDetail) {
            result = formatCurrency.format(productDetail.price.real).substring(100,1);
        }
        return result;
    }

    showProductPriceFake = (productDetail) => {
        var result = 0;
        if (productDetail) {
            result = formatCurrency.format(productDetail.price.fake).substring(100,1);
        }
        return result;
    }

    showProductThumnail = (productDetail) => {
        var result = null;
        var keyList = Object.keys(productDetail.images)
            .filter((key) => {
                return productDetail.images[key] !== '';
            })
        result = productDetail.images[keyList[0]];
        return result;
    }
    onDelete = (id) => {
        this.props.onDelete(id);
    }

    handleOnChange = () => {
        
    }

    handleOnBlur = (e) => {
        var element = parseInt(e.target.value)
        var result = 1;
        if (!isNaN(element)) {
            result = element 
        }
        this.setState ({quantity : result})
        var {id,productDetail} =this.props.cartItem
        var quantity = result
        var cartItemUpdate = {id,productDetail,quantity}
        this.props.handleUpdateQuantity(cartItemUpdate)
    }

    handleChange = (e) => {
        const value = (e.target.validity.valid) ? e.target.value : this.state.quantity;
        this.setState({quantity: value});
    }

    handleClickDecreaseQuantity = () => {
        if (this.state.quantity === 1) {
            this.setState ({
                quantity: 1
            })
        }
        else {
            var result = null;
            result = this.state.quantity - 1;
            this.setState({
                quantity: result
            })
            var {id,productDetail} =this.props.cartItem
            var quantity = result;
            var cartItemUpdate = {id,productDetail,quantity};
            this.props.handleUpdateQuantity(cartItemUpdate);
        }
    }

    handleClickIncreaseQuantity = () => {
        var result = null;
        result = this.state.quantity + 1;
        this.setState({
            quantity: result
        });
        var {id,productDetail} =this.props.cartItem
        var quantity = result
        var cartItemUpdate = {id,productDetail,quantity}
        this.props.handleUpdateQuantity(cartItemUpdate)
    }

}

export default CartProductItem;