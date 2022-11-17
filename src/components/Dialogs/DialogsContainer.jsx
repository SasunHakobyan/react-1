import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/message-reducer';
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageTextActionCreator(body));
    }

    let onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    return <Dialogs dialogsPage={props.store.getState().dialogsPage} onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange} />
}

export default DialogsContainer;