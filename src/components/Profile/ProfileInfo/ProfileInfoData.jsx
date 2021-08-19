import React from 'react';
import s from './ProfileInfoData.module.css'


const ProfileInfoData = (props) => {
    
    return (
            <div className={s.grandInfo}>
                    <b>Имя:</b> {props.profile.fullName}<br/>
                    <b>Работа:</b> {props.profile.lookingForAJob ? <label>Ищу работу</label> : <label>Работаю</label>}<br/>
                    <b>Навыки:</b> {props.profile.lookingForAJobDescription}<br/>
                    <b>Про меня:</b> {props.profile.aboutMe}<br/>
                    <b className>Контакты</b><br/>
                    <b>Facebook:</b> {props.profile.contacts.facebook}<br/>
                    <b>Website:</b> {props.profile.contacts.website}<br/>
                    <b>vk:</b> {props.profile.contacts.vk}<br/>
                    <b>Twitter:</b> {props.profile.contacts.twitter}<br/>
                    <b>Instagram:</b> {props.profile.contacts.instagram}<br/>
                    <b>Youtube:</b> {props.profile.contacts.youtube}<br/>
                    <b>github:</b> {props.profile.contacts.github}<br/>
                    <b>mainLink:</b> {props.profile.contacts.mainLink}
            </div>
        )
}

export default ProfileInfoData

