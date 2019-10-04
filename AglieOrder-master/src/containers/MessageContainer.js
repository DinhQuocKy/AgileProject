import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './../components/Message'
import PropTypes from 'prop-types';

class MessageContainer extends Component {
  render() {
    return (
      <Message message={this.props.message}></Message>
    );
  }
}
Message.propTypes ={
  message: PropTypes.string.isRequired
}
const mapStateToProps = state => {
  return {
    message: state.message
  }
}

export default connect(mapStateToProps, null)(MessageContainer);
