const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'How are you', likeCount: 2},
        {id: 2, message: 'Its my first posts', likeCount: 134}
    ],
    newPostText: 'it-react.com'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };

            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = '';

            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.text
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text
    };
};

export default profileReducer;