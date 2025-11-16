import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import MySpinners from '../MySpinners';

const AdminRoutes = () => {
    const [ok, setOk] = useState(null); // null for loading state
    const navigate = useNavigate();

    useEffect(() => {
        const authCheck = async () => {
            try {
                const res = await axios.get('/api/v1/auth/admin-auth', {
                    withCredentials: true
                });
                if (res.data.success) {
                    setOk(true);
                } else {
                    setOk(false);
                }
            } catch (error) {
                setOk(false);
            }
        };
        authCheck();
    }, []);

    if (ok === null) return <MySpinners />;

    if (ok === false) {
        navigate('/admin/auth/login');
        return null;
    }

    return <Outlet />;
};

export default AdminRoutes;
