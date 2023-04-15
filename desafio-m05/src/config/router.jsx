import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
// import Login from '../pages/Login';
// import SignUp from '../pages/SignUp';
import Main from '../pages/Main';

import { getItem } from '../functions/storage'

function Router() {
    function ProtectedRoutes({ redirectTo }) {
        const token = getItem('token');

        return token ? <Outlet /> : <Navigate to={redirectTo} />
    }
    return (
        <Routes>
            {/* <Route path='/login' element={<Login />} /> */}
            {/* <Route path='/sign-up' element={<SignUp />} /> */}
            <Route path='/home' element={<Main />} />
            <Route element={<ProtectedRoutes redirectTo='/login' />} >
            </Route>
        </Routes>
    )
}

export default Router;