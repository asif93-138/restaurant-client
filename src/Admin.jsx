import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const {user, loading, setAdmin, admin } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const [payments, setPayments] = useState([]);
    const [messages, setMessages] = useState([]);
    const [earnings, setEarnings] = useState(0);
    const [dataL, setDataL] = useState(true);
    const navigate = useNavigate();
    if (loading) {return <></>;}
    if (!user) {return navigate('/dashboard');}
    function adminPanel() {
       let x = document.getElementById('admin').value;
       if (x == 'AdminIsAdmin') {setAdmin(true)}
       else {alert('Access denied!!')}
    }
    useEffect(() => {
        fetch('https://bistro-restaurant-server-f60cfz50z-asif93-138.vercel.app/admin')
        .then(res => res.json())
        .then(data => {
            setOrders(data.orders); setPayments(data.payments); setMessages(data.messages); setDataL(false);
        })
    }, [])
    useEffect(() => {
        let income = 0;
        payments.forEach(element => {
            income += element.totalPrice;
        });
        setEarnings(income);
    }, [payments])
    function showMessages() {
        document.getElementsByTagName('article')[0].classList.remove('d-none');
        document.getElementsByTagName('button')[6].classList.add('d-none');
    }
    if (dataL) {return <h1 className='text-center'>Loading..</h1>}
    return (
        <div className='container text-center p-5'>
            {admin ? <>
            <h3 className='mb-5'>Welcome to Admin Panel!</h3>
            <p><b>Total orders </b>: {orders.length}</p>
            <p><b>Total payments </b>: {payments.length}</p>
            <p><b>Total earnings </b>: ${earnings.toFixed(2)}</p>
            <p><b>Messages </b>: {messages.length}</p>
            <button type='button' onClick={showMessages} className=''>view all messages</button>
            <article className='d-none'>
                {messages.map(x => (<div key={x._id}>
                    <h4>Message no : {messages.indexOf(x) + 1}</h4>
                    <p>User ID : {x.user}</p>
                    <p>Name : {x.contactObj.name}</p>
                    <p>Email : {x.contactObj.email}</p>
                    <p>Phone : {x.contactObj.phone}</p>
                    <p>Message : {x.contactObj.message}</p>
                </div>))}
            </article>
            </> : <>
            <p>Enter your admin id below : </p>
            <input id='admin' type='text' className='' placeholder='admin id' />
            <button type='button' className='' onClick={adminPanel}>Submit</button>
            </>}
        </div>
    );
};

export default Admin;