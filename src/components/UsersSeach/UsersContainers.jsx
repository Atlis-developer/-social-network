import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { follow,  unFollow, currentPage, funcProgress, userThunkCreator } from '../../Redux/usersSeach-reducer';
import Users from './users';




class UsersContainers extends React.Component {

    componentDidMount() {
        
        this.props.userThunkCreator(this.page, this.props.usersPage.pageSize)}
        getCurrentPage = (page) => {
            this.props.currentPage(page)
            this.props.userThunkCreator(page, this.props.usersPage.pageSize)}


    render() {
        return <Users {...this.props}
            users={this.props.usersPage.users}
            pageSize={this.props.usersPage.pageSize}
            allPagesCount={this.props.usersPage.allPagesCount}
            numberPage={this.props.usersPage.numberPage}
            getCurrentPage={this.getCurrentPage}
            isFetching={this.props.usersPage.isFetching}
            isProgress={this.props.usersPage.isProgress} />
    }
}

const mapStateToProps = (state) => {

    return {
        usersPage: state.usersPage,
        
    }
};




export default compose(connect(mapStateToProps, { follow, unFollow, currentPage, 
    funcProgress, userThunkCreator }),withAuthRedirect) (UsersContainers)
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