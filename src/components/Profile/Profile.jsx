import React from 'react';
import { MyPostsContainers } from './My posts/MyPostsContainers';
import s from './Profile.module.css'
import Profileinfo from './ProfileInfo/ProfileInfo';
import Ava_Big from '../../assets/image/ava_big.jpg'


const Profile = (props) => {

    return (
        <div className={s.content}>
            <div className={s.backImage}>
                <img src={Ava_Big} />
            </div>
            <Profileinfo profile={props.profile}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
                addNewAvatar={props.addNewAvatar}
                onLog={props.onLog} />
            <MyPostsContainers />
        </div>

    )
}

export default Profile