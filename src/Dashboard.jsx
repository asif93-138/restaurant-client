import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';


const Dashboard = () => {
    const { user, cartNumber, menu, arr} = useContext(AuthContext);
    const arr1 = [];
    
        menu.forEach(x => {
            if (!arr1.includes(x.category)) {arr1.push(x.category)}
        });

    return (
        <div className='p-5 w-100'>
                <h1 className='ft-cover text-center mb-4'>Hi, Welcome Back!</h1>
                <div className='d-flex justify-content-center my-4'>
                    <div className='profile-counter-bg text-white d-flex align-items-center px-5 p-4 mx-4 rounded'><i className="me-3 ps-5 bi bi-menu-down fs-1"></i><div className='pe-5'><h2 className='m-0 text-center'><b>{menu.length}</b></h2> <p className='m-0'>Menu</p></div></div>
                    <div className='profile-counter1-bg text-white d-flex align-items-center px-5 p-4 mx-4 rounded'><i className="me-3 ps-5 bi bi-list fs-1"></i><div className='pe-5'><h2 className='m-0 text-center'><b>{arr1.length}</b></h2> <p className='m-0'>Category</p></div></div>
                </div>
                <div className='d-flex'>
                    <article className='dash-s1-bg py-5 w-50'>
                        <div className='img-profile rounded-circle mx-auto'></div>
                    <h2 className='ft-cover text-center mb-0 mt-4'>{user.displayName}</h2><p className='text-center'>{user.email}</p>
                    </article>
                    <article className='dash-s2-bg py-5 w-50 text-center ft-cover'>
                    <h2 className='mb-4'>Your Activities</h2>
                    <h5 className='text-primary'>Orders: {cartNumber}</h5>
                    <h5 className='text-danger'>Payments: {arr.length}</h5>
                    </article>
                </div>
        </div>
    );
};

export default Dashboard;

// Admin uid: "0dDj3b639yZLx2MsuugAESQv7uB2"

{/* <Link to='/order'>Back</Link> &nbsp; <Link to='/admin'>Admin Panel</Link>
<p> &nbsp;&nbsp;&nbsp; </p>
{cart.map(x => <p key={x._id}>{cart.indexOf(x) + 1}. Item : {x.cart.name} <button onClick={() => deleteItem(x)} type='button' className=''>Delete</button></p>)}
<p>Items :  &nbsp;&nbsp;&nbsp; Total : ${cartA}</p>
<button type='button' className=''>Pay</button> */}