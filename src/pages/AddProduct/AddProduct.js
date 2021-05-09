import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actAddProductRequest} from '../../actions/index';

class AddProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "name": "",
            "price": {
                "real": 0,
                "fake": 0,
                "discount": 0
            },
            "images": {
                "black": "",
                "white": "",
                "red": "",
                "blue": "",
                "purple": ""
            },
            "colors": {
                "black": 0,
                "white": 0,
                "red": 0,
                "blue": 0,
                "purple": 0
            },
            "rating": 0,
            "sales": 0,
            "releaseDate": ""
        }
    }

    render() {

        return (
            <div className="grid-row">
                <div className="grid-col grid-col10-xl-5">
                    <div className="addproduct-item">
                        <label className="">Tên sản phẩm</label>
                        <input
                            type="text"
                            placeholder="Tên"
                            className="input-addProduct"
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="addproduct-item">
                        <label className="">Giá</label>
                        <input
                            type="text"
                            placeholder="Real"
                            className="input-addProduct"
                            onChange={this.onChangePriceReal}
                        />
                        <input
                            type="text"
                            placeholder="Fake"
                            className="input-addProduct"
                            onChange={this.onChangePriceFake}
                        />
                        <input
                            type="text"
                            placeholder="Discount"
                            className="input-addProduct"
                            onChange={this.onChangeNamePriceDiscount}
                        />
                    </div>
                    <div className="addproduct-item">
                        <label className="">Link Images</label>
                        <input
                            type="text"
                            placeholder="Đen"
                            className="input-addProduct"
                            onChange={this.onChangeBlack}
                        />
                        <input
                            type="text"
                            placeholder="Trắng"
                            className="input-addProduct"
                            onChange={this.onChangeWhite}
                        />
                        <input
                            type="text"
                            placeholder="Đỏ"
                            className="input-addProduct"
                            onChange={this.onChangeRed}
                        />
                        <input
                            type="text"
                            placeholder="Xanh dương"
                            className="input-addProduct"
                            onChange={this.onChangeBlue}
                        />
                        <input
                            type="text"
                            placeholder="Tím"
                            className="input-addProduct"
                            onChange={this.onChangePurple}
                        />
                    </div>
                </div>
                <div className="grid-col grid-col10-xl-4 grid-col10-o-1">
                    <div
                        className="btn-search header__search-button btn-add-product"
                        type="button"
                        onClick={() => this.onRandom()}
                    >
                        Random Data
                    </div>

                    <div
                        className="btn-search header__search-button btn-add-product"
                        type="button"
                        onClick={() => this.onAddProduct()}
                    >
                        Thêm sản phẩm
                    </div>
                </div>
            </div>
        );
    }

    onChangeName = (e) => {
        var value = e.target.value;
        this.setState ({
            "name": value
        })
    }

    onChangePriceReal = (e) => {
        var value = e.target.value;
        this.setState ({
            "price": {
                ...this.state.price,
                "real": value
            }
        })
    }

    onChangePriceFake = (e) => {
        var value = e.target.value;
        this.setState ({
            "price": {
                ...this.state.price,
                "fake": value
            }
        })
    }

    onChangeNamePriceDiscount = (e) => {
        var value = e.target.value;
        this.setState ({
            "price": {
                ...this.state.price,
                "discount": value
            }
        })
    }

    onChangeBlack = (e) => {
        var value = e.target.value;
        if (value !== "") {
            this.setState({
                "images": {
                    ...this.state.images,
                    "black": value
                },
                "colors": {
                    ...this.state.colors,
                    "black": 1
                }
            })
        }
    }

    onChangeWhite = (e) => {
        var value = e.target.value;
        if (value !== "") {
            this.setState({
                "images": {
                    ...this.state.images,
                    "white": value
                },
                "colors": {
                    ...this.state.colors,
                    "white": 1
                }
            })
        }
    }

    onChangeRed = (e) => {
        var value = e.target.value;
        if (value !== "") {
            this.setState({
                "images": {
                    ...this.state.images,
                    "red": value
                },
                "colors": {
                    ...this.state.colors,
                    "red": 1
                }
            })
        }
    }

    onChangeBlue = (e) => {
        var value = e.target.value;
        if (value !== "") {
            this.setState({
                "images": {
                    ...this.state.images,
                    "blue": value
                },
                "colors": {
                    ...this.state.colors,
                    "blue": 1
                }
            })
        }
    }

    onChangePurple = (e) => {
        var value = e.target.value;
        if (value !== "") {
            this.setState({
                "images": {
                    ...this.state.images,
                    "purple": value
                },
                "colors": {
                    ...this.state.colors,
                    "purple": 1
                }
            })
        }
    }

    onChangeRating = () => {
        var rating = [3,4,5]
        return rating[Math.floor(Math.random()*rating.length)];
    }

    onChangeSales = () => {
        return Math.floor(Math.random()*151 + 7);
    }

    onChangeDate = () => {
        var yearArray = [2017,2018,2019,2020,2021];
        var valueYear = yearArray[Math.floor(Math.random()*yearArray.length)];
        var monthArray = ['01', '02', '03', '04', '05', '06', '07', '08', '09',10,11,12];
        var valueMonth = monthArray[Math.floor(Math.random()*monthArray.length)];
        var dateArray = ['01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15,
             16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        var valueDate = dateArray[Math.floor(Math.random()*dateArray.length)]

        return `${valueYear}-${valueMonth}-${valueDate}`
    }

    onRandom = () => {
        var value1 = this.onChangeRating()
        var value2 = this.onChangeSales()
        var value3 = this.onChangeDate()
        console.log(value1, value2, value3)
        this.setState ({
            "rating": value1,
            "sales": value2,
            "releaseDate": value3
        })
    }

    onAddProduct = () => {
        var addproduct = this.state
        console.log('submit',this.state)

        this.props.onAddProduct(addproduct)
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);