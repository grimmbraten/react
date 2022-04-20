import loadable from '@loadable/component';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from '~routes';

const DynamicComponent = loadable(props => import(`~views/${props.view}`));

const App = () => (
  <Routes>
    {routes.map(({ path, exact, view }) => (
      <Route
        path={path}
        exact={exact}
        key={`View.${view}`}
        element={<DynamicComponent view={view} />}
      />
    ))}
    <Route path="*" element={<>404</>} />
  </Routes>
);

export default App;
