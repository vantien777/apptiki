import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import {actFetchProductsRequest} from './../../actions/index';

class HomePage extends Component {



    componentDidMount() {
        this.props.fetchAllproducts();
    }

    render() {
        var {products} = this.props;
        return (
            <ProductList>
                {this.showProducts(products)}
            </ProductList>
        );
    }
    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product,index) => {
                return (
                    <div className="grid-col10-5 grid-col10-sm-5 grid-col12-md-4 grid-col12-lg-3  grid-col10-xl-2" key={index}>
                        <ProductItem
                            key={index}
                            product={product}
                        />
                    </div>
                )
            })
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        fetchAllproducts: () => {
            dispatch(actFetchProductsRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);