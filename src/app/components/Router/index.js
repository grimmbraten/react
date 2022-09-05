import loadable from '@loadable/component';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import Guard from '~components/Guard';
import routes from '~routes';
import NotFound from '~views/NotFound';

const DynamicComponent = loadable(props => import(`~views/${props.view}`));

const Router = () => (
  <Routes>
    {routes.map(({ path, exact, view, title, guarded, redirect, description }) => (
      <Route
        path={path}
        exact={exact}
        key={`View.${view}`}
        element={
          <>
            {(title || description) && (
              <Helmet>
                {title && <title>{title}</title>}
                {description && <meta name="description" content={description}></meta>}
              </Helmet>
            )}

            {!guarded ? (
              <DynamicComponent view={view} />
            ) : (
              <Guard redirect={redirect}>
                <DynamicComponent view={view} />
              </Guard>
            )}
          </>
        }
      />
    ))}
    <Route
      path="*"
      element={
        <>
          <Helmet>
            <title>Page not found</title>
            <meta
              name="description"
              content="Looks like the page you are after does not exist"
            ></meta>
          </Helmet>

          <NotFound />
        </>
      }
    />
  </Routes>
);

export default Router;
