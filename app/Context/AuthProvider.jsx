import React, { use, useState } from 'react'
import { getLocalStorage } from '../Utils/localStorage';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const {employees,admin}=getLocalStorage();
        setUser({employees,admin});
    }, [])

    return (
        <>
            <AuthContext.Provider value={user}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthProvider