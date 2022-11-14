import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import classes from './Dialogs.module.css';

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} imgUrl={dialog.img_url} />);

  let messagesElements = props.state.messages.map(message => <Message isOwner={message.owner} message={message.message} />);

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
      </div>
    </div>
  );
}

export default Dialogs