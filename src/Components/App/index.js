import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignInPage from '../SignIn';
import HomePage from '../Home';
// import AccountPage from '../Account';
import Admin from '../Admin';

import * as ROUTES from '../../Constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.ADMIN} component={Admin} />
      {/*<Route path={ROUTES.ACCOUNT} component={AccountPage} /> */}
    </div>
  </Router>
);
export default App;