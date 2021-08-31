import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogsItem.module.css'

const DialogItem = (props) =>{
    let path = '/dialog/' + props.id
    
    return(
            <div className={s.companion}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
    )
}
export default DialogItem