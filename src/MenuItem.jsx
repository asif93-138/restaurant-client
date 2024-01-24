import React from 'react';

const MenuItem = () => {
    return (
        <div className='d-flex'>
                                <div className='fake-img'></div>
                        <div className='text-secondary mx-4'>
                        <h6 className='menu-item-h'>ROAST DUCK BREAST ------------------</h6>
                    <p><small>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</small></p>
                        </div>
                    <p className='price'>$14.5</p>
        </div>
    );
};

export default MenuItem;