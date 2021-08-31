import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import s from './Header.module.css'
import Logo from '../../assets/image/dolphin-logo.jpg'


const Header = (props) =>{

    
    return(
        <header className={s.header}>
        <NavLink to={'/profile'}>
        <img src={Logo}></img>
        </NavLink>
        <div className={s.loginBlock}>
        {props.isAuth?
        <div className={s.login}>{props.login} - <button onClick={props.loginOut}>Login Out</button></div>:
        <NavLink to={'/login'} className={s.nav}>Login</NavLink>}
        </div>
        </header>
    )
}
export default Header