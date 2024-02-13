import React, { useContext, useDeferredValue, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider';
import SectionTitle from './SectionTitle';

const PayHistory = () => {
    const {user, arr} = useContext(AuthContext);
    
   
    return (
        <div className='w-100 p-5 pt-0'>
          <SectionTitle subHeading='---At a Glance!---' heading='PAYMENT HISTORY'></SectionTitle>
          <h3 className='ft-cover mb-3'>Total Payments : {arr.length}</h3>
          <table className="table">
                <thead>
                    <tr>
                        <th className='ct-box-bg text-white rounded-top-4 rounded-end-0' scope="col">#</th>
                        <th className='ct-box-bg text-white' scope="col">Tranx ID</th>
                        <th className='ct-box-bg text-white' scope="col">Price</th>
                        <th className='ct-box-bg text-white rounded-bottom-0 rounded-end-4' scope="col">Card No</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map(x => <tr key={x._id}><th scope='row'>{arr.indexOf(x) + 1}.</th><td>{x._id}</td><td>${x.totalPrice}</td><td>{x.cardNumber}</td></tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default PayHistory;