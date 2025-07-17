import { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        loading: true,
    });

    useEffect(() => {
        // Fetch user from backend cookie session
        const fetchUser = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/profile', { withCredentials: true });
                setAuth({ user: data.user, loading: false });
            } catch (error) {
                setAuth({ user: null, loading: false });
            }
        };

        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
