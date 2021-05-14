import React, { lazy } from 'react';

const User = lazy(() => import('pages/user/User'));
const UserDetail = lazy(() => import('pages/user/UserDetail'));

const Routes = [
  {
    path: '/',
    exact: true,
    element: <User />,
  },
  {
    path: '/detail',
    exact: true,
    element: <UserDetail />,
  },
];

export default Routes;
