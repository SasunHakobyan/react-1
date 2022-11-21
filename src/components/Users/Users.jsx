import React from 'react';

import classes from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {

        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'how are you',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'how are you',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg',
                    followed: false,
                    fullName: 'David',
                    status: 'how are you',
                    location: {city: 'Ukraine', country: 'Kiev'}
                },
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(user => {
                    return (
                        <div key={user.id}>
                            <span>
                                <div>
                                    <img src={user.photoUrl} className={classes.photo}/>
                                </div>
                                <div>
                                    {user.followed ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button> :
                                        <button onClick={() => props.follow(user.id)}>Follow</button>}
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{user.fullName}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span>
                                    <div>{user.location.country}</div>
                                    <div>{user.location.city}</div>
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