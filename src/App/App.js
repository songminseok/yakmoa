import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import * as authActions from '../store/auth/actions';
import store from '../store/store';

import Topbar from './Topbar';
import Intro from './Intro';
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';
import Footer from './Footer';
import CssBaseline from '@material-ui/core/CssBaseline';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/database';

import { firebaseConfig } from '../config';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(`${user.email} is authenticated`);
        store.dispatch(authActions.setUser(user));
      } else {
        console.log('no user!');
        store.dispatch(authActions.setUser(null));
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <div className='App'>
        <CssBaseline />
        <Router>
          <Topbar />
          <Switch>
            <Route path='/' exact component={Intro} />
            <Redirect from='/dash' to='/dashboard' />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
