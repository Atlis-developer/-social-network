import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainers from './components/Dialogs/DialogsContainers';
import UsersContainers from './components/UsersSeach/UsersContainers';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/login';

const App = (props) => {

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

export default App;
