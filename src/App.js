import React from 'react';
import { Switch, Route }  from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

import './App.css';
import './pages/homepage/homepage.styles.scss';

function App() {
  return (
    <div>   
      {/* Header of all pages */}
      <Header />
      {/* Links to different pages */}
      <Switch>
        {/* Home page */}
        <Route exact path='/' component={HomePage}></Route>
        {/* Shop page */}
        <Route path='/shop' component={ShopPage}></Route>
      </Switch>  
    </div>
  );
}

export default App;