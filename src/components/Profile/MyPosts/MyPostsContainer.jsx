import React from 'react';
import Post from './Post/Post';

import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let postsElements = props.posts.map(post => {
        return <Post id={post.id} message={post.message} likeCount={post.likeCount}/>
    });

    let newPostElement = React.createRef();

    function addPost() {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <MyPosts post={props.posts} addPost={addPost} updateNewPostText={onPostChange}/>
    );
}

export default MyPostsContainer;