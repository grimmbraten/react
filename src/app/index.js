import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { client } from '~apollo/client';
import ErrorBoundary from '~components/Error';
import AppContextProvider from '~contexts';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppContextProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </AppContextProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
