import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AdminLogin, UserPage } from '../page'
import { Dashboard, RegisterAccount } from '../page/dashboard'



export const AuthRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/admin/*" element={ <UserPage /> } />
        <Route path="/dashboard" element={ <RegisterAccount /> } />
        

        
        <Route path="/*" element={<Navigate to="/admin" />} />
    </Routes>
</>
  )
}
