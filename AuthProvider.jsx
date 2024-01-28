import React, {createContext, useEffect, useState} from 'react';
import { getAuth, onAuthStateChanged} from 'firebase/auth';
import app from './firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app); 

const AuthProvider = ({children}) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser); setLoading(false);
		});
		return () => {
			unsubscribe();
		}
	}, [])
	const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setMenu(data))
    }, [])
	const authInfo = { user, setUser, loading, menu};

	return (
	  <AuthContext.Provider value= {authInfo}>
		{children}
	  </AuthContext.Provider>
	);
};

export default AuthProvider;