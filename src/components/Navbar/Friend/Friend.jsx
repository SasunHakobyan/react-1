import classes from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={classes.friendsContainer}>
            <div className={classes.friendImg}>
                <img src={props.imgUrl}/>
            </div>
            {props.name}
        </div>
    );
}

export default Friend;