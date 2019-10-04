import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Message from './../constants/Message'
import * as actions from './../actions/index'
import Cart  from './../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import swal from 'sweetalert';

class CartContainer extends Component {
  render() {
    
    var {cart}= this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showCartTotal(cart)}
      </Cart>
    );
  }
  showCartItem = (cart)=>{
    var result=<tr><th><b>{Message.MSG_CART_EMPTY}</b></th></tr>;
    var {onAddToCart,onSubtractToCart,onChangeMessage,onRemoveProductInCart} = this.props;
    if(cart.length> 0){
      result = cart.map((item,index)=> {
        return (
          <CartItem key={index} item ={item} 
                    onAddToCart={onAddToCart} 
                    onSubtractToCart={onSubtractToCart}
                    onChangeMessage={onChangeMessage} 
                    onRemoveProductInCart={onRemoveProductInCart}
          ></CartItem>
        );
      })
    }
    return result;
  }
  showCartTotal = (cart) =>{
    var result = null;
    if(cart.length> 0 ){
      result = <CartResult cart={cart}></CartResult>;
    }
    return result;
  }
 
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product :  PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          inventory: PropTypes.number.isRequired,
          rating: PropTypes.number.isRequired
        }),
        quantity : PropTypes.number.isRequired
    })
  ).isRequired
};
const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actions.actAddToCart(product, 1));
    },
    onSubtractToCart: (product) => {
      dispatch(actions.actSubtractToCart(product, 1));
    },
    onChangeMessage: (message) => {
      dispatch(actions.actChangeMessage(message));
    },
    onRemoveProductInCart: (product) => {
      dispatch(actions.actRemoveProductInCart(product));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
