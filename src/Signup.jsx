import React from 'react';
import { Helmet } from 'react-helmet-async';
import img from '../public/assets/others/auth.png';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
        <Helmet>
            <title>Sign Up | Bistro Boss</title>
        </Helmet>
                        <section className='container p-5 login d-flex justify-content-between align-items-center'>
                                                       
                        <form className='w-50 p-4'><h2 className='text-center'>Sign Up</h2>
                        <div className="mb-3 mt-3">
<label htmlFor="name"><b>Name:</b></label>
<input type="text" className="mt-2 form-control p-3" id="name" placeholder="Enter name" name="name" />
</div>
<div className="mb-3 mt-3">
<label htmlFor="email"><b>Email:</b></label>
<input type="email" className="mt-2 form-control p-3" id="email" placeholder="Enter email" name="email" />
</div>
<div className="mb-3 mt-3">
<label htmlFor="password"><b>Password:</b></label>
<input type="password" className="mt-2 form-control p-3" id="password" placeholder="Enter password" name="password" />
</div>

<div className='text-center my-4'><button type="submit" className="btn btn-primary w-100 btn-login"><b>Sign Up</b></button></div>
<p className='price text-center'>Already registered? <b><Link style={{textDecoration: 'none'}} className='price' to="/login">Go to log in</Link></b></p>
<p className='text-center'>Or sign up with</p>
<p className='text-center'><i className="bi fs-4 mx-3 bi-google"></i><i className="bi fs-4 mx-3 bi-github"></i></p>
</form><img src={img} className='w-50 p-4' /> 
                        </section>
    </div>
    );
};

export default Signup;