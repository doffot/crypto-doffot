import { Route, Routes } from "react-router-dom"
import { RegisterModal } from "../components"
import { AdminLogin, Home, LoginPage, RegisterAccount } from "../page"
import { RegistePage } from "../page/dashboard/component/RegistePage"


export const VisiteRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/*" element={ <Home /> } />
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/register" element={ <RegisterAccount /> } />
            <Route path="/login123" element={ <AdminLogin /> } />

        </Routes>
    </>
  )
}
