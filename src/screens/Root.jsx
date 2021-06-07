import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScreensUser } from './User';

const ScreensRoot = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/user" component={ScreensUser} />
    </Switch>
  </BrowserRouter>
);

export default ScreensRoot;
