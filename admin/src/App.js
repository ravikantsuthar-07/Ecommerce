import { Route, Routes } from 'react-router-dom'
import AdminDashboard from './Pages/AdminDashboard';
import AdminAuthLogin from './Pages/Auth/AdminAuthLogin';
import AdminRoutes from './componets/Routes/AdminRoutes';

function App() {
    return (
        <Routes>
            <Route exact path='/admin/auth/login' element={<AdminAuthLogin />} />
            <Route exact path='/' element={<AdminRoutes />} >
                <Route exact path='admin/dashboard' element={<AdminDashboard />} />
            </Route>
            {/* <Route exact path='/admin/dashboard' element={<AdminDashboard />} /> */}
        </Routes>
    );
}


export default App;
