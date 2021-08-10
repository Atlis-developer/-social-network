import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import s from './StatusProfile.module.css'



const StatusProfileHook = (props) => {

    let [editMode, editModeFunc] = useState(false)
    let [status, statusFunc] = useState(props.status)

useEffect (() =>{
    statusFunc (props.status)
}, [props.status])

    let activeEditMode = () => {
        editModeFunc(true)
    }
    let deactiveEditMode = () => {
        editModeFunc(false)
        props.updateUserStatus(status)
    };

    let statusChange = (e) => {
        statusFunc(e.currentTarget.value)
    }



    return (
        <div className={s.status}>
            {editMode ?
                <input onChange={statusChange} autoFocus={true} onBlur={deactiveEditMode} value={status} /> :
                <span onDoubleClick={activeEditMode}>{props.status || '-*-*-*-*-'}</span>
            }
        </div>)

}



export default StatusProfileHook