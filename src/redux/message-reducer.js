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
        {id: 2, message: 'Hi', owner: true},
        {id: 3, message: 'How are you', owner: true},
        {id: 4, message: 'Where you going', owner: false},
    ],
    newMessageText: 'send your message'
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length+1,
                owner: true,
                message: state.newMessageText
            };

            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage],
            }

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            };

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