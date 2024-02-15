import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import bg from '../public/assets/contact/banner.jpg';
import SectionTitle from './SectionTitle';
import { AuthContext } from '../AuthProvider';

const Contact = () => {
  const {user} = useContext(AuthContext);
  function submitContact(event) {
    event.preventDefault();
    if (user) {
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const phone = form.phone.value;
      const message = form.message.value;
      const contactObj = {name, email, phone, message};
      console.log(user.uid, contactObj);
      fetch('https://bistro-restaurant-server-f60cfz50z-asif93-138.vercel.app/contact', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({user: user.uid, contactObj: contactObj})
      })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          form.reset();
          alert('Thanks for contacting Us!');
        }
      })
    }
    else {alert('Please login first!')}
  }
    return (
        <div>
                        <Helmet>
                <title>Contact | Bistro Boss</title>
            </Helmet>
            <section style={{backgroundImage: `url('${bg}')`}} className='menu-banner mb-5'>
                <div className='text-center text-white menu-txt-b'>
                    <h1>CONTACT US</h1>
                    <p>Would you like to try a dish?</p>
                </div>
            </section>
            <section className='container px-4'>
                <SectionTitle subHeading='---Visit Us---' heading='OUR LOCATION'></SectionTitle>
                <article className='d-flex'>
                    <div className='text-center border mx-3 w-100'>
                        <p className='ct-box-bg p-3 m-0'><i className="text-white fs-5 bi bi-telephone-outbound-fill"></i></p>
                        <p className='bg-light p-3 m-3 mt-0'><b>PHONE</b> <br /> <small>+38 (012) 34 56 789</small></p>
                    </div>
                    <div className='text-center border mx-3 w-100'>
                        <p className='ct-box-bg p-3 m-0'><i className="text-white fs-5 bi bi-geo-alt-fill"></i></p>
                        <p className='bg-light p-3 m-3 mt-0'><b>ADDRESS</b> <br /> <small>+38 (012) 34 56 789</small></p>
                    </div>
                    <div className='text-center border mx-3 w-100'>
                        <p className='ct-box-bg p-3 m-0'><i className="text-white fs-5 bi bi-clock-fill"></i></p>
                        <p className='bg-light p-3 m-3 mt-0'><b>WORKING HOURS</b> <br /> <small>Mon - Fri: 08:00 - 22:00<br />Sat - Sun: 10:00 - 23:00</small></p>
                    </div>
                </article>
            </section>
            <section className='container pb-5 px-4'>
                <SectionTitle subHeading='---Send Us a Message---' heading='CONTACT FORM'></SectionTitle>
                <form className='bg-light p-5' onSubmit={submitContact}>
                <div className="mb-3 mt-3">
      <label htmlFor="name"><b>Name:</b></label>
      <input type="name" className="form-control" id="name" placeholder="Enter name" name="name" />
    </div>
    <div className="mb-3 mt-3">
      <label htmlFor="email"><b>Email:</b></label>
      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required />
    </div>
    <div className="mb-3 mt-3">
      <label htmlFor="phone"><b>Phone:</b></label>
      <input type="tel" className="form-control" id="phone" placeholder="Enter phone" name="phone" />
    </div>
    <div className="mb-3 mt-3">
      <label htmlFor="message"><b>Message:</b></label>
      <textarea style={{resize: 'none'}} className="form-control" rows="5" id="message" placeholder="Your message" name="message" required></textarea>
    </div>
    <div className="form-check mb-3">
      <label className="form-check-label">
        <input className="form-check-input" type="checkbox" name="remember" required /> I'm not a Robot!
      </label>
    </div>
    <div className='text-center'><button type="submit" className="btn btn-primary btn-contact"><b>Send Message <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M22.7358 3.29705C22.8078 2.82305 22.6058 2.34805 22.2148 2.06905C21.8238 1.79105 21.3088 1.75605 20.8838 1.97905C17.4828 3.76505 5.58577 10.011 1.93177 11.929C1.48077 12.165 1.21477 12.647 1.25377 13.154C1.29277 13.661 1.62877 14.097 2.11077 14.262C3.53377 14.749 5.27277 15.346 7.99977 16.281L18.9998 6.00005L10.0978 17C13.0058 17.997 17.5528 19.556 18.6938 19.9471C19.0508 20.0701 19.4448 20.0271 19.7678 19.8321C20.0908 19.6361 20.3098 19.3071 20.3668 18.9331L22.7358 3.29705Z" fill="white"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M8.83154 17.623V20.893C8.83154 21.395 9.12654 21.85 9.58354 22.055C10.0415 22.261 10.5765 22.179 10.9515 21.845L13.7895 19.323L8.83154 17.623Z" fill="white"/>
</svg></b></button></div>
  </form>
            </section>
        </div>
    );
};

export default Contact;