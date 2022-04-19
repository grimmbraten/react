import React from 'react';
import { getRuntimeConfig } from '~config';

const Boilerplate = () => {
  const { greet } = getRuntimeConfig();

  return <div>Hello {greet}</div>;
};

export default Boilerplate;
