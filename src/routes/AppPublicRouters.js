import React from 'react'
import { Route, Routes } from 'react-router'
import Facebook from '../components/ImagesView/Facebook';
import Instagram from '../components/ImagesView/Instagram';
import Error404 from '../pages/Error404';
import Login from '../pages/login';
import ResetPassword from '../pages/pagesVendor/resetPassword';

const AppPublicRouters = () => {

  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="facebook" element={<Facebook />} />
        <Route path="instagram" element={<Instagram />} />
        <Route path="*" element={<Error404 />}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
    </Routes>
  )
}

export default AppPublicRouters