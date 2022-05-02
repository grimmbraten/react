import loadable from '@loadable/component';
import { AppShell, Header, Text } from '@mantine/core';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from '~routes';

const DynamicComponent = loadable(props => import(`~views/${props.view}`));

const App = () => (
  <AppShell
    header={
      <Header p={30}>
        <Text>{"It's a WRAP"}</Text>
      </Header>
    }
  >
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
  </AppShell>
);

export default App;
