import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setProfileUsers} from './../../Redux/profile-reducer'
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {

    componentDidMount() {
        
        let userID = this.props.match.params.userId
        this.props.setProfileUsers(userID)}
    render() {

        return <Profile {...this.props}
        profile={this.props.profile}/>
    }
}
let mapStateToProps = (state)=>{

    return{
        profile:state.profilePage.profile
    }
}

let nameRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfileUsers, }) (nameRouter);

