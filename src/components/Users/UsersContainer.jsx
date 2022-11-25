import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setUsers,
    setUsersTotalCount,
    unFollow
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(100);
            })
    }

    onPageChange = (page) => {
        this.props.setCurrentPage(page);
        this.props.setIsFetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(100);
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChange}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}/>
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
        isFetching: state.usersPage.isFetching
    };
};


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    setIsFetching,

})(UsersContainer);