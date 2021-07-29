import { profileAPI } from '../api/api';

export const addPostActionCreate = () => ({ type: 'ADD-POST' });
export const updatePostMessageActionCreate = (text) =>
    ({ type: 'UPDATE-POST-MESSAGE', newText: text });
export const setProfileUsersConfirm = (profile) =>({ type: 'SET-PROFILE-USERS', profile });

const ADD_POST = 'ADD-POST';
const UPDATE_POST_MESSAGE = 'UPDATE-POST-MESSAGE';
const SET_PROFILE_USERS = 'SET-PROFILE-USERS';

let defaultState = {
    posts: [
        { message: 'Hello world!', like: '10' },
        { message: 'I want to learn ReactJS', like: '42' },
        { message: 'Hello Ukraine!', like: '50' },
        { message: 'Fuck you Russia!', like: '242' },
    ],
    newPostMessage: '',
    profile: null
}

export const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, { message: state.newPostMessage, like: 0 }],
                newPostMessage: ''
            };
        }
        case UPDATE_POST_MESSAGE: {
            return {
                ...state,
                newPostMessage: action.newText
            };
        }
        case SET_PROFILE_USERS: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
}

export const setProfileUsers = (userID) =>{
    return (dispatch)=>{
        if (!userID){
            userID = 10
        }
        profileAPI.getProfiles(userID).then(data => {
            dispatch(setProfileUsersConfirm(data))})
    }
}

/*export const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts]
            let newPost = {
                message: state.newPostMessage,
                like: 0
            };
            stateCopy.posts.push(newPost);
            stateCopy.newPostMessage = '';
            return stateCopy;}
        case UPDATE_POST_MESSAGE:{
            let stateCopy = {...state};
            stateCopy.newPostMessage = action.newText;
            return stateCopy;}
        default:
            return state;
    }
}*/