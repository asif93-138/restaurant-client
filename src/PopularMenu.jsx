import React, { useContext, useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';


const PopularMenu = () => {
    const {menu} = useContext(AuthContext);
    let uiMenu = menu.filter(x => x.category == "popular");
    return (
        <div className='container'>
            <SectionTitle subHeading={'---Check it out---'} heading={'FROM OUR MENU'}></SectionTitle>
                <div className='grid-boxing px-4 mb-3'>
                    {
                        uiMenu.map(x => <MenuItem key={x._id} menu={x}></MenuItem>)
                    }

                </div>
         
            <div className='text-center'><Link to='/menu'><button type='button' className='btn btn-outline-dark menu-btn'>VIEW FULL MENU</button></Link></div>
        </div>
    );
};

export default PopularMenu;