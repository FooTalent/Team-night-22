import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './views/auth/Login'
import AppLayout from './layouts/AppLayout'
import Home from './views/Home'
import Register from './views/auth/Register'
import ForgotPassword from './views/auth/ForgotPassword'
import NewPassword from './views/auth/NewPassword'
import DashboardCalendar from './views/user/DashboardCalendar'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path='/' element={<Home />} index />
                    <Route path='/user/calendario' element={<DashboardCalendar />} />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route path='/auth/login' element={<Login />} />
                    <Route path='/auth/register' element={<Register />} />
                    <Route path='/auth/forgot-password' element={<ForgotPassword />} />
                    <Route path='/auth/new-password' element={<NewPassword />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}