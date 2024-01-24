import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import MenuItem from './MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const items = data.filter(x => x.category == 'popular')
            setMenu(items)
        })
    }, [])
 
    return (
        <div className='container'>
            <SectionTitle subHeading={'---Check it out---'} heading={'FROM OUR MENU'}></SectionTitle>
                <div className='grid-boxing mb-3'>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                </div>
         
            <div className='text-center'><button type='button' className='btn btn-outline-dark menu-btn'>VIEW FULL MENU</button></div>
        </div>
    );
};

export default PopularMenu;