import React from 'react'
import { Route, Routes } from 'react-router'
import AppPublicRouters from './AppPublicRouters'
import DashboardRouters from './DashboardRouters'
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
      </Routes>
  )
}

export default AppRouter