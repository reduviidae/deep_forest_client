import React from 'react';

const Message = props => {
  let options = { hour: "2-digit", minute: "2-digit", weekday: 'long', month: 'long', day: 'numeric' };
  let sentOn = new Date(props.message.created_at).toLocaleDateString("en-US", options)
  return (
    <div className="message">
      <h5 className="msg-user-name">{props.message.user.name}</h5>
      <aside className="msg-user-pronouns">({props.message.user.pronouns})</aside>
      <p className="message-content">{props.message.content}</p>
      <p className="sent-on">sent on: {sentOn}</p>
    </div>
  )
}

export default Message;
