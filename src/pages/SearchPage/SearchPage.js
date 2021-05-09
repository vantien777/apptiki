import React, { Component} from 'react';
import {connect} from 'react-redux';
import SideBar from './../../components/SideBar/SideBar'
import Category from './../../components/Category/Category'
import ProductItem from './../../components/ProductItem/ProductItem'
import {actFetchProductsRequest,actFetchProductsInSearch,actFilterInSearchRequest} from './../../actions/index';


class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productsInSearch: this.props.products,
            products: this.props.products,
            searchKeyword: '',
            idKeyword:0,
            productType: '',
            rating: 0,
            fastPrice: 0,
            valueInputPrice: [],
            colors: [],
            checkcolors: 0
        }
    };

    UNSAFE_componentWillReceiveProps(nextProps) {        
        if ((nextProps.productsFiltered.length > 0) || (this.state.rating !== 0 || this.state.fastPrice !== 0 || this.state.valueInputPrice.length !== 0 || this.state.checkcolors !== 0 || this.state.productType !== '')) {
            var sorted = nextProps.productsFiltered.sort((a, b) => {return b.sales - a.sales})
            this.setState({
                products: sorted
            })
        }
        if (this.state.idKeyword !== nextProps.searchKeyword.id){
            sorted = nextProps.products.sort((a, b) => {return b.sales - a.sales})
            this.setState({
                products: sorted,
                searchKeyword: nextProps.searchKeyword.keyword,
                idKeyword: this.props.searchKeyword.id
            })
        }
    }

    render() {
        var {products,searchKeyword,idKeyword} = this.state;
        return (
            <div className="grid-row sidebar__category_wapper">
                <div className="grid-col10-xl-2">
                    <SideBar
                        handleClickProductType = {this.handleClickProductType}
                        filterByRatingFiveStar = {this.filterByRatingFiveStar}
                        filterByRatingFourStar = {this.filterByRatingFourStar}
                        filterByRatingThreeStar = {this.filterByRatingThreeStar}
                        filterByPriceLow = {this.filterByPriceLow}
                        filterByPriceMedium = {this.filterByPriceMedium}
                        filterByPriceHigh = {this.filterByPriceHigh}
                        filterByPriceVeryHigh = {this.filterByPriceVeryHigh}
                        handleClickSubmitFilterPrice = {this.handleClickSubmitFilterPrice}
                        handleClickSubmitFilterColor = {this.handleClickSubmitFilterColor}
                        searchKeyword = {searchKeyword}
                        idKeyword = {idKeyword}
                    ></SideBar>
                </div>
                <div className="grid-col grid-col10-xl-8">
                    <Category 
                        searchKeyword = {searchKeyword} 
                        sortByPriceAsc={this.sortByPriceAsc}
                        sortByPriceDesc = {this.sortByPriceDesc}
                        sortByDate = {this.sortByDate}
                        sortBySales = {this.sortBySales}
                    >
                        {this.showProducts(products)}
                    </Category>
                </div>
            </div>
        )
    }
    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product,index) => {
                return (
                    <div className="grid-col10-5 grid-col10-sm-5 grid-col12-md-4 grid-col12-lg-3 grid-col12-xl-3" key={index}>
                        <ProductItem
                            key={index}
                            product={product}
                        />
                    </div>
                )
            })
        } else {
            result = (
                        <h3 
                            className="grid-col" 
                            style={{textAlign: 'center',color: 'rgb(223,189,21)', padding: '20px', margin:'20px',border: '2px solid rgb(223,189,21)'}}
                        >
                            Rất tiếc, không tìm thấy sản phẩm phù hợp với lựa chọn của bạn
                        </h3>
            )
            
        }
        return result;
    }

    sortByPriceAsc = () => {
        var sorted = this.state.products.sort((a, b) => {return a.price.real - b.price.real})
        this.setState ({ products: sorted})
    }

    sortByPriceDesc = () => {
        var sorted = this.state.products.sort((a, b) => {return b.price.real - a.price.real})
        this.setState ({ products: sorted})
    }

    sortByDate = () => {
        var sorted = this.state.products.sort((a, b) => {
            return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
        })
        this.setState ({
            products: sorted
        })
    }

    sortBySales = () => {
        var sorted = this.state.products.sort((a, b) => {return b.sales - a.sales})
        this.setState ({ products: sorted})
    }

    handleClickProductType = (productType) => {
        this.props.onFilterInSearch(this.state.searchKeyword,productType,this.state.rating,this.state.fastPrice,this.state.valueInputPrice,this.state.colors)
        this.setState ({ productType: productType })
    }

    filterByRatingFiveStar = () => {
        var rating = 5;
        this.props.onFilterInSearch(this.state.searchKeyword,this.state.productType,rating,this.state.fastPrice,this.state.valueInputPrice,this.state.colors)
        this.setState ({rating: rating})
    }

    filterByRatingFourStar = () => {
        var rating = 4;
        this.props.onFilterInSearch(this.state.searchKeyword,this.state.productType,rating,this.state.fastPrice,this.state.valueInputPrice,this.state.colors)
        this.setState ({rating: rating})
    }

    filterByRatingThreeStar = () => {
        var rating = 3;
        this.props.onFilterInSearch(this.state.searchKeyword,this.state.productType,rating,this.state.fastPrice,this.state.valueInputPrice,this.state.colors)
        this.setState ({rating: rating})
    }

    filterByPriceLow = () => {
        var fastPrice = 1;
        this.props.onFilterInSearch(this.state.searchKeyword,this.state.productType,this.state.rating,fastPrice,this.state.valueInputPrice,this.state.colors)
        this.setState ({
            fastPrice: fastPrice,
            valueInputPrice: []
        })
    }

    filterByPriceMedium = () => {
        var fastPrice = 2;
        this.props.onFilterInSearch(this.state.searchKeyword,this.state.productType,this.state.rating,fastPrice,this.state.valueInputPrice,this.state.colors)
        this.setState ({
            fastPrice: fastPrice,
            valueInputPrice: []
        })
    }
    filterByPriceHigh = (product) => {
        var fastPrice = 3;
        this.props.onFilterInSearch(this.state.searchKeyword,this.state.productType,this.state.rating,fastPrice,this.state.valueInputPrice,this.state.colors)
        this.setState ({
            fastPrice: fastPrice,
            valueInputPrice: []
        })
    }

    filterByPriceVeryHigh = () => {
        var fastPrice = 4;
        this.props.onFilterInSearch(this.state.searchKeyword,this.state.productType,this.state.rating,fastPrice,this.state.valueInputPrice,this.state.colors)
        this.setState ({
            fastPrice: fastPrice,
            valueInputPrice: []
        })
    }

    handleClickSubmitFilterPrice = (value) => {
        this.props.onFilterInSearch(this.state.searchKeyword,this.state.productType,this.state.rating,0,value,this.state.colors)
        this.setState ({
            fastPrice: 0,
            valueInputPrice: value
        })
    }

    handleClickSubmitFilterColor = (colors) => {
        this.props.onFilterInSearch(this.state.searchKeyword,this.state.productType,this.state.rating,this.state.fastPrice,this.state.valueInputPrice,colors)
        for (var i = 0; i < colors.length; i++) {
            if (colors[i] === true) {
                this.setState ({
                    colors: colors,
                    checkcolors: 1})
                break;
            }
            if (colors[4] === false) {
                this.setState ({
                    colors: colors,
                    checkcolors: 0})
            }
        }
    }

}

const mapStateToProps = (state) => {
    return {
        products: state.search,
        searchKeyword: state.searchKeyword,
        productsFiltered: state.filter
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        fetchAllproducts: () => {
            dispatch(actFetchProductsRequest())
        },
        onSearchProduct: () => {
            dispatch(actFetchProductsInSearch())
        },
        onFilterInSearch: (keyword,productType,rating,fastPrice,valueInputPrice,colors) => {
            dispatch(actFilterInSearchRequest(keyword,productType,rating,fastPrice,valueInputPrice,colors))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);


