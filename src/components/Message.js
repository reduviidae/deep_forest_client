import React from 'react';
import { connect } from 'react-redux';

const Message = props => {
  return (
    <div className="message">
      <h5>{props.message.user_name}: </h5>
      <p className="message-content">{props.message.content}</p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps)(Message);
