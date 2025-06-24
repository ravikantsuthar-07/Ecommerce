import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Contexts/authContext';
import { Outlet } from 'react-router-dom';
import Spinner from '../Spinner';
import axios from 'axios';

const AdminRoutes = () => {
    const [ok, setOk] = useState(false);
    const [auth] = useAuth()

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get('/api/v1/auth/admin-auth',
                {
                    headers: {
                        "Authorization": auth?.token
                    }
                }
            )
            if (res.data.success) {
                setOk(true)
            } else {
                setOk(false)
            }
        }
        if (auth?.token) authCheck()
    }, [auth?.token])
    return ok ? <Outlet /> : <Spinner path='admin/auth/login' />
}

export default AdminRoutes
