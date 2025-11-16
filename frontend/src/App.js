import { Route, Routes } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import AdminAuthLogin from './pages/Auth/AdminAuthLogin';
import AdminRoutes from './Components/Routes/AdminRoutes';
import AdminDashBoardPage from './pages/Admin/AdminDashBoardPage';
import AdminOrders from './pages/Admin/Orders/AdminOrders';
import AdminOrderDetals from './pages/Admin/Orders/AdminOrderDetals';
import AdminProductPage from './pages/Admin/Products/AdminProductPage';
import AdminAddNewProductPage from './pages/Admin/Products/AdminAddNewProductPage';
import AdminMainCategoryPage from './pages/Admin/Categories/AdminMainCategoryPage';
import AdminSubCategoryPage from './pages/Admin/Categories/AdminSubCategoryPage';
import SubCategoryPage from './pages/Buyer/Category/SubCategoryPage';
import ProductByCategoryIdPage from './pages/Buyer/Products/ProductByCategoryIdPage';

function App() {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/cn/:id' element={<SubCategoryPage />} />
            <Route exact path='/cn/:mcn/scn/:scn' element={<ProductByCategoryIdPage />} />
            <Route exact path='/products' element={<ProductPage />} />
            <Route exact path='/product/:id' element={<ProductDetailsPage />} />
            <Route path='/admin/auth/login' element={<AdminAuthLogin />} />
            <Route path='/admin' element={<AdminRoutes />} >
                <Route exact path='dashboard' element={<AdminDashBoardPage />} />
                <Route exact path='orders/:status' element={<AdminOrders />} />
                <Route exact path='order/:id' element={<AdminOrderDetals />} />
                <Route exact path='products/all' element={<AdminProductPage />} />
                <Route exact path='products/add-new' element={<AdminAddNewProductPage />} />
                <Route exact path='category/main' element={<AdminMainCategoryPage />} />
                <Route exact path='category/sub' element={<AdminSubCategoryPage />} />
            </Route>
        </Routes>
    );
}

export default App;
