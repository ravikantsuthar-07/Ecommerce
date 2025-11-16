import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const SellerRoutes = () => {
    const navigate = useNavigate();
    const [ok, setOk] = useState(false);
    const [auth] = useAuth()
    useEffect(() => {
        fetch(`/api/seller/seller-auth`, {
            headers: {
                Authorization: auth.token
            }
        }).then(() => setOk(true)).catch(() => setOk(false));
    }, [auth])
    
    return <Outlet />
}

export default SellerRoutes
