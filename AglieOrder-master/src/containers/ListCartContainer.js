import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './../actions/index'
import ListOrder from '../components/ListOrder';
import ModalOrder from '../components/ModalOrder';

class ListCartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <ListOrder>
                <ModalOrder cart={cart}></ModalOrder>
            </ListOrder>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListCartContainer);
