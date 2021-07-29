import { usersAPI } from '../api/api';


export const followConfirm = (userId) => ({ type: 'FOLLOW', userId: userId });
export const unFollowConfirm = (userId) =>({ type: 'UNFOLLOW', userId: userId })
export const setUsers = (users) =>({ type: 'SET-USERS', users: users})
export const currentPage = (page) =>({type: 'SET-CURRENT-PAGE', currentPage:page})
export const totalPage = (pages) =>({type: 'TOTAL-PAGE', allPagesCount:pages})
export const funcFetching = (isFetching) =>({type: 'IS-FETCHING', isFetching:isFetching})
export const funcProgress = (isFetching, userId) =>({type: 'IS-PROGRESS', isFetching, userId})


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const TOTAL_PAGE = 'TOTAL-PAGE'
const IS_FETCHING = 'IS-FETCHING'
const IS_PROGRESS = 'IS-PROGRESS'

let defaultState = {
    users: [ ],
    pageSize: 50,
    allPagesCount: 0,
    numberPage: 1,
    isFetching: false,
    isProgress: [ ]
}

export const usersReducer = (state = defaultState, action) => {
   
    switch (action.type) {
        
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map(u =>{
                    if (u.id === action.userId){
                        return {...u, friend: true}
                    }return u
                })
            };
        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map (u =>{
                    if(u.id === action.userId){
                        return {...u, friend: false}
                    }return u
                })
            };
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        };
        case SET_CURRENT_PAGE : {
            
            return {
                ...state, numberPage:action.currentPage
                
            }
        };
        case TOTAL_PAGE : {
            return {
                ...state, allPagesCount:action.allPagesCount
            }
        };
        case IS_FETCHING : {
            return {
                ...state, isFetching:action.isFetching
            }
        };
        case IS_PROGRESS : {
            
            return {
            ...state, 
            isProgress: action.isFetching ?
            [...state.isProgress, action.userId]:
            state.isProgress.filter(id => id !=action.userId)
            }
        };
        default:
            return state;
    }
};

export const userThunkCreator = (page, pageSize) =>{
    return (dispatch) =>{
        
        dispatch(funcFetching(true));
        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(totalPage(data.totalCount));
            dispatch(funcFetching(false));
        })
    }
}

export const follow = (userId) =>{
    return (dispatch) =>{
        dispatch(funcProgress(true, userId));
        usersAPI.followFriends(userId).then(response => {              
            if (response.data.resultCode === 0) {
                dispatch(followConfirm(userId));
            }dispatch(funcProgress(false,userId));
        })
    }
}

export const unFollow = (userId) =>{
    return (dispatch) =>{
        dispatch(funcProgress(true, userId));
        usersAPI.unFollowFriends(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unFollowConfirm(userId));
            }
            dispatch(funcProgress(false, userId));
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