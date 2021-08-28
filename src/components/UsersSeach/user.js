import React from 'react';
import s from './usersSeach.module.css'
import { NavLink } from 'react-router-dom';
import Ava from '../../assets/image/ava.jpg'


const User = (props) => {

    return <div>
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

export default User;
