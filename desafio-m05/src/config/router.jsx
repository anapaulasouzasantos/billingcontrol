import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import SignIn from '../pages/SignIn';
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
            <Route path='/' element={<SignIn />} />
            {/* <Route path='/sign-up' element={<SignUp />} /> */}
                <Route path='/main' element={<Main />} />
            <Route element={<ProtectedRoutes redirectTo='/' />} >
            </Route>
        </Routes>
    )
}

export default Router;