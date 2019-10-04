import React, { Component } from 'react';
import { MSG_DELETE_PRODUCT_IN_CART_SUCCESS,MSG_UPDATE_CART_SUCCESS } from './../constants/Message'
class CartItem extends Component {
    render() {
        var { item } = this.props;
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image} alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            onClick={(e) => {
                                e.preventDefault();
                                this.onSubtractToCart(item.product);
                            }
                            }
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a href='true'>—</a>
                        </label>
                        <label
                            onClick={(e) => {
                                e.preventDefault();
                                this.onAddToCart(item.product);
                            }
                            }
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a href='true'>+</a>
                        </label>
                    </div>
                </td>
                <td>{item.product.price * item.quantity}$</td>
                <td>
                    <button onClick={() => this.onRemoveProductInCart(item.product)} type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item">X</button>
                </td>
            </tr>

        );
    }
    onRemoveProductInCart = (product) => {
        this.props.onRemoveProductInCart(product);
        this.props.onChangeMessage(MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
    onAddToCart = (product) => {
        this.props.onAddToCart(product);
        this.props.onChangeMessage(MSG_UPDATE_CART_SUCCESS);
    }
    onSubtractToCart = (product) => {
        this.props.onSubtractToCart(product);
        this.props.onChangeMessage(MSG_UPDATE_CART_SUCCESS);
    }
}

export default CartItem;
