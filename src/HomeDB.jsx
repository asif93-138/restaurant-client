import React from 'react';
import { Outlet } from 'react-router-dom';
import NavDB from './NavDB';

const HomeDB = () => {
    return (
        <div className='d-flex'>
            <NavDB />
            <Outlet />
        </div>
    );
};

export default HomeDB;