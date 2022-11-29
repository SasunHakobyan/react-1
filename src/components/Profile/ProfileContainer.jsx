import {Component} from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

import {connect} from "react-redux";
import axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {usersAPI} from "../../api/api";

const ProfileRouteParams = (props) => {
    const routeParams = useParams();

    if (!routeParams.userId) {
        routeParams.userId = 2;
    }

    return <ProfileContainer {...props} routeParams={routeParams} />
}

class ProfileContainer extends Component {

    componentDidMount() {

        usersAPI.getProfile(this.props.routeParams.userId)
            .then(data => {
                this.props.setUserProfile(data);
            });
    }

    render() {
        return (
            <div>
                <ProfileInfo profileData={this.props.profileData}  />
                <MyPostsContainer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.usersPage.userIdForProfile,
        profileData: state.profilePage.userProfile
    }
}

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileRouteParams);