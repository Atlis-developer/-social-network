import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { follow,  unFollow, currentPage, funcProgress, userThunkCreator } from '../../Redux/usersSeach-reducer';
import Users from './users';
import { withRouter } from 'react-router-dom';
import { getUsersPage } from '../../Redux/Reselect/users-reselect';
import { useEffect } from 'react';



const UsersContainersHooks = (props) => {

useEffect( (page) => {
    props.userThunkCreator(page, props.usersPage.pageSize)
}, [])

let getCurrentPage = (page) => {
    props.currentPage(page)
    props.userThunkCreator(page, props.usersPage.pageSize)}

        return <Users {...props}
            users={props.usersPage.users}
            pageSize={props.usersPage.pageSize}
            allPagesCount={props.usersPage.allPagesCount}
            numberPage={props.usersPage.numberPage}
            getCurrentPage={getCurrentPage}
            isFetching={props.usersPage.isFetching}
            isProgress={props.usersPage.isProgress} />
    
}

const mapStateToProps = (state) => {

    return {
        usersPage: getUsersPage(state),
        
    }
};




export default compose(connect(mapStateToProps, { follow, unFollow, currentPage, 
    funcProgress, userThunkCreator }), withRouter, withAuthRedirect) (UsersContainersHooks)

    
/*this.props.funcFetching(true)
        usersAPI.getUsers(this.page, this.props.usersPage.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.totalPage(data.totalCount)
            this.props.funcFetching(false)

        })
    }

    */

 /*   getCurrentPage = (page) => {
        this.props.currentPage(page)
        this.props.funcFetching(true)
        
        usersAPI.getUsers(page, this.props.usersPage.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.funcFetching(false)
            
        })*/
    

/*const mapDispatchToPops = (dispatch) => {

    return {
        follow: (userId) => { dispatch(addToFriensdActionCreate(userId)) },
        unFollow: (userId) => { dispatch(deleteFromFriendsActionCreate(userId)) },
        setUsers: (users) => { dispatch(addNewUsers(users)) },
        currentPage: (page) => { dispatch(selectionPage(page)) },
        totalPage: (pages) => { dispatch(totalPage(pages)) },
        getCurrentPage: (p) => { dispatch(this.getCurrentPage(p)) },
        funcFetching: (isFetching) => { dispatch(funcFetching(isFetching)) }
    }
}*/