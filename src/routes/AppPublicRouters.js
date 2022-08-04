import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../pages/login';
import ResetPassword from '../pages/pagesVendor/resetPassword';

const AppPublicRouters = () => {

  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<h1>404</h1>}></Route>
    </Routes>
  )
}

export default AppPublicRouters