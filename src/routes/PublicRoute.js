import React from 'react';
import { Navigate } from 'react-router'
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

const PublicRoute = ({children}) => {

    const {user, user:{rol}} = useContext(AuthContext);
    
    if(user.logged && rol === 'Vendor'){

      return <Navigate to='/vendor/home' replace={true} />

    }else if(user.logged && rol === 'Administrator'){

      return <Navigate to='/admin/home' replace={true} />

    }else{
      return children
    }


}



PublicRoute.prototype = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
  }
export default PublicRoute