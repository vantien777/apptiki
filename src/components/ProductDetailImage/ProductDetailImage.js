import React, { Component } from 'react';
import $ from 'jquery';

class ProductDetailImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slugThumnail: ''
        };
    }

    render() {
        var {productDetail} = this.props;
        return (
            <div className="product__main__image">
                <div className="images-thumnail">
                    {this.showThumnail(productDetail)}
                </div>
                <div className="review-images">
                    <div className="review-images-list">
                        {this.showImageActive(productDetail)}
                    </div>
                </div>
            </div>
        );
    }

    showThumnail = (productDetail) => {
        if (this.state.slugThumnail === '') {
            var slugDefault = Object.values(productDetail.images);
            for (var i = 0; i < slugDefault.length; i++) {
                if (slugDefault[i] !== "") {
                    slugDefault = slugDefault[i];
                    break;
                }
            }
            return (
                <img src={`https://salt.tikicdn.com/cache/w444/ts/product/${slugDefault}`} alt="" />
            )
        }
        else {
            return (
                <img src={`https://salt.tikicdn.com/cache/w444/ts/product/${this.state.slugThumnail}`} alt="" />
            )
        }
    }

    showImageActive = (productDetail) => {
        var result = null;
        var slug = '';
        var isActive = 0;
        result = Object.keys(productDetail.images)
            .filter ((image) => {
                return productDetail.images[image] !== "";
            })
            .map((key,index) => {
                var active = '';
                isActive += 1;
                slug = productDetail.images[key];
                if (isActive === 1) {
                    active = "active";
                }
                return (
                    <div className={`review-images-link ${active}`} key = {index} onClick={(e)=> this.handleClickClassActive(e)}>
                        <div className="review-images-link-block">
                            <img src={`https://salt.tikicdn.com/cache/w64/ts/product/${slug}`} alt="" className="review-images-img"/>
                        </div>
                    </div>
                )
            })
        return result;
    }

    handleClickClassActive = (e) => {

        $(".review-images-link").map((index,element) => {
            return element.className = "review-images-link";
        });
        e.target.offsetParent.offsetParent.classList.add('active');
        var slugActive = e.target.src.substring(46);
        this.setState ({
            slugThumnail : slugActive
        })

    }
}

export default ProductDetailImage;