import React from "react";
import userPhoto from "../../assets/images/user.png";
import classes from "./Users.module.css";
import axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        this.getUsers(this.props.currentPage, true);
    }

    getUsers(page, setTotalCount = false) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                if (response.data.totalCount > 200) {response.data.totalCount = 200}

                this.props.setUsers(response.data.items);

                if (setTotalCount) {
                    this.props.setTotalUsersCount(response.data.totalCount);
                }
            })
    }

    onPageChange(page) {
        this.props.setCurrentPage(page);
        this.getUsers(page);
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(page => {
                        return <span className={this.props.currentPage === page ? classes.selectedPage : ''} onClick={() => this.onPageChange(page)}>{page}</span>
                    })}
                </div>
                {
                    this.props.users.map(user => {
                        return (
                            <div key={user.id}>
                            <span>
                                <div>
                                    <img src={user.photos.small ? user.photos.small : userPhoto}
                                         className={classes.photo}/>
                                </div>
                                <div>
                                    {user.followed ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button> :
                                        <button onClick={() => this.props.follow(user.id)}>Follow</button>}
                                </div>
                            </span>
                                <span>
                                <span>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span>
                                    <div>{'user.location.country'}</div>
                                    <div>{'user.location.city'}</div>
                                </span>
                            </span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Users;