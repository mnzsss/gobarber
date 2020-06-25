import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Profile from '../pages/Profile';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <MyRoute path="/" exact component={SignIn} />
    <MyRoute path="/signup" component={SignUp} />
    <MyRoute path="/forgot-password" component={ForgotPassword} />
    <MyRoute path="/reset-password" component={ResetPassword} />

    <MyRoute path="/dashboard" component={Dashboard} isPrivate />
    <MyRoute path="/profile" component={Profile} isPrivate />
  </Switch>
);

export default Routes;
