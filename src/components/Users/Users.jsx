import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const unfollowOnClick = (userId) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "8044ee75-356b-458a-aa91-ed005d7216d1"
            }
        }).then((response) => {
            if (response.data.resultCode === 0) {
                props.unFollow(userId);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    const followOnClick = (userId) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "8044ee75-356b-458a-aa91-ed005d7216d1"
            }
        }).then(response => {
            console.log(response);
            if (response.data.resultCode === 0) {
                props.follow(userId);
            }
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div>
            <div>
                {pages.map(page => {
                    return <span className={props.currentPage === page ? classes.selectedPage : ''} onClick={() => props.onPageChanged(page)}>{page}</span>
                })}
            </div>
            {
                props.users.map(user => {
                    return (
                        <div key={user.id}>
                            <span>
                                <div>
                                    <NavLink to={`/profile/${user.id}`}>
                                        <img src={user.photos.small ? user.photos.small : userPhoto}
                                             className={classes.photo}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {user.followed ? <button onClick={() => unfollowOnClick(user.id)}>Unfollow</button> :
                                        <button onClick={() => followOnClick(user.id)}>Follow</button>}
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
    );
};

export default Users;