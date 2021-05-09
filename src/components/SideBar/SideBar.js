import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchKeyword: '',
            idKeyword: 0,
            valueInputPriceLow: 0,
            valueInputPriceHigh: 0,
            checkColorBlack: false,
            checkColorWhite: false,
            checkColorRed: false,
            checkColorBlue: false,
            checkColorPurple: false,
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps.idKeyword !== this.state.idKeyword){
            $(".rating-list .search__filter__item").map((index,element) => {
                return element.className = "search__filter__item";
            });
            $(".fast-price-filter-item span").map((index,element) => {
                return element.className = "";
            });
            $(".seach__filter__list .search__filter__item").map((index,element) => {
                return element.className = "search__filter__item";
            });
        }
        this.setState ({
            searchKeyword : nextProps.searchKeyword,
            idKeyword: nextProps.idKeyword
        })
    }

    render() {
        return (
            <div className="sidebar">
                <div className="header_sidebar--onMobile">
                    <span>Bộ Lọc</span>
                    <span onClick={() => this.handleClickFilterOnMobile()}>Đóng</span>
                </div>
                <div className="seach__filter__container">
                    <h4 className="title">
                        LOẠI SẢN PHẨM
                    </h4>
                    <div className="seach__filter__list">
                        <Link 
                            to="#" 
                            className="search__filter__item"
                            onClick={(e) => this.handleClickProductType(e)}
                        >Hàng chính hãng</Link>
                        <Link 
                            to="#" 
                            className="search__filter__item"
                            onClick={(e) => this.handleClickProductType(e)}
                        >Hàng nhập khẩu</Link>
                        <Link 
                            to="#" 
                            className="search__filter__item"
                            onClick={(e) => this.handleClickProductType(e)}
                        >10000mah</Link>
                        <Link 
                            to="#" 
                            className="search__filter__item"
                            onClick={(e) => this.handleClickProductType(e)}
                        >20000mah</Link>
                    </div>
                </div>
                <div className="seach__filter__container">
                    <h4 className="title">
                        ĐÁNH GIÁ
                    </h4>
                    <div className="rating-list">
                        <Link to="#" className="search__filter__item" onClick={(e) => this.filterByRatingFiveStar(e)}>
                            <p className="starts__wrapper">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </p>
                            <span>từ 5 sao</span>
                        </Link>
                        <Link to="#" className="search__filter__item" onClick={(e) => this.filterByRatingFourStar(e)}>
                            <p className="starts__wrapper">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star disabled" />
                            </p>
                            <span>từ 4 sao</span>
                        </Link>
                        <Link to="#" className="search__filter__item" onClick={(e) => this.filterByRatingThreeStar(e)}>
                            <p className="starts__wrapper">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star disabled" />
                                <i className="fas fa-star disabled" />
                            </p>
                            <span>từ 3 sao</span>
                        </Link>
                    </div>
                </div>
                <div className="seach__filter__container">
                    <h4 className="title">
                        GIÁ
                    </h4>
                    <div className="fast-price-filter">
                        <div className="fast-price-filter-item" onClick={(e) => this.filterByPriceLow(e)}>
                            <span>Dưới 250.000</span>
                        </div>
                        <div className="fast-price-filter-item" onClick={(e) => this.filterByPriceMedium(e)}>
                            <span>Từ 250.000 đến 450.000</span>
                        </div>
                        <div className="fast-price-filter-item" onClick={(e) => this.filterByPriceHigh(e)}>
                            <span>Từ 450.000 đến 950.000</span>
                        </div>
                        <div className="fast-price-filter-item" onClick={(e) => this.filterByPriceVeryHigh(e)}> 
                            <span>Trên 950.000</span>
                        </div>
                    </div>
                    <div className="price-small-text">Chọn khoảng giá</div>
                    <div className="input__group">
                        <input
                            type="text" 
                            pattern="[0-9]*" 
                            placeholder="Giá từ"
                            onInput={(e) => this.handleChangeInputLow(e)}
                            onBlur={(e) => this.handleOnBlurLow(e)}  
                            value={this.state.valueInputPriceLow}
                            onChange={(e) => this.handleOnChangeInputLow(e)}
                        />
                        <span>-</span>
                        <input 
                            type="text" 
                            pattern="[0-9]*" 
                            placeholder="Giá từ"
                            onInput={(e) => this.handleChangeInputHigh(e)}
                            onBlur={(e) => this.handleOnBlurHigh(e)}  
                            value={this.state.valueInputPriceHigh}
                            onChange={(e) => this.handleOnChangeInputHigh(e)}
                        />
                    </div>
                    <button 
                        className="search_filter-submit-button"
                        onClick={() => this.handleClickSubmitFilterPrice()}
                    >Áp dụng</button>
                </div>
                <div className="seach__filter__container">
                    <h4 className="title">
                        MÀU SẮC
                    </h4>
                    <div className="seach__filter__list">
                        <div className="search__filter__item">
                            <div className="search__filter__item-label" onClick={(e) => this.handleClickFilterCheckColorBlack(e)}>
                                <input 
                                    type="checkbox"
                                />
                                <span>Đen</span>
                            </div>
                        </div>
                        <div className="search__filter__item">
                            <div className="search__filter__item-label" onClick={(e) => this.handleClickFilterCheckColorWhite(e)}>
                                <input type="checkbox" />
                                <span>Trắng</span>
                            </div>
                        </div>
                        <div className="search__filter__item">
                            <div className="search__filter__item-label" onClick={(e) => this.handleClickFilterCheckColorRed(e)}>
                                <input type="checkbox" />
                                <span>Đỏ</span>
                            </div>
                        </div>
                        <div className="search__filter__item">
                            <div className="search__filter__item-label" onClick={(e) => this.handleClickFilterCheckColorBlue(e)}>
                                <input type="checkbox" />
                                <span>Xanh dương</span>
                            </div>
                        </div>
                        <div className="search__filter__item">
                            <div className="search__filter__item-label" onClick={(e) => this.handleClickFilterCheckColorPurple(e)}>
                                <input type="checkbox" />
                                <span>Hồng</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleClickFilterOnMobile = (e) => {
        $('.sidebar').animate({width: 'toggle'}, 100)
    }

    handleClickProductType= (e) => {
        $(".seach__filter__list .search__filter__item").map((index,element) => {
            return element.className = "search__filter__item";
        });
        e.target.className = "search__filter__item active"
        var value = e.target.innerText
        this.props.handleClickProductType(value)
    }

    filterByRatingFiveStar = (e) => {
        $(".rating-list .search__filter__item").map((index,element) => {
            return element.className = "search__filter__item";
        });
        $(".rating-list .search__filter__item")[0].className = `search__filter__item active`
        this.props.filterByRatingFiveStar();
    }

    filterByRatingFourStar = () => {
        $(".rating-list .search__filter__item").map((index,element) => {
            return element.className = "search__filter__item";
        });
        $(".rating-list .search__filter__item")[1].className = "search__filter__item active"
        this.props.filterByRatingFourStar();
    }

    filterByRatingThreeStar = () => {
        $(".rating-list .search__filter__item").map((index,element) => {
            return element.className = "search__filter__item";
        });
        $(".rating-list .search__filter__item")[2].className = "search__filter__item active"
        this.props.filterByRatingThreeStar();
    }
    
    filterByPriceLow = () => {
        $(".fast-price-filter-item span").map((index,element) => {
            return element.className = "";
        });
        $(".fast-price-filter-item span")[0].className = "active";
        this.props.filterByPriceLow();
    }

    filterByPriceMedium = () => {
        $(".fast-price-filter-item span").map((index,element) => {
            return element.className = "";
        });
        $(".fast-price-filter-item span")[1].className = "active";
        this.props.filterByPriceMedium();
    }

    filterByPriceHigh = () => {
        $(".fast-price-filter-item span").map((index,element) => {
            return element.className = "";
        });
        $(".fast-price-filter-item span")[2].className = "active";
        this.props.filterByPriceHigh();
    }

    filterByPriceVeryHigh = () => {
        $(".fast-price-filter-item span").map((index,element) => {
            return element.className = "";
        });
        $(".fast-price-filter-item span")[3].className = "active";
        this.props.filterByPriceVeryHigh();
    }

    handleOnChangeInputLow = (e) => {
    }
    handleChangeInputLow = (e) => {
        const value = (e.target.validity.valid) ? e.target.value : this.state.valueInputPriceLow;
        this.setState({valueInputPriceLow: value});
    }
    handleOnBlurLow = (e) => {
        var element = parseInt(e.target.value)
        var result = 0;
        if (!isNaN(element)) {
            result = element 
        }
        this.setState ({valueInputPriceLow : result})
        
    }

    handleOnChangeInputHigh = (e) => {
    }
    handleChangeInputHigh = (e) => {
        const value = (e.target.validity.valid) ? e.target.value : this.state.valueInputPriceHigh;
        this.setState({valueInputPriceHigh: value});
    }
    handleOnBlurHigh = (e) => {
        var element = parseInt(e.target.value)
        var result = 0;
        if (!isNaN(element)) {
            result = element 
        }
        this.setState ({valueInputPriceHigh : result})
    }

    handleClickSubmitFilterPrice = () => {
        $(".fast-price-filter-item span").map((index,element) => {
            return element.className = "";
        });
        var value = [this.state.valueInputPriceLow,this.state.valueInputPriceHigh];
        this.props.handleClickSubmitFilterPrice(value)
    }

    handleClickFilterCheckColorBlack = (e) => {
        if(this.state.checkColorBlack === false) {
            if (e.target.nodeName === "SPAN") {
                e.target.parentNode.childNodes[0].checked = true
                this.setState ({
                    checkColorBlack: true
                })
            }
            if (e.target.nodeName === "INPUT") {
                this.setState ({
                    checkColorBlack: true
                })
            }
            this.handleClickSubmitFilterColor(true,this.state.checkColorWhite,this.state.checkColorRed,this.state.checkColorBlue,this.state.checkColorPurple)
        } else {
            if (e.target.nodeName === "SPAN") {
                e.target.parentNode.childNodes[0].checked = false
                this.setState ({
                    checkColorBlack: false
                })
            }
            if (e.target.nodeName === "INPUT") {
                this.setState ({
                    checkColorBlack: false
                })
            }
            this.handleClickSubmitFilterColor(false,this.state.checkColorWhite,this.state.checkColorRed,this.state.checkColorBlue,this.state.checkColorPurple)
        }
    }

    handleClickFilterCheckColorWhite = (e) => {
        if(this.state.checkColorWhite === false) {
            if (e.target.nodeName === "SPAN") {
                e.target.parentNode.childNodes[0].checked = true
                this.setState ({
                    checkColorWhite: true
                })
            }
            if (e.target.nodeName === "INPUT") {
                this.setState ({
                    checkColorWhite: true
                })
            }
            this.handleClickSubmitFilterColor(this.state.checkColorBlack,true,this.state.checkColorRed,this.state.checkColorBlue,this.state.checkColorPurple)
        } else {
            if (e.target.nodeName === "SPAN") {
                e.target.parentNode.childNodes[0].checked = false
                this.setState ({
                    checkColorWhite: false
                })
            }
            if (e.target.nodeName === "INPUT") {
                this.setState ({
                    checkColorWhite: false
                })
            }
            this.handleClickSubmitFilterColor(this.state.checkColorBlack,false,this.state.checkColorRed,this.state.checkColorBlue,this.state.checkColorPurple)
        }
    }

    handleClickFilterCheckColorRed = (e) => {
        if(this.state.checkColorRed === false) {
            if (e.target.nodeName === "SPAN") {
                e.target.parentNode.childNodes[0].checked = true
                this.setState ({
                    checkColorRed: true
                })
            }
            if (e.target.nodeName === "INPUT") {
                this.setState ({
                    checkColorRed: true
                })
            }
            this.handleClickSubmitFilterColor(this.state.checkColorBlack,this.state.checkColorWhite,true,this.state.checkColorBlue,this.state.checkColorPurple)
        } else {
            if (e.target.nodeName === "SPAN") {
                e.target.parentNode.childNodes[0].checked = false
                this.setState ({
                    checkColorRed: false
                })
            }
            if (e.target.nodeName === "INPUT") {
                this.setState ({
                    checkColorRed: false
                })
            }
            this.handleClickSubmitFilterColor(this.state.checkColorBlack,this.state.checkColorWhite,false,this.state.checkColorBlue,this.state.checkColorPurple)
        }
    }

    handleClickFilterCheckColorBlue = (e) => {
        if(this.state.checkColorBlue === false) {
            if (e.target.nodeName === "SPAN") {
                e.target.parentNode.childNodes[0].checked = true
                this.setState ({
                    checkColorBlue: true
                })
            }
            if (e.target.nodeName === "INPUT") {
                this.setState ({
                    checkColorBlue: true
                })
            }
            this.handleClickSubmitFilterColor(this.state.checkColorBlack,this.state.checkColorWhite,this.state.checkColorRed,true,this.state.checkColorPurple)
        } else {
            if (e.target.nodeName === "SPAN") {
                e.target.parentNode.childNodes[0].checked = false
                this.setState ({
                    checkColorBlue: false
                })
            }
            if (e.target.nodeName === "INPUT") {
                this.setState ({
                    checkColorBlue: false
                })
            }
            this.handleClickSubmitFilterColor(this.state.checkColorBlack,this.state.checkColorWhite,this.state.checkColorRed,false,this.state.checkColorPurple)
        }
    }

    handleClickFilterCheckColorPurple = (e) => {
        if(this.state.checkColorPurple === false) {
            if (e.target.nodeName === "SPAN") {
                e.target.parentNode.childNodes[0].checked = true
                this.setState ({
                    checkColorPurple: true
                })
            }
            if (e.target.nodeName === "INPUT") {
                this.setState ({
                    checkColorPurple: true
                })
            }
            this.handleClickSubmitFilterColor(this.state.checkColorBlack,this.state.checkColorWhite,this.state.checkColorRed,this.state.checkColorBlue,true)
        } else {
            if (e.target.nodeName === "SPAN") {
                e.target.parentNode.childNodes[0].checked = false
                this.setState ({
                    checkColorPurple: false
                })
            }
            if (e.target.nodeName === "INPUT") {
                this.setState ({
                    checkColorPurple: false
                })
            }
            this.handleClickSubmitFilterColor(this.state.checkColorBlack,this.state.checkColorWhite,this.state.checkColorRed,this.state.checkColorBlue,false)
        }
    }

    handleClickSubmitFilterColor = (black,white,red,blue,purple) => {
        var color =[black,white,red,blue,purple]
        this.props.handleClickSubmitFilterColor(color)
    }
}

export default SideBar;