import React from 'react';

const MenuItem = ({menu}) => {
    
    return (
        <div className='d-flex'>
                                <img src={menu.image} className='fake-img' />
                        <div className='text-secondary mx-4'>
                        <h5 className='menu-item-h'>{menu.name} <span className='mi-lining'>------------------</span></h5>
                    <p><small>{menu.recipe}</small></p>
                        </div>
                    <p className='price'>{menu.price}</p>
        </div>
    );
};

export default MenuItem;