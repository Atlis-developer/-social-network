export const addMessageToMessages = (newMessage) => ({ type: 'dialogs-reducer/ADD-MESSAGE-TO-MESSAGES', newMessage });

const ADD_MESSAGE_TO_MESSAGES = 'dialogs-reducer/ADD-MESSAGE-TO-MESSAGES';

let defaultState = {
    messages: [
        { message: 'Привет' },
        { message: 'Как дела?' },
        { message: 'Что делаешь?' },
        { message: 'Когда домой?' },
        { message: 'Привет' }
    ],
    dialogs: [
        { name: 'Олег', id: 1 },
        { name: 'Вова', id: 2 },
        { name: 'Вика', id: 3 },
        { name: 'Таня', id: 4 },
        { name: 'Ярик', id: 5 }
    ],
    avatar: [
        { ava: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU' /> },
        { ava: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QFaQyezndgniERWn-5S9oNrdXzK9yALQCj_V384ErrrH7il5bou3nGTREZCPMsoCjGY&usqp=CAU' /> },
        { ava: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdppf1lDbWRxFZdW9QfosE0BGsA28ks2jnYcZHl9bFiVtM8RiuZLHjtOKRrL7muVtdcmo&usqp=CAU' /> },
        { ava: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8lEZyYBzqDkDbdnmIEpjn6WQdmQJ-q4AGvsY77GTsB_mac3KisFBfYjEEz4t_Mnx9Ehc&usqp=CAU' /> },
        { ava: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO0uvA1f5EcbvXiN4Cfk-ASQVuViSrFIkT2q5BFxsM0qmTGSFvCnsV2cK0qZwOlGn9_6s&usqp=CAU' /> },
    ],
}

export const dialogsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_TO_MESSAGES:
            return {
                ...state,
                messages: [...state.messages, { message: action.newMessage }],
            };
        default:
            return state;
    };
}

/*export const addNewMessage = (newMessage) =>
    ({ type: 'ADD-NEW-MESSAGE', message: newMessage });*/

/*export const dialogsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_TO_MESSAGES:{
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            let addMessages = {
                message: state.addNewMessageToDialog
            };
            stateCopy.messages.push(addMessages);
            stateCopy.addNewMessageToDialog = '';
            return stateCopy;}
        case ADD_NEW_MESSAGE:{
            let stateCopy = {...state};
            stateCopy.addNewMessageToDialog = action.message;
            return stateCopy;}
        default:
            return state;
    };
}*/