import { profileAPI } from '../api/api';

export const addPostActionCreate = (newPost) => ({ type: 'ADD-POST', newPost });
export const setProfileUsersConfirm = (profile) =>({ type: 'SET-PROFILE-USERS', profile });
export const getUserStatusActionCreate = (status) =>({ type: 'GET-USER-STATUS', status})
export const updateUserStatusActionCreate = (status) =>({ type: 'UPDATE-USER-STATUS', status})

const ADD_POST = 'ADD-POST';
const SET_PROFILE_USERS = 'SET-PROFILE-USERS';
const GET_USER_STATUS = 'GET-USER-STATUS';
const UPDATE_USER_STATUS = 'UPDATE-USER-STATUS';

let defaultState = {
    posts: [
        { message: 'Hello world!', like: '10' },
        { message: 'I want to learn ReactJS', like: '42' },
        { message: 'Hello Ukraine!', like: '50' },
        { message: 'Fuck you Russia!', like: '242' },
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, { message: action.newPost, like: 0 }],
            };
        }
        case SET_PROFILE_USERS: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case GET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case UPDATE_USER_STATUS: {
            return {
                ...state,
                status: action.status
            };    
        }
        default:
            return state;
    }
}

export const setProfileUsers = (userID) =>{
    return (dispatch)=>{
        if (!userID){
            userID = 18603
        }
        profileAPI.getProfiles(userID).then(data => {
            dispatch(setProfileUsersConfirm(data))})
    }
}

export const getUserStatus = (userID) =>{
    return (dispatch)=>{
        profileAPI.getUserStatus(userID).then(data=>{
            dispatch (getUserStatusActionCreate(data))})
    }
}

export const updateUserStatus = (status) =>{
    return (dispatch) =>{
        profileAPI.updateUserStatus(status).then(response=>{
            if(response.data.resultCode === 0){
                dispatch (updateUserStatusActionCreate(status))
            }
        })
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