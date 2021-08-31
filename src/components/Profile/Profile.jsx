import React from 'react';
import { MyPostsContainers } from './My posts/MyPostsContainers';
import s from './Profile.module.css'
import Profileinfo from './ProfileInfo/ProfileInfo';
import Ava_Big from '../../assets/image/ava_big.jpg'


const Profile = (props) => {

    return (
        <div className={s.content}>
            
            <Profileinfo profile={props.profile}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
                addNewAvatar={props.addNewAvatar}
                onLog={props.onLog} 
                changeMyProfile={props.changeMyProfile}/>
            <MyPostsContainers />
        </div>

    )
}

export default Profile