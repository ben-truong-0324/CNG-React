import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Home from './pages/Web/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './scss/styles.scss'
import './App.scss';

function App() {
  return (
    <div className="main">
      <Header />
      <Router>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.SIGN_UP} component={Home} />
        <Route path={ROUTES.SIGN_IN} component={Home} />
        <Route path={ROUTES.PASSWORD_FORGET} component={Home} />
        <Route path={ROUTES.ACCOUNT} component={Home} />
        <Route path={ROUTES.ADMIN} component={Home} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
