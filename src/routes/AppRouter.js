import React from 'react'
import { Route, Routes } from 'react-router'
import AdminRouter from './AdminRouter'
import AppPublicRouters from './AppPublicRouters'
import DashboardRouters from './DashboardRouters'
import PrivateAdminRoute from './PrivateAdminRoute'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
  return (
      <Routes>
          <Route 
          path="/*" 
          element={
            <PublicRoute>
              <AppPublicRouters />
            </PublicRoute>
          } 
          />
          <Route 
          path="/vendor/*" 
          element={
            <PrivateRoute>
              <DashboardRouters />
            </PrivateRoute>} 
          />
          <Route 
          path="/admin/*" 
          element={
            <PrivateAdminRoute>
              <AdminRouter />
            </PrivateAdminRoute>}  
          />
      </Routes>
  )
}

export default AppRouter