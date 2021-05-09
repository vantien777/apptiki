import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {actFetchCartItemsRequest,actSearchProductRequest,actFetchProductsRequest} from './../../actions/index';
import $ from 'jquery';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword:"",
            pathSearch: "/"
        }
    }

    componentDidMount () {
        this.props.fetchAllCartItems();
    }

    render() {
        var {keyword,pathSearch} = this.state;
        var {cart} = this.props;
        return (
            <div className="header">
                <div className="header_navBar">
                    <div className="grid-container">
                        <div className="grid-row">
                            <div className="grid-col grid-col10-sm-10 grid-col10-lg-2 grid-col10-xl-2 ">
                                <div className="header__logo__menu">
                                    <div className="header__logo">
                                        <Link to="/" className="header__logo-link">
                                            <img src="./HTML_CSS/assets/img/navBar__logo__main.png" alt="" className="header__logo-img" />
                                        </Link>
                                    </div>
                                    <Link to="/cart" className="header__cart-link--mobile">
                                            <div className="header__cart-item">
                                                <div className="header__cart-wrapper">
                                                    <img src="./HTML_CSS/assets/img/user_cart.png" alt="" className="header__cart-icon" />
                                                    <span className="header__cart-quantity">
                                                        {this.showQuantityProduct(cart)}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    <div className="header__menu">
                                        <a href="true" className="header__menu-link">
                                            <img src="./HTML_CSS/assets/img/header__menu.png" alt="" />
                                            <div className="header__menu-text">
                                                <span>
                                                    Danh mục
                                                </span>
                                                <span className="header__menu-text-icon">
                                                    Sản Phẩm
                                                    <img src="./HTML_CSS/assets/img/arrow__icon.png" alt="" />
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-col grid-col10-lg-6 grid-col10-xl-6 header__search--mobile">
                                <div className="header__search">
                                    <input 
                                        type="text" 
                                        className="header__search-input" 
                                        placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..." 
                                        value={keyword}
                                        onChange={this.onChange}
                                        onKeyPress={(e) => this.handleKeyPress(e)}
                                    />
                                    <Link
                                        to={`${pathSearch}`} 
                                        className="btn-search header__search-button"
                                        type = "button"
                                        onClick={() => this.onSearch(keyword)}
                                    >
                                        <img src="./HTML_CSS/assets/img/search__btn-icon.png" alt="" />
                                        Tìm Kiếm
                                    </Link>
                                    <div className="header__search-history">
                                    </div>
                                </div>
                            </div>
                            <div className="grid-col grid-col10-lg-2 grid-col10-xl-2 header__search--mobile">
                                <div className="header__user__cart">
                                    <div className="header__user">
                                        <img src="./HTML_CSS/assets/img/user_login.png" alt="" className="header__user-icon" />
                                        <span className="header__user-item">
                                            <span className="header__user-item-login">
                                                Đăng Nhập/ Đăng Ký
                                            </span>
                                            <span className="header__user-item-account">
                                                <span>
                                                    Tài Khoản
                                                </span>
                                                <img src="./HTML_CSS/assets/img/arrow__icon.png" alt="" className="arrowIcon" />
                                            </span>
                                        </span>
                                    </div>
                                    <div className="header__cart">
                                        <Link to="/cart" className="header__cart-link">
                                            <div className="header__cart-item">
                                                <div className="header__cart-wrapper">
                                                    <img src="./HTML_CSS/assets/img/user_cart.png" alt="" className="header__cart-icon" />
                                                    <span className="header__cart-quantity">
                                                        {this.showQuantityProduct(cart)}
                                                    </span>
                                                </div>
                                                <span className="header__cart-text">
                                                    Giỏ hàng
                                                </span>
                                            </div>
                                        </Link>
                                        <div className="header__cart-notification" style={{display: 'none'}}>
                                            <div className="btn-close" onClick={this.handleClickCloseNotification}>
                                                <i className="fas fa-times"></i>
                                            </div>
                                            <p className="header__cart-notification-status">
                                                Thêm vào giỏ hàng thành công
                                            </p>
                                            <Link to='/cart' className="btn-view-cartPage" onClick={this.handleClickCloseNotification}>
                                                Xem giỏ hàng và thanh toán
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-row">
                            <div className="grid-col grid-col10-sm-10 ">
                                <div className="header__search--onMobile">
                                    <input 
                                        type="text" 
                                        className="header__search-input" 
                                        placeholder="Tìm sản phẩm, thương hiệu mong muốn..." 
                                        value={keyword}
                                        onChange={this.onChange}
                                        onKeyPress={(e) => this.handleKeyPress(e)}
                                    />
                                    <Link
                                        to={`${pathSearch}`} 
                                        className="btn-search header__search-button--mobile"
                                        type = "button"
                                        onClick={() => this.onSearch(keyword)}
                                    >
                                        <img src="./HTML_CSS/assets/img/search__btn-icon.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__quicklinks">
                    <div className="grid-container">
                        <div className="grid-row">
                            <div className="grid-col10-lg-o-2 grid-col10-xl-o-2">
                                <div className="header__quicklinks-list">
                                    <Link 
                                        to="/search" 
                                        className="header__quicklinks-item"
                                        onClick={(e) => this.handleClickProductSuggest(e)}
                                    >dự phòng mini</Link>
                                    <Link 
                                        to="/search" 
                                        className="header__quicklinks-item"
                                        onClick={(e) => this.handleClickProductSuggest(e)}
                                    >sạc nhanh</Link>
                                    <Link 
                                        to="/search" 
                                        className="header__quicklinks-item"
                                        onClick={(e) => this.handleClickProductSuggest(e)}
                                    >dự phòng Baseus</Link>
                                    <Link 
                                        to="/search" 
                                        className="header__quicklinks-item"
                                        onClick={(e) => this.handleClickProductSuggest(e)}
                                    >2 cổng</Link>
                                    <Link 
                                        to="/search" 
                                        className="header__quicklinks-item"
                                        onClick={(e) => this.handleClickProductSuggest(e)}
                                    >chính hãng</Link>
                                    <Link 
                                        to="/search" 
                                        className="header__quicklinks-item"
                                        onClick={(e) => this.handleClickProductSuggest(e)}
                                    >dự phòng Energizer</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    showQuantityProduct = (cart) => {
        var result = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                result = result + cart[i].quantity;
            }
        }
        return result;
    }

    handleClickCloseNotification = () => {
        $('.header__cart-notification')[0].attributes[1].value = "display: none;"
    }

    onChange = (e) => {
        var value = e.target.value;
        if (value !== "") {
            this.setState ({
                keyword: value,
                pathSearch: "/search"
            })
        }
        if (value === "") {
            this.setState ({
                keyword: value,
                pathSearch: "/"
            })
        }
        
    }

    onSearch = (keyword) => {
        if (keyword !== "") {
            this.props.onSearchProduct(keyword);
        }
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            $('.header__search-button')[0].click();
            this.onSearch(this.state.keyword);
        }
    }

    handleClickProductSuggest = (e) => {
        var keyword = e.target.innerText
        this.onSearch(keyword);
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
        fetchAllproducts: () => {
            dispatch(actFetchProductsRequest())
        },
        onSearchProduct: (keyword) => {
            dispatch(actSearchProductRequest(keyword))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);