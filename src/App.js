import React from 'react';
import { Switch, Route }  from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

import './App.css';
import './pages/homepage/homepage.styles.scss';

class App extends React.Component {
  // Storing information of current user
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
  
  // Using O Auth authentication
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});
      console.log(user);
    })
  }

  // Signing out of O Auth authentication
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>   
        {/* Header of all pages */}
        <Header currentUser={this.state.currentUser} />
        {/* Links to different pages */}
        <Switch>
          {/* Home page */}
          <Route exact path='/' component={HomePage}></Route>
          {/* Shop page */}
          <Route path='/shop' component={ShopPage}></Route>
          {/* Sign In and Sign Up Page */}
          <Route path='/signin' component={SignInAndSignUpPage}></Route>
        </Switch>  
      </div>
    );
  }
}

export default App;