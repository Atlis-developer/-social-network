import React from 'react';
import {MyPostsContainers} from './My posts/MyPostsContainers';
import s from './Profile.module.css'
import Profileinfo from './ProfileInfo/ProfileInfo';

const Profile = (props) =>{
    
    return(
        <div className={s.content}>            
       <div><Profileinfo profile={props.profile}
       status={props.status}
       updateUserStatus={props.updateUserStatus}/></div>            
       <div><MyPostsContainers/></div>
        </div>
           
    )
}
 
export default Profile