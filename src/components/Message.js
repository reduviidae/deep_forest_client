import React from 'react';

const Message = props => {
  let options = { hour: "2-digit", minute: "2-digit", weekday: 'long', month: 'long', day: 'numeric' };
  let sentOn = new Date(props.message.created_at).toLocaleDateString("en-US", options)
  return (
    <div className="message">
      <h5 className="msg-user-name">{props.message.user.name} ({props.message.user.pronouns})</h5>
      <p className="message-content">{props.message.content}</p>
      <p className="sent-on">sent on: {sentOn}</p>
    </div>
  )
}

export default Message;


// removed chat avi because it was crashing Heroku
// <img className="chat-avi" src={require(`../img/${props.message.user.avatar}.png`)} alt={`${props.message.user.avatar}`}/>
