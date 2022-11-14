import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import classes from './Dialogs.module.css';
import React from 'react';

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} imgUrl={dialog.img_url} />);

  let messagesElements = props.state.messages.map(message => <Message isOwner={message.owner} message={message.message} />);

  let messageData = React.createRef();

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
        <div className={classes.sendMessageContainer}>
          <textarea ref={messageData}></textarea>
          <button onClick={() => {alert(messageData.current.value)}}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs