import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const Payment = () => {
    const { user, cartA, setCartNumber, setPHLoader, pHLoader } = useContext(AuthContext);
    function userPayment() {
        const userPayment =  {user : user.uid, totalPrice: cartA, cardNumber : document.getElementsByTagName('input')[0].value}
        console.log(userPayment);
        fetch('http://localhost:5000/payment', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(userPayment)
          })
        .then(res => res.json())
        .then(data => console.log(data))
        fetch(`http://localhost:5000/payment/${user.uid}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Paid!');
                    setCartNumber(0);
                    setPHLoader(!pHLoader);
                }
            })
        document.getElementsByTagName('input')[0].value = '';
    }
    return (
        <div className='p-5 text-center w-100'>
            <h3 className='ft-cover'>Payment</h3>
            <h4 className='ft-cover'>Please Pay &nbsp;&nbsp;  Total Price : {cartA}</h4>
{(cartA != 0) ? <>
    <div className="input-group w-50 my-4 mx-auto">
      <span className="input-group-text m-0"><i className="bi bi-credit-card-2-back-fill"></i></span>
      <input type="text" className="form-control" placeholder="card number" />
    </div>
    <button onClick={userPayment} type='button' className='btn btn-primary px-5'>Pay</button>
</> : <></>}
        </div>
    );
};

export default Payment;