import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setProfileUsers} from './../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';


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
        profile:state.profilePage.profile,
        
    }
}

let AuthRedirect = withAuthRedirect (ProfileContainer)
    

let nameRouter = withRouter(AuthRedirect)

export default connect(mapStateToProps, {setProfileUsers, }) (nameRouter);

