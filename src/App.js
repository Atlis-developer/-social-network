import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainers from './components/Dialogs/DialogsContainers';
import UsersContainers from './components/UsersSeach/UsersContainers';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/login';
import React from 'react';
import { connect } from 'react-redux';
import { initializationData } from './Redux/app-reducer';
import Preloader from './components/UsersSeach/Preloader';


class App extends React.Component {

  componentDidMount() {
    this.props.initializationData();
  }

  render() {
    debugger
    if (!this.props.initialization) { 
      return <div><Preloader /></div>
    }
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Route path='/profile/:userId?'
              render={() => <ProfileContainer />} />
            <Route path='/dialogs'
              render={() => <DialogsContainers />} />
            <Route path='/users'
              render={() => <UsersContainers />} />
            <Route path='/login'
              render={() => <LoginPage />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

let mapStateToProps = (state) => {

  return {
    initialization: state.app.initialization,
  }
}

export default connect(mapStateToProps, { initializationData })(App)

