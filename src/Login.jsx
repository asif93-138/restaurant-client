import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase.config';
import img from '../public/assets/others/auth.png';

const Login = () => {
  function userSignIn(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    form.reset();
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message; console.log(errorCode, errorMessage);
  });
}
    return (
        <div>
            <Helmet>
                <title>Login | Bistro Boss</title>
            </Helmet>
                            <section className='container p-5 login d-flex justify-content-between align-items-center'>
                            <img src={img} className='w-50 p-4' />                                
                            <form onSubmit={userSignIn} className='w-50 p-4'><h2 className='text-center'>Login</h2>
 
 <div className="mb-3 mt-3">
   <label htmlFor="email"><b>Email:</b></label>
   <input type="email" className="mt-2 form-control p-3" id="email" placeholder="Enter email" name="email" />
 </div>
 <div className="mb-3 mt-3">
   <label htmlFor="password"><b>Password:</b></label>
   <input type="password" className="mt-2 form-control p-3" id="password" placeholder="Enter password" name="password" />
 </div>

 <div className='text-center my-4'><button type="submit" className="btn btn-primary w-100 btn-login"><b>Sign In</b></button></div>
 <p className='price text-center'>New here? <b><Link style={{textDecoration: 'none'}} className='price' to="/signup">Create a New Account</Link></b></p>
 <p className='text-center'>Or sign in with</p>
<p className='text-center'><i className="bi fs-4 mx-3 bi-google"></i><i className="bi fs-4 mx-3 bi-github"></i></p>
</form>
                            </section>
        </div>
    );
};

export default Login;