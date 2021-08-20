import { stopSubmit } from 'redux-form';
import { headerAPI } from '../api/api';


export const setUserDataConfirm = (id, email, login, isAuth) => ({ type: 'auth-reducer/SET_USER_DATA', data: { id, email, login, isAuth } });
export const captchaUrlSuccess = (url) => ({ type: 'auth-reducer/CAPTCHA_URL_SUCCESS', url });
export const haveSomeError = (message) => ({ type: 'auth-reducer/HAVE_SOME_ERROR', message });

const SET_USER_DATA = 'auth-reducer/SET_USER_DATA';
const CAPTCHA_URL_SUCCESS = 'auth-reducer/CAPTCHA_URL_SUCCESS';
const HAVE_SOME_ERROR = 'auth-reducer/HAVE_SOME_ERROR';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
    error: ''
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data
            };
        case CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.url
            };
        case HAVE_SOME_ERROR:
            return {
                ...state,
                error: action.message
            };
        default:
            return state;
    }
}

export const setUserData = () => async (dispatch) => {
    let response = await headerAPI.getHeaders()
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserDataConfirm(id, email, login, true));
    }

};

export const loginControl = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await headerAPI.loginControl(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(setUserData());
        dispatch(captchaUrlSuccess(null));

    }else if(response.data.resultCode === 10){
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(haveSomeError({message}))
        dispatch(getCaptchaUrl());
        dispatch(haveSomeError(''))
    }
    else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(haveSomeError({message}))
    }
};

export const loginOut = () => async (dispatch) => {
    let response = await headerAPI.loginOut()
    if (response.data.resultCode === 0) {
        dispatch(setUserDataConfirm(null, null, null, false));
    }
};

export const getCaptchaUrl = () => async (dispatch) => {
    let response = await headerAPI.getCaptchaUrl()
    let url = response.data.url
    
    dispatch(captchaUrlSuccess(url))
};

/*export const setUserData = () => (dispatch) =>{

    return headerAPI.getHeaders().then(response => {
        if (response.data.resultCode === 0){

        let {id, email, login} = response.data.data;
        dispatch(setUserDataConfirm (id, email, login, true));
        }})

};

export const loginControl = (email, password, rememberMe) =>{

    return (dispatch)=>{
        headerAPI.loginControl(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0){
        dispatch(setUserData ());
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages [0] : 'Some error'
            dispatch (stopSubmit('login', {_error: message}))
        }
    })
    }
};

export const loginOut = () =>{

    return (dispatch)=>{
        headerAPI.loginOut().then(response => {

        if (response.data.resultCode === 0){
        dispatch(setUserDataConfirm (null, null, null, false));
        }})
    }

};*/