import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
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
                                    <img src={user.photos.small ? user.photos.small : userPhoto}
                                         className={classes.photo}/>
                                </div>
                                <div>
                                    {user.followed ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button> :
                                        <button onClick={() => props.follow(user.id)}>Follow</button>}
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