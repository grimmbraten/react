import React from 'react';
import { EnvironmentProvider } from './environment';

const AppContextProvider = ({ children }) => <EnvironmentProvider>{children}</EnvironmentProvider>;

export default AppContextProvider;
