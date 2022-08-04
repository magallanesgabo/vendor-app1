import React from 'react';
import { Navigate } from 'react-router'
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

const PrivateRoute = ({children}) => {

  const {user} = useContext(AuthContext);

  return user.logged
    ? children
    : <Navigate to='/' replace={true} />
}

PrivateRoute.prototype = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}

export default PrivateRoute