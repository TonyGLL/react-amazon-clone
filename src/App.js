// REACT MODULES
import React, { useEffect } from 'react';
import './App.css';
import { useStateValue } from './StateProvider';

// EXTERNAL PACKAGES
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// COMPONENTS
import Header from './layout/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase';

function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authuser => {
      if (authuser) {
        dispatch({
          type: 'SET_USER',
          user: authuser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });
    return () => {
      unsubscribe();
    }
  }, []);

  console.log('USER >>>', user);

  return (
    <Router>

      <div className="App">

        <Switch>

          {/* This is the default route */}
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>

          <Route path="/checkout" exact>
            <Header />
            <Checkout />
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
