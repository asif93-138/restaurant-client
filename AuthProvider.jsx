import React, {createContext, useEffect, useState} from 'react';
import { getAuth, onAuthStateChanged} from 'firebase/auth';
import app from './firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app); 

const AuthProvider = ({children}) => {
	const [admin, setAdmin] = useState(false);
	const [cart, setCart] = useState([]);
	const [cartNumber, setCartNumber] = useState(0); 
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [menu, setMenu] = useState([]);
	const [cartA, setCartA] = useState(0);
	const [arr, setArr] = useState([]);
	const [pHLoader, setPHLoader] = useState(true);
	useEffect(() => {
		fetch('https://bistro-restaurant-server-eight.vercel.app/menu')
        .then(res => res.json())
        .then(data => {
			setMenu(data);
		})
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser); setLoading(false);
		});
		return () => {
			unsubscribe();
		}
	}, [])
	useEffect(() => {
		fetch(`https://bistro-restaurant-server-eight.vercel.app/payment/${user?.uid}`)
        .then(res => res.json())
        .then(data => setArr(data))
    }, [user, pHLoader])
    useEffect(() => {
		fetch(`https://bistro-restaurant-server-eight.vercel.app/cart/${user?.uid}`)
		.then(res => res.json())
        .then(data => {
			setCart(data); setCartNumber(data.length);
		})
    }, [user, cartNumber])
	useEffect(() => {
        let cost = 0;
        cart.forEach(element => {
            cost += element.cart.price;
        }); setCartA(cost);
    }, [cart])
	const authInfo = { user, setUser, loading, menu, cartNumber, setCartNumber, cart, setCart, admin, setAdmin, cartA, setCartA, arr, setPHLoader, pHLoader};

	return (
	  <AuthContext.Provider value= {authInfo}>
		{children}
	  </AuthContext.Provider>
	);
};

export default AuthProvider;