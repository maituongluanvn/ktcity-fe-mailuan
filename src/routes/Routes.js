import React, { lazy } from 'react';

const User = lazy(() => import('pages/user/User'));
const UserDetail = lazy(() => import('pages/user/UserDetail'));
const UserCreate = lazy(() => import('pages/user/UserCreate'));

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
  {
    path: '/create',
    exact: true,
    element: <UserCreate />,
  },
];

export default Routes;
