import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import classes from './Dialogs.module.css';
import React from 'react';

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} imgUrl={dialog.img_url} />);

  let messagesElements = props.state.messages.map(message => <Message isOwner={message.owner} message={message.message} />);

  let messageData = React.createRef();

  let updateOnTextChange = () => {
    props.updateNewMessageText(messageData.current.value);
  }

  let addMessage = () => {
    props.addMessage();
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
        <div className={classes.sendMessageContainer}>
          <textarea onChange={updateOnTextChange} value={props.state.newMessageText} ref={messageData}></textarea>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs