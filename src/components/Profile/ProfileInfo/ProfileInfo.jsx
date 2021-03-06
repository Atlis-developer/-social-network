import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../../utils/Preloader'
import Ava from '../../../assets/image/ava.jpg'
import StatusProfileHook from './StatusProfile/StatusProfileHook'
import ProfileInfoData from './ProfileInfoData'
import { ProfileInfoForm } from './ProfileInfoForm';
import { useState } from 'react';
import ButtonForChangeProfile from './ButtonForChangeProfile';

const Profileinfo = (props) => {

    const [form, setForm] = useState(false)
    if (!props.profile) {
        return <Preloader />
    }

    const addAvatar = (event) => {
        if (event.target.files.length) {
            props.addNewAvatar(event.target.files[0])
        }
    }


    return (
        <div className={s.profileInfo}>
            <StatusProfileHook status={props.status}
                updateUserStatus={props.updateUserStatus}
                onLog={props.onLog} />
            <span className={s.profile}>
                <div className={s.avatar}>
                    {props.profile.photos.large != null ?
                        <img src={props.profile.photos.large} /> :
                        <img src={Ava} />}
                    {props.onLog && <input type={'file'} onChange={addAvatar} />}
                </div>
                <div className={s.changeProfile}>
                    {form ? <ProfileInfoForm {...props}
                        profile={props.profile}
                        changeMyProfile={props.changeMyProfile}
                        errorMessage={props.errorMessage}
                        setForm={setForm} /> :
                        <ProfileInfoData {...props} profile={props.profile} />}
                    {props.onLog ?
                        <ButtonForChangeProfile setForm={setForm} form={form}/> : null
                    }
                </div>

            </span>
        </div>)
}

export default Profileinfo
