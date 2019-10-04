import React, { Component } from 'react';
import axios from 'axios';
class ListOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strSearch: '',
            orderBy: 'Name',
            orderDir: 'ASC',
            orderArr : []
        }
    }
    handleOnChange = (event) => {
        this.setState({ strSearch: event.target.value });
    }

    // handleSort = (e, orderBy, orderDir) => {
    //     e.preventDefault();
    //     this.setState({
    //         orderBy: orderBy,
    //         orderDir: orderDir
    //     });
    // }
    // sortFunction(orderBy, orderDir, items) {
    //     if (orderBy === 'Name') {
    //         //sort không phân biệt hoa thường
    //         items = items.sort((a, b) => (a.name.toLowerCase().charAt(0) > b.name.toLowerCase().charAt(0)) ? 1 : -1)
    //         if (orderDir === 'DESC') items = items.reverse();
    //     }
    //     else if (orderBy === 'Level') {
    //         items = items.sort((a, b) => (a.level > b.level) ? 1 : -1)
    //         if (orderDir === 'DESC') items = items.reverse();
    //         // else items = items.sort((a, b) => (a.level < b.level) ? 1 : -1);
    //     }
    //     return items;
    // }
    handleOnChange = (event) => {
        this.setState({ strSearch: event.target.value });
    }

    handleSort = (e, orderBy, orderDir) => {
        e.preventDefault();
        this.setState({
            orderBy: orderBy,
            orderDir: orderDir
        });
    }
    // sortFunction(orderBy, orderDir, items) {
    //     if (orderBy === 'Name') {
    //         //sort không phân biệt hoa thường
    //         items = items.sort((a, b) => (a.name.toLowerCase().charAt(0) > b.name.toLowerCase().charAt(0)) ? 1 : -1)
    //         if (orderDir === 'DESC') items = items.reverse();
    //     }
    //     else if (orderBy === 'Level') {
    //         items = items.sort((a, b) => (a.level > b.level) ? 1 : -1)
    //         if (orderDir === 'DESC') items = items.reverse();
    //         // else items = items.sort((a, b) => (a.level < b.level) ? 1 : -1);
    //     }
    //     return items;
    // }
    componentDidMount(){
        axios({
            url : 'https://localhost:44323/api/orders',
            method : 'GET',
            data : null
        }).then(res => {
            this.setState({
                orderArr : res.data
            });
        }).catch(err => {
            console.log(err);
        });
    }
    render() {
        var { children } = this.props;
        let { orderBy, orderDir } = this.state;
        let strSort = orderBy + "-" + orderDir;
        return (
            <div className="col-12 mt-3">
                <div className="card mb-3">
                    <div className="card-body">
                        <h3 className="card-title">List Order</h3>
                        <table className="table table-responsive table-hover text-center">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col" className="text-center" style={{ width: '10%' }}>#</th>
                                    <th scope="col" className="text-center" >Name</th>
                                    <th scope="col" className="text-center" >Address</th>
                                    <th scope="col" className="text-center" >Created Date</th>
                                    <th scope="col" className="text-center" >Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Filter</th>
                                    <td colSpan="3"><input
                                        value={this.state.strSearch}
                                        onChange={this.handleOnChange}
                                        type="text" className="form-control" placeholder="Search"
                                        aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    </td>
                                    <td>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {strSort}<span className="carvet" />
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li><a onClick={(e) => this.handleSort(e, 'Name', 'ASC')} href="true" className="dropdown-item" role="button"> <i className="fas fa-sort-alpha-down"></i> NAME ACS</a></li>
                                                <li><a onClick={(e) => this.handleSort(e, 'Name', 'DESC')} href="true" className="dropdown-item" role="button"> <i className="fas fa-sort-alpha-up-alt"></i> NAME DESC</a></li>
                                                <div className="dropdown-divider"></div>
                                                <li><a onClick={(e) => this.handleSort(e, 'Level', 'ASC')} href="true" className="dropdown-item" role="button"><i className="fas fa-sort-numeric-down"></i> LEVEL ACS</a></li>
                                                <li><a onClick={(e) => this.handleSort(e, 'Level', 'DESC')} href="true" className="dropdown-item" role="button"><i className="fas fa-sort-numeric-down-alt"></i> LEVEL DESC</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>
                                {this.state.orderArr.map((order, index)=>{
                                    return (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{order.cusName}</td>
                                            <td>{order.cusAddress}</td>
                                            <td>{order.createAt}</td>
                                            <td>
                                                <button style={{ marginRight: 10 }} className="btn btn-warning">Confirm</button>
                                                <button
                                                    type="button" className="btn btn-primary waves-effect waves-light"
                                                    data-toggle="modal" data-target="#ModalOrder">Detail</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                                
                            </tbody>
                        </table>
                                {children}
                    </div>
                </div>
            </div>

        );
    }
}


export default ListOrder;
 