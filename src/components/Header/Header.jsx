import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img
                src='https://img.favpng.com/3/25/19/computer-network-global-network-computer-icons-logo-png-favpng-uiupzDyGz4Ks1aPpLdBEF8gwz.jpg'/>
            <div className={classes.loginBlock}>
                {}
                <NavLink to='/login'>Login</NavLink>
            </div>
        </header>
    );
}

export default Header;