import classes from './Message.module.css';

const Message = (props) => {
    const positionClassName = props.isOwner ? classes.owner : classes.friend;

    return (
        <div className={classes.message + ' ' + positionClassName}>{props.message}</div>
    );
}

export default Message;