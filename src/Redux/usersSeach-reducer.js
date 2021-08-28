import { usersAPI } from '../api/api';


export const followConfirm = (userId) => ({ type: 'userSeach-reducer/FOLLOW', userId: userId });
export const unFollowConfirm = (userId) =>({ type: 'userSeach-reducer/UNFOLLOW', userId: userId })
export const setUsers = (users) =>({ type: 'userSeach-reducer/SET-USERS', users: users})
export const currentPage = (page) =>({type: 'userSeach-reducer/SET-CURRENT-PAGE', currentPage:page})
export const totalPage = (pages) =>({type: 'userSeach-reducer/TOTAL-PAGE', allPagesCount:pages})
export const funcFetching = (isFetching) =>({type: 'userSeach-reducer/IS-FETCHING', isFetching:isFetching})
export const funcProgress = (isFetching, userId) =>({type: 'userSeach-reducer/IS-PROGRESS', isFetching, userId})


const FOLLOW = 'userSeach-reducer/FOLLOW';
const UNFOLLOW = 'userSeach-reducer/UNFOLLOW';
const SET_USERS = 'userSeach-reducer/SET-USERS';
const SET_CURRENT_PAGE = 'userSeach-reducer/SET-CURRENT-PAGE'
const TOTAL_PAGE = 'userSeach-reducer/TOTAL-PAGE'
const IS_FETCHING = 'userSeach-reducer/IS-FETCHING'
const IS_PROGRESS = 'userSeach-reducer/IS-PROGRESS'

let defaultState = {
    users: [ ],
    pageSize: 50,
    boxSize: 10,
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
                users: action.users.map(u =>{
                    if(u.followed){
                        return {...u, friend: true}
                    }return u
                })
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

export const userThunkCreator = (page, pageSize) => async (dispatch) =>{
        dispatch(funcFetching(true));
        let response = await usersAPI.getUsers(page, pageSize)
            dispatch(setUsers(response.data.items));
            dispatch(totalPage(response.data.totalCount));
            dispatch(funcFetching(false));
    
}

export const follow = (userId) => async (dispatch) => {
 
    dispatch(funcProgress(true, userId));
    let response = await usersAPI.followFriends(userId)
    if (response.data.resultCode === 0) {
     
        dispatch(followConfirm(userId));
       
    } dispatch(funcProgress(false, userId));
}

export const unFollow = (userId) => async (dispatch) => {
    dispatch(funcProgress(true, userId));
    let response = await usersAPI.unFollowFriends(userId)
    if (response.data.resultCode === 0) {
        dispatch(unFollowConfirm(userId));
    }
    dispatch(funcProgress(false, userId));
}

/*export const userThunkCreator = (page, pageSize) =>{
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
}*/