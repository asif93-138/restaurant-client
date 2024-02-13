import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Link } from 'react-router-dom';

const Protected = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if (loading) {return <></>;}
    if (user) {return children;}
    return (
        <div className='container mt-5 text-center'>
            <h2>Please, login first!</h2>
            <Link to='/'><button type='button' className='btn'>Home</button></Link>
            <Link to='/login'><button type='button' className='btn'>Login</button></Link>
        </div>
    );
};

export default Protected;