import React, { lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const User = lazy(() => import('pages/user/User'));
const UserDetail = lazy(() => import('pages/user/UserDetail'));

function Routes() {
  return (
    <>
      <ul>
        <li>
          <Link to='/'>index</Link>
        </li>
        <li>
          <Link to='/detail'>detail</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/'>
          <User />
        </Route>
        <Route path='/detail'>
          <UserDetail />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
