import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfileUsers, getUserStatus, updateUserStatus } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';
import { getProfile, getStatus } from '../../Redux/Reselect/profile-reselect';
import { useEffect } from 'react';


const ProfileContainerHooks = (props) => {
    let userID = props.match.params.userId;

    useEffect(() => {
        props.setProfileUsers(userID);
    }, [])

    useEffect(() => {
        props.getUserStatus(userID);
    }, [])

    return <Profile {...props}
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
    />

}

let mapStateToProps = (state) => {

    return {
        profile: getProfile(state),
        status: getStatus(state)
    }
}



export default compose(connect(mapStateToProps, { setProfileUsers, getUserStatus, updateUserStatus }), withRouter, withAuthRedirect)(ProfileContainerHooks)


