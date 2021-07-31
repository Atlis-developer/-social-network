import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setProfileUsers, getUserStatus, updateUserStatus} from './../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        
        let userID = this.props.match.params.userId
        this.props.setProfileUsers(userID)
        this.props.getUserStatus (userID)}
    render() {

        return <Profile {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
        />
    }
}
let mapStateToProps = (state)=>{

    return{
        profile:state.profilePage.profile,
        status:state.profilePage.status
    }
}



export default compose (connect(mapStateToProps, {setProfileUsers, getUserStatus, updateUserStatus}), withRouter, withAuthRedirect) (ProfileContainer)


