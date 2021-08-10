import React from "react"
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

let mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth){ return <Redirect to={'/login'} />}
            return <Component {...this.props}/>
        }
    }
    let ConnectRedictComponent = connect (mapStateToProps)(RedirectComponent);

    return ConnectRedictComponent
}


/*export const withAuthRedirect = (Component) =>{
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return <Component/>
}*/