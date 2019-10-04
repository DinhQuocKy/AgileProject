import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
// import swal from 'sweetalert';
class FormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      address: '',

    }
  }
  handleChange = (event) => {
    // this.setState({level : event.target.value});
    const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit = () => {
    
    console.log(this.state);
  }
  render() {
    return (
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Information Customer</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Form>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name='email' onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="password" placeholder="Password" name='address' onChange={this.handleChange} />
                </Form.Group>
              </Form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button onClick={this.handleSubmit} data-toggle="modal" data-target="#exampleModal" type="button" className="btn btn-secondary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormModal;