import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ScreensUser } from './User';

const ScreensRoot = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/user" />
      <Route path="/user" component={ScreensUser} />
    </Switch>
  </BrowserRouter>
);

export default ScreensRoot;
