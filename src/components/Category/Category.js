import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery'

class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchKeyword: this.props.searchKeyword
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            searchKeyword: nextProps.searchKeyword
        })
    }


    render() {
        var {searchKeyword} = this.state;
        return (
            <div className="category">
                <div className="grid-row">
                    <div className="grid-col">
                        <div className="search-summary">
                            <div className="title">
                                <h1>{`Kết quả tìm kiếm cho '${searchKeyword}'`}</h1>
                            </div>
                            <div className="search-summary-sorter">
                                <div className="search-sort-container">
                                    <div className="sortlist">
                                        <Link to="#" className="sort-item-link active" onClick={(e) => this.sortBySales(e)}>Bán Chạy</Link>
                                        <Link to="#" className="sort-item-link" onClick={(e) => this.sortByDate(e)}>Hàng Mới</Link>
                                        <Link to="#" className="sort-item-link" onClick={(e) => this.sortByPriceAsc(e)}>Giá Thấp</Link>
                                        <Link to="#" className="sort-item-link" onClick={(e) => this.sortByPriceDesc(e)}>Giá Cao</Link>
                                    </div>
                                    <div className="filter-onMobile" onClick={(e) => this.handleClickFilterOnMobile(e)}>
                                        <i className="fas fa-filter"></i>
                                        <span className="filter-text">Lọc</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__list">
                    <div className="grid-row product__list-content">
                        {this.props.children}
                    </div>
                </div>
            </div>

        )
    }

    sortByPriceAsc = (e) => {
        $(".sort-item-link").map((index,element) => {
            return element.className = "sort-item-link";
        });
        e.target.classList.add('active')
        this.props.sortByPriceAsc();
    }

    sortByPriceDesc = (e) => {
        $(".sort-item-link").map((index,element) => {
            return element.className = "sort-item-link";
        });
        e.target.classList.add('active')
        this.props.sortByPriceDesc();
    }

    sortByDate = (e) => {
        $(".sort-item-link").map((index,element) => {
            return element.className = "sort-item-link";
        });
        e.target.classList.add('active')
        this.props.sortByDate();
    }

    sortBySales = (e) => {
        $(".sort-item-link").map((index,element) => {
            return element.className = "sort-item-link";
        });
        e.target.classList.add('active')
        this.props.sortBySales();
    }

    handleClickFilterOnMobile = (e) => {
        $('.sidebar').animate({width: 'toggle'}, 100)
    }
}

export default Category;