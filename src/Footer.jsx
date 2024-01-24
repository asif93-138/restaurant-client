import React from 'react';
const Footer = () => {
    return (
        <footer className='text-center mt-5'>
            <section className='d-flex align-items-stretch'>
            <article className='py-5 text-bg-secondary bg-cstm-fb w-100'>
                <h4>CONTACT US</h4>
                <p className='m-0'>123 ABS Street, Uni 21, Bangladesh</p>
                <p className='m-0'>+88 123456789</p>
                <p className='m-0'>Mon - Fri: 08:00 - 22:00</p>
                <p className='m-0'>Sat - Sun: 10:00 - 23:00</p>
            </article>
            <article className='py-5 text-bg-dark bg-cstm-fa w-100'>
                <h4>Follow US</h4>
                <p className=''>Join us on social media</p>
                <i className="fs-2 mx-2 bi bi-facebook"></i>
                <i className="fs-2 mx-2 bi bi-instagram"></i>
                <i className="fs-2 mx-2 bi bi-twitter"></i>
            </article>
            </section>
            <section style={{backgroundColor: 'black'}} className='text-white py-3'>
                <p className='m-0'>Copyright © CulinaryCloud. All rights reserved.</p>
            </section>
        </footer>
    );
};

export default Footer;