let initialState = {
    friends: [
        {
            id: 1,
            name: 'Andrey',
            imgUrl: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg'
        },
        {
            id: 2,
            name: 'Andrey',
            imgUrl: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg'
        },
        {
            id: 3,
            name: 'Sasun',
            imgUrl: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg'
        },
        {
            id: 4,
            name: 'Andrey',
            imgUrl: 'https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg'
        }
    ],
}

const navbarReducer = (state = initialState, action) => {
    return state;
}

export default navbarReducer;