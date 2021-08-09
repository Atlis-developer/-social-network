import { setUserData } from './auth-reducer'

export const initializationConfirm = () => ({ type: 'INITIALIZATION_SUCCESS' });


const INITIALIZATION_SUCCESS = 'INITIALIZATION_SUCCESS';



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
    debugger
    return (dispatch) => {
        let promise = dispatch(setUserData());
        debugger
        Promise.all([promise])
            .then(() => {
                debugger
                dispatch(initializationConfirm());
            });
    }
};

