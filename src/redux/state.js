const state = {
  profilePage: {
    posts: [
      {id: 1, message: 'How are you', likeCount: 2},
      {id: 2, message: 'Its my first posts', likeCount: 134}
    ],
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
  },
  navBar: {
    friends: [
      {name: 'Andrey', imgUrl: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg'},
      {name: 'Andrey', imgUrl: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg'},
      {name: 'Sasun', imgUrl: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg'},
      {name: 'Andrey', imgUrl: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg'}
    ],
  }
};

export default state;