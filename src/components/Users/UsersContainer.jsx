import React from 'react';
import {connect} from "react-redux";
import {
    setCurrentPage,
    toggleFollowingProgress,
    getUsers, follow, unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (page) => {
        this.props.getUsers(page, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChange}
                    users={this.props.users}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    isFollowingInProgress={this.props.isFollowingInProgress}/>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.followingInProgress
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(follow(userId));
        },
        unFollow: (userId) => {
            dispatch(unfollow(userId));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPage(currentPage))
        },
        toggleFollowingProgress: (isFetching, userId) => {
            dispatch(toggleFollowingProgress(isFetching, userId));
        },
        getUsers: (currentPage, pageSize) => {
            dispatch(getUsers(currentPage, pageSize));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);