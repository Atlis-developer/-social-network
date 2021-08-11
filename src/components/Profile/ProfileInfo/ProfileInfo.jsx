import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../../utils/Preloader'
import Ava from '../../../assets/image/ava.jpg'
import StatusProfileHook from './StatusProfile/StatusProfileHook'

const Profileinfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.profileInfo}>
            <StatusProfileHook status={props.status}
                updateUserStatus={props.updateUserStatus} />
            <span className={s.profile}>
                <div className={s.avatar}>
                    {props.profile.photos.large != null ?
                        <img src={props.profile.photos.large} /> :
                        <img src={Ava} />}
                </div>
                <div className={s.contact}>
                    <p>Facebook: {props.profile.contacts.facebook}</p>
                    <p>Website: {props.profile.contacts.website}</p>
                    <p>vk: {props.profile.contacts.vk}</p>
                    <p>Twitter: {props.profile.contacts.twitter}</p>
                    <p>Instagram: {props.profile.contacts.instagram}</p>
                    <p>Youtube: {props.profile.contacts.youtube}</p>
                    <p>github: {props.profile.contacts.github}</p>
                    <p>mainLink: {props.profile.contacts.mainLink}</p>
                </div>
                <div className={s.information}>
                    <p>Имя: {props.profile.fullName}</p>
                    <p>Работа: {props.profile.lookingForAJobDescription}</p>
                    {props.profile.lookingForAJob ? <p>Ищу работу</p> :
                        <p>Работаю</p>}
                </div>
            </span>
        </div>)
}

export default Profileinfo