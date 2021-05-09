import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {formatCurrency} from './../../utils/handleCurrency'

class ProductItem extends Component {
    render() {
        var {product} = this.props;
        return (
            <div className="product-item">
                <Link to={`product/${product.id}`} className="product-item-link">
                    <div className="product-item-frame">
                        <div className="product-item-thumbnail">
                            <img src={`https://salt.tikicdn.com/cache/200x200/ts/product/${this.showProductThumnail(product)}`} alt="" />
                        </div>
                        <div className="product-item-info">
                            <div className="product-item-name">
                                <span>
                                    {product.name}
                                </span>
                            </div>
                            <div className="product-item-rating-review">
                                <div className="rating">
                                    <div className="rating-total">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size={12} color="#c7c7c7" height={12} width={12} xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(199, 199, 199)' }}>
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size={12} color="#c7c7c7" height={12} width={12} xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(199, 199, 199)' }}>
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size={12} color="#c7c7c7" height={12} width={12} xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(199, 199, 199)' }}>
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size={12} color="#c7c7c7" height={12} width={12} xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(199, 199, 199)' }}>
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size={12} color="#c7c7c7" height={12} width={12} xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(199, 199, 199)' }}>
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    </div>
                                    <div className="rating-average">
                                        {this.showProductRating(product)}
                                    </div>
                                </div>
                                <div className="review">
                                    {`(${this.props.product.sales})`}
                                </div>
                            </div>
                            <div className="product-item-price">
                                <div className="price">
                                    {this.showProductPriceReal(product)}₫
                                </div>
                                <div className="discount">
                                    {product.price.discount}%
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
    showProductThumnail = (product) => {
        var result = null;
        var keyList = Object.keys(product.images)
            .filter((key) => {
                return product.images[key] !== "";
            })
        result = product.images[keyList[0]];
        return result;
    }

    showProductPriceReal = (product) => {
        var result = 0;
        if (product) {
            result = formatCurrency.format(product.price.real).substring(100,1);
        }
        return result;
    }

    showProductRating = (product) => {
        var result = [];
        for(var i = 0; i < product.rating; i++) {
            result.push(
                <svg key = {i} stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size={12} color="#fdd836" height={12} width={12} xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(253, 216, 54)' }}>
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            )
        }
        return result;
    }
}

export default ProductItem;