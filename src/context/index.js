/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { createContext, useContext, useMemo, useState } from 'react';
import { isEmpty } from 'lodash';

const AuthContext = createContext();


export function AppWrapper({ children }) {

    const [authorized, setAuthorized] = useState();

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (isEmpty(token)) {
            setAuthorized(false);
        } else {
            setAuthorized(true);
        }
    }, [])

    const handleLogout = () => {
        localStorage.clear();
        window.location = '/login'
    }

    const data = useMemo(() => ({ handleLogout, authorized }), [handleLogout, authorized])

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}
