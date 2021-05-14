import React, { lazy, Suspense } from 'react';
import 'antd/dist/antd.css';
import { useRoutes } from 'react-router-dom';

import Routes from 'routes/Routes';

const Index = lazy(() => import('pages/Index'));

function App() {
  const routes = useRoutes(Routes);
  return (
    // <div>
    <Suspense fallback={<>Loading..</>}>
      <Index>{routes}</Index>
    </Suspense>
    /* </div> */
  );
}

export default App;
