import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <MyRoute path="/" exact component={SignIn} />
    <MyRoute path="/signup" component={SignUp} />

    <MyRoute path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
