import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Home from './pages/Web/Home';
import Header from './components/Header';
import Button from './components/Button';
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
      <Button className="primary">Primary</Button>
            <Button className="secondary">secondary</Button>
            <Button>default</Button>
            <Button className="disabled">disabled</Button>
            <Button className="destructive">destructive</Button>
      <Footer />
    </div>
  );
}

export default App;
