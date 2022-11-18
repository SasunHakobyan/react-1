import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    let onPostChange = (text) => {
                        store.dispatch(updateNewPostTextActionCreator(text));
                    }

                    return <MyPosts addPost={addPost} updateNewPostText={onPostChange}
                                    newPostText={state.profilePage.newPostText}
                                    posts={state.profilePage.posts}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;