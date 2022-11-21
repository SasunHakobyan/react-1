import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import classes from './Dialogs.module.css';
import React from 'react';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => {
        return <DialogItem name={dialog.name} key={dialog.id} imgUrl={dialog.img_url}/>
    });

    let messagesElements = props.dialogsPage.messages.map(message => {
        return <Message key={message.id} isOwner={message.owner} message={message.message}/>
    });

    let messageRef = React.createRef();
    let updateOnTextChange = () => {
        props.onNewMessageChange(messageRef.current.value);
    }

    let addMessageOnClick = () => {
        props.onSendMessageClick();
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.sendMessageContainer}>
                    <textarea onChange={updateOnTextChange} ref={messageRef}
                              value={props.dialogsPage.newMessageText}></textarea>
                    <button onClick={addMessageOnClick}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs