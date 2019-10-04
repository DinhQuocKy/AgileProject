import React, { Component } from 'react';
class ModalOrder extends Component {

    render() {
        var {cart}= this.props;
        console.log(cart);
        var items = cart.map((item, index) => {
            return (
                <tr key={index}>
                    <th scope="row">
                        <img src={item.product.image} alt="" className="img-fluid z-depth-0" />
                    </th>
                    <td>
                        <h4>{item.product.name}</h4>
                    </td>
                    <td><h4>{item.product.price}$</h4></td>
                    <td className="center-on-small-only">
                        <h4>{item.quantity}</h4>
                    </td>
                    <td><h4>{item.product.price * item.quantity}$</h4></td>   
                </tr>
            );
        });

        return (
            <div className="modal fade bd-example-modal-lg" id="ModalOrder" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">List Food In Order</h3>
                        </div>
                        <div className="modal-body">
                            <div className="table-responsive">
                                <table className="table product-table">
                                    <thead>
                                        <tr>
                                            <th>Hình Minh Họa</th>
                                            <th>Sản Phẩm</th>
                                            <th>Giá</th>
                                            <th>Số Lượng</th>
                                            <th>Tổng Cộng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalOrder;