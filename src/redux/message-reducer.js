const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 1,
                owner: true,
                message: state.newMessageText
            };

            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    };
};

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        text: text
    };
};

export default messageReducer;