import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import redux store
import { Provider } from 'react-redux';
import {
  setAuthenticated,
  setUnAuthenticated,
  setUser,
} from '../redux/actions';
import store from '../redux/store';

import './App.css';
import Topbar from './Topbar';
import Intro from './Intro';
import Login from './Login';
import Signup from './Signup';
import Footer from './Footer';
import CssBaseline from '@material-ui/core/CssBaseline';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/database';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDE9-USX4OY8Afh5dGeDhX8N1Lt-28p6Ds',
  authDomain: 'yakmoa-80569.firebaseapp.com',
  databaseURL: 'https://yakmoa-80569.firebaseio.com',
  projectId: 'yakmoa-80569',
  storageBucket: 'yakmoa-80569.appspot.com',
  messagingSenderId: '692085812753',
  appId: '1:692085812753:web:65aae7b8840d046e',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  /** User Auth check status */
  React.useEffect(() => {
    return firebase.auth().onAuthStateChanged(function(user) {
      store.dispatch(!user ? setUnAuthenticated() : setAuthenticated());
      store.dispatch(setUser(user));
    });
  }, []);

  return (
    <div className='App'>
      <Provider store={store}>
        <CssBaseline />
        <Router>
          <Topbar />
          <Switch>
            <Route path='/' exact component={Intro} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
          </Switch>
        </Router>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
