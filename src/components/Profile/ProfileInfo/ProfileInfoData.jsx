import React from 'react';
import s from './ProfileInfoData.module.css'


const ProfileInfoData = (props) => {
    
    return (
            <div className={s.grandInfo}>
                    Имя: {props.profile.fullName}<br/>
                    Работа: {props.profile.lookingForAJob ? <label>Ищу работу</label> : <label>Работаю</label>}<br/>
                    Навыки: {props.profile.lookingForAJobDescription}<br/>
                    <div className>Контакты</div>
                    Facebook: {props.profile.contacts.facebook}<br/>
                    Website: {props.profile.contacts.website}<br/>
                    vk: {props.profile.contacts.vk}<br/>
                    Twitter: {props.profile.contacts.twitter}<br/>
                    Instagram: {props.profile.contacts.instagram}<br/>
                    Youtube: {props.profile.contacts.youtube}<br/>
                    github: {props.profile.contacts.github}<br/>
                    mainLink: {props.profile.contacts.mainLink}
            </div>
        )
}

export default ProfileInfoData

