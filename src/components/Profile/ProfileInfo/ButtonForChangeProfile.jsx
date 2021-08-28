import React from 'react';
import s from './ProfileInfo.module.css'


const ButtonForChangeProfile = (props) => {

    return (
        <div className={s.changeProfile}>
            {!props.form ?
                <input type={'button'} value={'Изменить'} onClick={() => { props.setForm(true) }} /> :
                <input type={'button'} value={'Отменить'} onClick={() => { props.setForm(false) }} />
            }
        </div>)
}

export default ButtonForChangeProfile

