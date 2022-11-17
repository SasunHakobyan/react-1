import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'How are you', likeCount: 2},
                {id: 2, message: 'Its my first posts', likeCount: 134}
            ],
            newPostText: 'it-react.com'
        },
        messagesPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Andrey',
                    img_url: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg'
                },
                {
                    id: 2,
                    name: 'Sasha',
                    img_url: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg'
                },
                {
                    id: 3,
                    name: 'Dima',
                    img_url: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg'
                },
            ],
            messages: [
                {id: 1, message: 'Hi', owner: false},
                {id: 1, message: 'Hi', owner: true},
                {id: 1, message: 'How are you', owner: true},
                {id: 1, message: 'Where you going', owner: false},
            ],
            newMessageText: 'send your message'
        },
        navBar: {
            friends: [
                {
                    name: 'Andrey',
                    imgUrl: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg'
                },
                {
                    name: 'Andrey',
                    imgUrl: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg'
                },
                {
                    name: 'Sasun',
                    imgUrl: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg'
                },
                {
                    name: 'Andrey',
                    imgUrl: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg'
                }
            ],
        }
    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);
        this._state.navBar = navbarReducer(this._state.navBar, action);

        this._callSubscriber(this._state);
    },
};

export default store;