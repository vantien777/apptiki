import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="product__container">
                <div className="grid-row product__header">
                    <div className="grid-col10-2 grid-col12-o-1 grid-col10-xl-2">
                        <div className="product__header-item">
                            <div className="product__header-item-style">
                                <img src="./HTML_CSS/assets/img/product__header-item.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__list">
                    <div className="grid-row product__list-content">
                        {this.props.children}
                    </div>
                    <div className="grid-row product__list-expand">
                        <div className="grid-col grid-col10-xl-o-4 grid-col10-xl-2">
                            <a href="true" className="product__list-expand-link">
                                Xem Thêm
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;