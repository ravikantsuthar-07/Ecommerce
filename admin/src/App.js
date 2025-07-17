import { Route, Routes } from 'react-router-dom'
import AdminDashboard from './Pages/AdminDashboard';
import AdminAuthLogin from './Pages/Auth/AdminAuthLogin';
import AdminRoutes from './componets/Routes/AdminRoutes';
import AdminPOS from './Pages/POS/AdminPOS';
import OrderPOSIndex from './Pages/POS/Orders/OrderPOSIndex';

function App() {
    return (
        <Routes>
            <Route exact path='/' element={<AdminRoutes />} >
                <Route exact path='admin/dashboard' element={<AdminDashboard />} />
                <Route exact path='admin/pos' element={<AdminPOS />} />
                <Route exact path='admin/pos/orders' element={<OrderPOSIndex />} />
            </Route>
            <Route exact path='/admin/auth/login' element={<AdminAuthLogin />} />
        </Routes>
    );
}


export default App;
