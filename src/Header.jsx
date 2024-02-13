import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import { getAuth, signOut } from "firebase/auth";
import app from '../firebase.config';

const Header = () => {
  const {user, loading, cartNumber} = useContext(AuthContext);

  function userSO() {
    const auth = getAuth(app);
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  }
  window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.documentElement.scrollTop > 550) {
    document.getElementById('scroll').className = "container-fluid px-4";
  } else {
    document.getElementById('scroll').className = "container-fluid px-4 py-2";
  }
}

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark-tp p-0 container-fluid fixed-top">
        <div id='scroll' className="container-fluid px-4 py-2">
          <Link className="navbar-brand fs-6 nav-logo" to="/"><h5 className='m-0'><b>BISTRO BOSS</b></h5><small><span>R</span><span>E</span><span>S</span><span>T</span><span>A</span><span>U</span><span>R</span><span>A</span><span>N</span><span>T</span></small></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-1">
                <NavLink className={({isActive}) => isActive ? "active-lnk" : "nav-link"} to="/"><b>Home</b></NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink className={({isActive}) => isActive ? "active-lnk" : "nav-link"} to="/menu"><b>Menu</b></NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink className={({isActive}) => isActive ? "active-lnk" : "nav-link"} to="/order"><b>Order</b></NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink className={({isActive}) => isActive ? "active-lnk" : "nav-link"} to="/contact"><b>Contact</b></NavLink>
              </li>
              <li className="mx-2 position-relative">
              <i className="bi bi-cart4 fs-4"></i><span className='cart-number rounded-circle position-absolute'><b>{cartNumber}</b></span>
              </li>
            </ul>
{ (!loading) && 
  <>
  { user ?
     <><Link to='/dashboard/home' className='btn user-b text-white'><button type='button' className='btn nav-link'><b className='user'>User</b><i className="bi fs-4 ms-2 bi-person-circle"></i></button></Link><button onClick={userSO} type='button' className='btn btn-dark btn-nav'><b className=''>Log Out</b> </button></> :
    <NavLink className={({isActive}) => isActive ? "active-lnk p-0" : ""} to="/login"><button className="btn btn-dark btn-nav ms-3" type="button"><b>Login</b></button></NavLink>
}
  </>
}
      
          </div>
        </div>
      </nav>
    );
};

export default Header;
