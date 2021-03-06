import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
//import DialogsContainers from './components/Dialogs/DialogsContainers';
import UsersContainersHooks from './components/UsersSeach/UsersContainersHooks';
import ProfileContainerHooks from './components/Profile/ProfileContainerHooks';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginForm from './components/Login/loginForm';
import React from 'react';
import { connect } from 'react-redux';
import { initializationData } from './Redux/app-reducer';
import Preloader from './utils/Preloader';
import { compose } from 'redux';
import { store } from './Redux/state-redux';
import { Provider } from 'react-redux';
import { Suspense } from 'react';

const DialogsContainers = React.lazy(() => import('./components/Dialogs/DialogsContainers'));


class App extends React.Component {

  componentDidMount() {
    this.props.initializationData();
  }

  render() {
    if (!this.props.initialization) {
      return <div><Preloader /></div>
    }
    return (
      <Switch>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Route exact path="/"><Redirect to="/profile" /></Route>
            <Route path='/profile/:userId?'
              render={() => <ProfileContainerHooks />} />
            <Suspense fallback={<Preloader />}>
              <Route path='/dialogs'
                render={() => <DialogsContainers />} />
            </Suspense>
            <Route path='/users'
              render={() => <UsersContainersHooks />} />
            <Route path='/login'
              render={() => <LoginForm />} />
          </div>
        </div>
      </Switch>
    );
  }
}

let mapStateToProps = (state) => {

  return {
    initialization: state.app.initialization,
  }
}

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializationData }))(App);

export const AppGrand = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}