import React from 'react';
import useCheckLoggedIn from '../hook/useCheckLoggedIn';
const PrivateLayout = ({ children }) => {
  useCheckLoggedIn();
  return <div>{children}</div>;
};

export default PrivateLayout;
