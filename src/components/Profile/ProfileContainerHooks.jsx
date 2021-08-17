import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfileUsers, getUserStatus, addNewAvatar, updateUserStatus, changeOnLOgActionCreate } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';
import { getGrandUserId, getOnLog, getProfile, getStatus } from '../../Redux/Reselect/profile-reselect';
import { useEffect } from 'react';


const ProfileContainerHooks = (props) => {
    
    let userID = props.match.params.userId;


    useEffect(() => {
        if (!userID) {
            userID = props.id; 
        }
        props.setProfileUsers(userID);
        
    }, [])

    useEffect(() => {
        props.getUserStatus(userID);
    }, [])

    useEffect(() => {
        if (!userID) {
            userID = props.id   
        }
        props.setProfileUsers(userID);
    }, [userID])

    useEffect(() => {
        if ( userID === props.id ) {
            props.changeOnLOgActionCreate(true)   
        }else{
        props.changeOnLOgActionCreate(false)}
    }, [userID])
 
    return <Profile {...props}
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
        onLog={props.onLog}
        addNewAvatar={props.addNewAvatar}
    />

}

let mapStateToProps = (state) => {

    return {
        profile: getProfile(state),
        status: getStatus(state),
        id: getGrandUserId(state),
        onLog: getOnLog(state)
    }
}



export default compose(connect(mapStateToProps, { setProfileUsers, getUserStatus, updateUserStatus, 
    changeOnLOgActionCreate, addNewAvatar }), withRouter, withAuthRedirect)(ProfileContainerHooks)


