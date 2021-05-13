import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

const Index = lazy(() => import('pages/Index'));
const User = lazy(() => import('pages/user/User'));
const UserDetail = lazy(() => import('pages/user/UserDetail'));

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to='/'>Users</Link>
            </li>
            <li>
              <Link to='/user-detail'>Detail</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Index>
              <div>
                <Route path='/' exact>
                  <User />
                </Route>
                <Route path='/user-detail'>
                  <UserDetail />
                </Route>
              </div>
            </Index>
          </Suspense>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
