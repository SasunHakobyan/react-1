import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/message-reducer';
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageTextActionCreator(body));
                    }

                    let onSendMessageClick = () => {
                        store.dispatch(addMessageActionCreator());
                    }

                    return <Dialogs dialogsPage={state.dialogsPage} onSendMessageClick={onSendMessageClick}
                                    onNewMessageChange={onNewMessageChange}/>
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;