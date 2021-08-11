import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainers from './components/Dialogs/DialogsContainers';
import UsersContainersHooks from './components/UsersSeach/UsersContainersHooks';
import ProfileContainerHooks from './components/Profile/ProfileContainerHooks';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/login';
import React from 'react';
import { connect } from 'react-redux';
import { initializationData } from './Redux/app-reducer';
import Preloader from './utils/Preloader';


class App extends React.Component {

  componentDidMount() {
    this.props.initializationData();
  }

  render() {
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
              render={() => <ProfileContainerHooks />} />
            <Route path='/dialogs'
              render={() => <DialogsContainers />} />
            <Route path='/users'
              render={() => <UsersContainersHooks />} />
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

