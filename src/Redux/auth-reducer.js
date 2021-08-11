import { stopSubmit } from 'redux-form';
import { headerAPI } from '../api/api';


export const setUserDataConfirm = (id, email, login, isAuth) => ({ type: 'SET_USER_DATA', data: {id, email, login, isAuth} });


const SET_USER_DATA = 'SET_USER_DATA';



let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case SET_USER_DATA: 
        
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}

export const setUserData = () => (dispatch) =>{
  
    return headerAPI.getHeaders().then(data => {
        if (data.resultCode === 0){
          
        let {id, email, login} = data.data;
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
    
};