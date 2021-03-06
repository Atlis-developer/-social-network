import { profileAPI } from '../api/api';

export const addPostActionCreate = (newPost) => ({ type: 'profile-reducer/ADD-POST', newPost });
export const setProfileUsersConfirm = (profile) =>({ type: 'profile-reducer/SET-PROFILE-USERS', profile });
export const getUserStatusActionCreate = (status) =>({ type: 'profile-reducer/GET-USER-STATUS', status})
export const updateUserStatusActionCreate = (status) =>({ type: 'profile-reducer/UPDATE-USER-STATUS', status})
export const changeOnLOgActionCreate = (onLog) =>({ type: 'profile-reducer/CHANGE_ON_LOG', onLog})
export const saveNewAvatar = (avatar) =>({ type: 'profile-reducer/SAVE_NEW_AVATAR', avatar})
export const saveErrorMessage = (message) =>({ type: 'profile-reducer/SAVE_ERROR_MESSAGE', message})

const ADD_POST = 'profile-reducer/ADD-POST';
const SET_PROFILE_USERS = 'profile-reducer/SET-PROFILE-USERS';
const GET_USER_STATUS = 'profile-reducer/GET-USER-STATUS';
const UPDATE_USER_STATUS = 'profile-reducer/UPDATE-USER-STATUS';
const CHANGE_ON_LOG = 'profile-reducer/CHANGE_ON_LOG';
const SAVE_NEW_AVATAR = 'profile-reducer/SAVE_NEW_AVATAR';
const SAVE_ERROR_MESSAGE = 'profile-reducer/SAVE_ERROR_MESSAGE';

let defaultState = {
    posts: [
        { message: 'Hello world!', like: '10' },
        { message: 'I want to learn ReactJS', like: '42' },
        { message: 'Hello Ukraine!', like: '50' },
        { message: 'JavaScript is cool!', like: '242' },
    ],
    profile: null,
    status: '',
    onLog: false,
    errorMessage: ''
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
        case CHANGE_ON_LOG: {
            return {
                ...state,
                onLog: action.onLog
            };
        }
        case SAVE_ERROR_MESSAGE: {
            
            return {
                ...state,
                errorMessage: action.message
            };
        }
        case SAVE_NEW_AVATAR: {
            return {
                ...state,
                profile:{ ...state.profile, photos : action.avatar}
            };
        }
        default:
            return state;
    }
}

export const setProfileUsers = (userID) => async (dispatch) => {
    
    let response = await profileAPI.getProfiles(userID)
    dispatch(setProfileUsersConfirm(response.data))
}

export const getUserStatus = (userID) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userID)
    dispatch(getUserStatusActionCreate(response.data))

}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(updateUserStatusActionCreate(status))
    }
}

export const changeMyProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id
    let response = await profileAPI.changeMyProfile(profile)
    if (response.data.resultCode === 0) {
        
        dispatch(setProfileUsers(userId))
    }else {
        debugger
        let message = response.data.messages[0]
        dispatch(saveErrorMessage(message))
    }
}

export const addNewAvatar = (avatar) => async (dispatch) => {
    let response = await profileAPI.setNewAvatar(avatar)
    if (response.data.resultCode === 0) {
        dispatch(saveNewAvatar(response.data.data.photos))
    }
}

