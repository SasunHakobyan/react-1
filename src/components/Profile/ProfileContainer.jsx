import {Component} from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

import {connect} from "react-redux";
import axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";

class ProfileContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
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
})(ProfileContainer);