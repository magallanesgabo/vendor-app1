import React from 'react';
import { Navigate } from 'react-router'
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

const PublicRoute = ({children}) => {

    const {user} = useContext(AuthContext);
    return user.logged
      ? <Navigate to='/vendor/home' replace={true} />
      : children
}



PublicRoute.prototype = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
  }
export default PublicRoute