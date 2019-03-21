import React from 'react';


const Message = props => {

  return (
      <p className="message-text">{props.message.content}</p>
  )
}

export default Message;
