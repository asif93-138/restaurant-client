import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase.config';
import img from '../public/assets/others/auth.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  function userSignIn(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;

    if (validateCaptcha(captcha, false)) {
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          setError('');
          form.reset();
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message; console.log(errorCode, errorMessage); setError(errorMessage);
          
        });
    }
    else {
      var toastElList = [].slice.call(document.querySelectorAll('.toast'))
      var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
      })
      toastList.forEach(toast => toast.show())
    }
  }
  useEffect(() => {
    loadCaptchaEnginge(6);
    if (document.getElementsByTagName('div').length >= 7) {
      document.getElementsByTagName('div')[7].style.backgroundColor = 'white';
      document.getElementById('reload_href').style.paddingLeft = '20px';
    }
  }, [])
  function siWG() {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setError('');
        navigate("/");
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, credential); setError(errorMessage);
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
          <p className='mb-2'><b>Captcha:</b></p>
          <LoadCanvasTemplate />
          <div className="mb-3 mt-3">
            <input type="text" className="mt-2 form-control p-3" id="captcha" placeholder="Enter captcha" name="captcha" />
          </div>

          {error && <p className='text-danger'><b>{error}</b></p>}
          <div className='text-center my-4'><button type="submit" className="btn btn-primary w-100 btn-login"><b>Sign In</b></button></div>
          <p className='price text-center'>New here? <b><Link style={{ textDecoration: 'none' }} className='price' to="/signup">Create a New Account</Link></b></p>
          <p className='text-center mb-2'>Or sign in with</p>
          <p className='text-center d-flex justify-content-center align-items-center'><button type='button' onClick={siWG} className='btn d-flex align-items-center p-0'><i className="bi fs-3 bi-google"></i> <h5 className='m-0 mx-2'><b>Google</b></h5></button></p>
        </form>
      </section>
      <div className="toast border border-4 border-danger">
        <div className="toast-header text-danger bg-white">
          <strong className="me-auto">Wrong Captcha!</strong>
          <button type="button" className="btn-close" data-bs-dismiss="toast"><b>&#9932;</b></button>
        </div>
        <div className="toast-body text-danger bg-white">
          <p>Please, enter captcha carefully.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;