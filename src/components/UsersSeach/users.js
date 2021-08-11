import React from 'react';
import { NavLink } from 'react-router-dom';
import Ava from '../../assets/image/ava.jpg'
import Preloader from '../../utils/Preloader';
import Paginator from '../../utils/Paginator';
import User from './user';


const Users = (props) => {


    return <div>
        <Paginator {...props} />
        <span>{props.isFetching ?
            <Preloader isFetching={props.isFetching} /> :
            null}
        </span>
        <User {...props}/>
    </div>
}

export default Users;





/*this.props.userThunkCreator(this.page, this.props.usersPage.pageSize)
        getCurrentPage = (page) => {
            this.props.currentPage(page)
            this.props.funcFetching(true)
            usersAPI.getUsers(page, this.props.usersPage.pageSize).then(data => {
                this.props.setUsers(data.items)
                this.props.funcFetching(false)
            })
    }*/



/*      this.props.funcFetching(true)
        usersAPI.getUsers(this.page, this.props.usersPage.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.totalPage(data.totalCount)
            this.props.funcFetching(false)

        })
    }

    getCurrentPage = (page) => {
        this.props.currentPage(page)
        this.props.funcFetching(true)

        usersAPI.getUsers(page, this.props.usersPage.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.funcFetching(false)

        })*/