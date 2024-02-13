import React from 'react';
import { NavLink } from 'react-router-dom';

const NavDB = () => {
    
    return (
        <nav style={{minHeight: window.innerHeight}} className="navbar dashboard-bg p-0 align-items-start">
            <ul className="navbar-nav ms-2 mt-4">
                <li className='mx-3'>
                    <NavLink className="navbar-brand fs-6 nav-logo" to="/"><h5 className='m-0'><b>BISTRO BOSS</b></h5><small><span>R</span><span>E</span><span>S</span><span>T</span><span>A</span><span>U</span><span>R</span><span>A</span><span>N</span><span>T</span></small></NavLink>
                </li>
                <li className="nav-link-bd">
                    <NavLink className={({isActive}) => isActive ? "active-lnk-db" : "nav-link"} to="/"><button type='button' className='btn'><i className="bi bi-house-door-fill fs-4"></i> <span style={{ fontSize: "initial", margin: "initial" }} className='user mx-1'>home</span></button></NavLink>
                </li>
                <li className="nav-link-bd">
                    <NavLink className={({isActive}) => isActive ? "active-lnk-db" : "nav-link"} to="/dashboard/admin"><button type='button' className='btn'><i className="bi bi-person-bounding-box fs-4"></i> <span style={{ fontSize: "initial", margin: "initial" }} className='user mx-1'>Admin Panel</span></button></NavLink>
                </li>
                <li className="nav-link-bd">
                    <NavLink className={({isActive}) => isActive ? "active-lnk-db" : "nav-link"} to="/dashboard/home"><button type='button' className='btn'><i className="bi bi-person-circle fs-4"></i> <span style={{ fontSize: "initial", margin: "initial" }} className='user mx-1'>Profile</span></button></NavLink>
                </li>
                <li className="nav-link-bd">
                    <NavLink className={({isActive}) => isActive ? "active-lnk-db" : "nav-link"} to="/dashboard/cart"><button type='button' className='btn'><i className="bi bi-cart-fill fs-4"></i> <span style={{ fontSize: "initial", margin: "initial" }} className='user mx-1'>My Cart</span></button></NavLink>
                </li>
                <li className="nav-link-bd">
                    <NavLink className={({isActive}) => isActive ? "active-lnk-db" : "nav-link"} to="/dashboard/payment"><button type='button' className='btn'><i className="bi bi-credit-card-2-back-fill fs-4"></i> <span style={{ fontSize: "initial", margin: "initial" }} className='user mx-1'>Payment</span></button></NavLink>
                </li>
                <li className="nav-link-bd">
                    <NavLink className={({isActive}) => isActive ? "active-lnk-db" : "nav-link"} to="/dashboard/history"><button type='button' className='btn'><i className="bi bi-journal-bookmark-fill fs-4"></i> <span style={{ fontSize: "initial", margin: "initial" }} className='user mx-1'>Payment History</span></button></NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavDB;