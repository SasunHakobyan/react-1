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
        {id: 1, name: 'Andrey', img_url: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg'},
        {id: 2, name: 'Sasha', img_url: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg'},
        {id: 3, name: 'Dima', img_url: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg'},
      ],
      messages: [
        {id: 1, message: 'Hi', owner: false},
        {id: 1, message: 'Hi', owner: true},
        {id: 1, message: 'How are you', owner: true},
        {id: 1, message: 'Where you goin', owner: false},
      ],
      newMessageText: 'send your message'
    },
    navBar: {
      friends: [
        {name: 'Andrey', imgUrl: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg'},
        {name: 'Andrey', imgUrl: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg'},
        {name: 'Sasun', imgUrl: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg'},
        {name: 'Andrey', imgUrl: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg'}
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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0
      };
    
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.text;
      this._callSubscriber(this._state); 
    } else if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        id: 1,
        owner: true,
        message: this._state.messagesPage.newMessageText
      };
    
      this._state.messagesPage.messages.push(newMessage);
      this._state.messagesPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.messagesPage.newMessageText = action.text;
      this._callSubscriber(this._state);
    }
  },
};

export default store; 