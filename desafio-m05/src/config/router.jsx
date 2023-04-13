import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';

import { getItem } from './storage'

function Router() {
    function ProtectedRoutes({ redirectTo }) {
        const token = getItem('token');

        return token ? <Outlet /> : <Navigate to={redirectTo} />
    }
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route element={<ProtectedRoutes redirectTo='/login' />} >
                <Route path='/home' element={<Home />} />
            </Route>
        </Routes>
    )
}

export default Router;