import {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuth} from "../../redux/auth-reducer";

class HeaderContainer extends Component {

    componentDidMount() {
        this.props.setAuth();
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAuth: () => {
            dispatch(setAuth())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);