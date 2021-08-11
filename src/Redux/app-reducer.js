import { setUserData } from './auth-reducer'

export const initializationConfirm = () => ({ type: 'app-reducer/INITIALIZATION_SUCCESS' });


const INITIALIZATION_SUCCESS = 'app-reducer/INITIALIZATION_SUCCESS';



let initializationState = {
    initialization: false
}

export const appReducer = (state = initializationState, action) => {

    switch (action.type) {
        case INITIALIZATION_SUCCESS:

            return {
                ...state,
                initialization: true
            };
        default:
            return state;
    }
}

export const initializationData = () => {
   
    return (dispatch) => {
        let promise = dispatch(setUserData());
       
        Promise.all([promise])
            .then(() => {
               
                dispatch(initializationConfirm());
            });
    }
};

