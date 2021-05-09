import React, { Component } from 'react';
import $ from 'jquery';
import {formatCurrency} from './../../utils/handleCurrency'

class ProductDetailContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            optionColor : this.showOptionColor(),
            quantity : 1
        }
    }

    render() {
        var {productDetail} = this.props;        
        var showQuantity = this.state.quantity
        return (
            <div className="product__main__content">
                <div className="content-title">
                    <h1 className="title">
                        {productDetail.name}
                    </h1>
                </div>
                <div className="content-body">
                    <div className="content-price-option-wrapper">
                        <div className="content-price">
                            <div className="product-price">
                                <span className="product-price-real">
                                    {this.showProductPriceReal(productDetail)}₫
                                </span>
                                <span className="product-price-fake">
                                    {this.showProductPriceFake(productDetail)}₫ 
                                </span>
                                <span className="product-price-discout">
                                    -{productDetail.price.discount}%
                                </span>
                            </div>
                        </div>
                        <div className="content-option">
                            <p className="option-name">
                                {`Chọn màu:  `} 
                                <span>
                                    {this.showOptionColor(productDetail)}
                                </span>
                            </p>
                            <div className="option-list">
                                {this.showColorOptions(productDetail)}
                            </div>
                        </div>
                        <div className="add-to-cart">
                            <div className="quantity">
                                <p className="label">
                                    Số Lượng
                                </p>
                                <div className="group-input">
                                    <button className="decrease" onClick={() => this.handleClickDecreaseQuantity()}>
                                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg" alt="" />
                                    </button>
                                    <input 
                                        type="text"
                                        pattern="[0-9]*"
                                        onInput={(e) => this.handleChange(e)}
                                        onBlur={(e) => this.handleOnBlur(e)} 
                                        className="input" 
                                        value = {showQuantity}
                                        name ="txtQuantity"
                                        onChange={(e) => this.handleOnChange(e)}
                                        
                                    />
                                    <button className="increase" onClick={() => this.handleClickIncreaseQuantity()}>
                                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg" alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className="group-button">
                                <button 
                                    className="btn btn-add-to-cart" 
                                    onClick={() => this.onAddToCart(productDetail,this.state.optionColor,this.getQuantityValue())}
                                >
                                    Chọn Mua
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

    showOptionColor = (productDetail) => {
        var result = null;
        if (this.state.optionColor === '') {
            var optionColorDefault = Object.values(productDetail.colors);
            for (var i = 0; i < optionColorDefault.length; i++) {
                if (optionColorDefault[i] !== 0) {
                    switch (Object.keys(productDetail.colors)[i]) {
                        case 'black':
                            result = 'Đen';
                            break;
                        case 'white':
                            result = 'Trắng';
                            break;
                        case 'red':
                            result = 'Đỏ';
                            break;
                        case 'blue':
                            result = 'Xanh dương';
                            break;
                        case 'purple':
                            result = 'Hồng'
                            break;
                        default: result = '';
                    }
                }
                if (result !== null) {
                    break;
                }
            }
            return result;
        }
        else {
            return this.state.optionColor;
        }
    }

    showColorOptions = (productDetail) => {
        var result = null;
        result = Object.keys(productDetail.colors)
            .filter ((color) => {
                return productDetail.colors[color] !== 0;
            })
            .map((color,index) => {
                var colorValue = '';
                var active = '';
                if (index === 0) {
                    active = 'active';
                }
                switch (color) {
                    case 'black':
                        colorValue = 'Đen';
                        break;
                    case 'white':
                        colorValue = 'Trắng';
                        break;
                    case 'red':
                        colorValue = 'Đỏ';
                        break;
                    case 'blue':
                        colorValue = 'Xanh dương';
                        break;
                    case 'purple':
                        colorValue = 'Hồng'
                        break;
                    default: colorValue = '';
                }
                return (
                    <div className={`btn-option ${active}`} key = {index} onClick= {(e) => {this.handleClickClassActive(e)}}>
                        {colorValue}
                    </div>
                )
            })
        return result;
    }

    showOptionColor = () => {
        var result = null;
        result = Object.keys(this.props.productDetail.colors)
        .filter ((color) => {
            return this.props.productDetail.colors[color] !== 0;
        })
        result = result[0];
        var colorValue = ''
        switch (result) {
            case 'black':
                colorValue = 'Đen';
                break;
            case 'white':
                colorValue = 'Trắng';
                break;
            case 'red':
                colorValue = 'Đỏ';
                break;
            case 'blue':
                colorValue = 'Xanh dương';
                break;
            case 'purple':
                colorValue = 'Hồng'
                break;
            default: colorValue = '';
        }
        return colorValue;
    }

    handleClickClassActive = (e) => {
        $(".btn-option").map((index,element) => {
            return element.className = "btn-option";
        });
        e.target.classList.add('active');
        var optionColor = e.target.innerText;
        this.setState ({
            optionColor : optionColor
        })
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
            $('.product__main__content .input')[0].value = result;
        }
    }
    handleClickIncreaseQuantity = () => {
        var result = null;
        result = this.state.quantity + 1;
        this.setState({
            quantity: result
        });
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
    }

    handleChange = (e) => {
        const value = (e.target.validity.valid) ? e.target.value : this.state.quantity;
        this.setState({quantity: value});
    }

    onAddToCart = (productDetail,optionColor,quantity) => {
        $('.header__cart-notification')[0].attributes[1].value = "display: block;"
        var top = $('html').offset().top;
        $("html, body").animate({ scrollTop: top }, 400);
        var result = {productDetail,optionColor,quantity}
        this.props.onAddToCart(result);
    }

    getQuantityValue = () => {
        var quantity = 1
        if (this.state.quantity === 1) {
            return quantity;
        }
        else {
            return quantity = this.state.quantity;
        }
    }
}
export default ProductDetailContent;
