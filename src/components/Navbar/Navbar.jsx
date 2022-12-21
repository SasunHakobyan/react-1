import {NavLink} from 'react-router-dom';
import Friend from './Friend/Friend';
import classes from './Navbar.module.css';

const Navbar = (props) => {
    let friends = props.state.friends.map(friendObj => <Friend key={friendObj.id} imgUrl={friendObj.imgUrl}
                                                               name={friendObj.name}/>);

    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink className={item => item.isActive ? classes.active : classes.item}
                         to='/profile'>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={item => item.isActive ? classes.active : classes.item}
                         to='/dialogs'>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={item => item.isActive ? classes.active : classes.item}
                         to='/users'>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={item => item.isActive ? classes.active : classes.item} to='/news'>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={item => item.isActive ? classes.active : classes.item} to='/music'>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={item => item.isActive ? classes.active : classes.item}
                         to='/settings'>Settings</NavLink>
            </div>
            <div className={classes.friendsContainer}>
                <h3>Friends</h3>
                <div className={classes.friendGrid}>
                    {friends}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;