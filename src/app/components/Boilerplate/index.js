import React from 'react';
import { useEnvironment } from '~hooks/useEnvironment';

const Boilerplate = () => {
  const { greet } = useEnvironment();

  return <div>Hello {greet}</div>;
};

export default Boilerplate;
