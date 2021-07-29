import React from 'react';
import s from './usersSeach.module.css'
import { NavLink } from 'react-router-dom';
import Ava from '../../assets/image/ava.jpg'
import Preloader from './Preloader';


const Users = (props) => {
    
    let pagesCount = Math.ceil(props.allPagesCount / props.pageSize)
    let page = [];
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i)
    }
    return <div>
        <div>
            {page.map(page => {
                return <span className={props.numberPage === page ? s.spa :
                    s.spp} onClick={() => { props.getCurrentPage(page) }}> {page}</span>
            })}
        </div>
        <span>{props.isFetching ?
        <Preloader isFetching={props.isFetching} />:
        null}
        </span>
        {props.users.map(u =>
            <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            {u.photos.small != null ?
                                <img src={u.photos.small} className={s.avatar} /> :
                                <img src={Ava} className={s.avatar} />}
                        </NavLink>
                    </div>
                    <div>
                        {u.friend ?
                            <button disabled={props.isProgress.some(id => id === u.id)} onClick={() => {
                                props.unFollow(u.id);
                            }}>Удалить</button> :
                            <button disabled={props.isProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id);
                            }}>Добавить</button>}
                    </div>

                </span>
                <span>
                    <div>{u.name}</div>
                    <div> {u.status}</div>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </div>)}
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