import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider';
import SectionTitle from './SectionTitle';

const Cart = () => {
    const { cart, setCartNumber, cartNumber, cartA } = useContext(AuthContext);
    
    function deleteItem(data) {
        fetch(`https://bistro-restaurant-server-f60cfz50z-asif93-138.vercel.app/cart/${data._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(res => {
                if (res.deletedCount) {
                    alert('Deleted!');
                    setCartNumber(cartNumber - 1);
                }
            })
    }
    return (
        <div className='w-100 p-5 pt-0'>
            <SectionTitle subHeading='---My Cart---' heading='WANNA ADD MORE?'></SectionTitle>
            <div className='d-flex justify-content-around'>
                <h3 className='ft-cover'>Total orders: {cartNumber}</h3>
                <h3 className='ft-cover'>Price: ${cartA}</h3>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th className='ct-box-bg text-white rounded-top-4 rounded-end-0' scope="col">#</th>
                        <th className='ct-box-bg text-white' scope="col">Item Name</th>
                        <th className='ct-box-bg text-white' scope="col">Price</th>
                        <th className='ct-box-bg text-white rounded-bottom-0 rounded-end-4' scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>{cart.map(x => <tr key={x._id}><th scope='row'>{cart.indexOf(x) + 1}.</th><td>{x.cart.name}</td><td>${x.cart.price}</td><td><button onClick={() => deleteItem(x)} type='button' className='btn btn-danger'><i className="bi bi-trash"></i></button></td></tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default Cart;