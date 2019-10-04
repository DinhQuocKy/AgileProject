import React, { Component } from 'react';
import {MSG_ADD_TO_CART} from './../constants/Message'
import axios from 'axios';

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            products : []
        };
    }

    componentDidMount(){
        axios({
            method : 'GET',
            url : 'https://5d7df209cb7ecb0014442581.mockapi.io/api/products',
            data : null
        }).then(res => {
            this.setState({
                products : res.data
            });
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        var { product } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image}
                            className="img-fluid" alt={product.name} />
                        <a href='true'>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href='true'>{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                {this.showRating(product.rating)}
                            </li>
                        </ul>
                        <p className="card-text">
                            Sản phẩm do apply sản xuất
                                  </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a
                                    href='true'
                                    className="btn-floating blue-gradient"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Add to Cart"
                                    onClick={(e) => {
                                            e.preventDefault();
                                            this.onAddToCart(product);
                                        }
                                    }
                                >
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    onAddToCart = (product) => {
        this.props.onAddToCart(product);
        this.props.onChangeMessage(MSG_ADD_TO_CART);
    }
    showRating(rating) {
        var rate = [];
        for (var i = 1; i <= rating; ++i) {
            rate.push(<i key={i} className="fa fa-star"></i>);
        }
        for (var j = 1; j <= 5 - rating; ++j) {
            rate.push(<i key={i + j} className="fa fa-star-o"></i>);
        }
        return rate;
    }
}

export default Product;
