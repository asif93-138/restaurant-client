import React from 'react';
import { Helmet } from 'react-helmet-async';
import MenuCoverBG from './MenuCoverBG';
import SectionTitle from './SectionTitle';
import MenuItem from './MenuItem';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Menu</title>
            </Helmet>
            <section className='menu-banner'>
                <div className='text-center text-white menu-txt-b'>
                    <h1>OUR MENU</h1>
                    <p>Would you like to try a dish?</p>
                </div>
            </section>
            <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER"></SectionTitle>
           
            <div className='container grid-boxing mb-3'>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />

                </div>
         
            <div className='text-center'><button type='button' className='btn btn-outline-dark menu-btn'>ORDER YOUR FAVORITE FOOD</button></div>
           
            <MenuCoverBG heading='DESSERTS'></MenuCoverBG>
            <div className='container grid-boxing my-5'>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                </div>
         
            <div className='text-center'><button type='button' className='btn btn-outline-dark menu-btn'>ORDER YOUR FAVORITE FOOD</button></div>
           
            <MenuCoverBG heading='PIZZA'></MenuCoverBG>
            <div className='container grid-boxing my-5'>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                </div>
         
            <div className='text-center'><button type='button' className='btn btn-outline-dark menu-btn'>ORDER YOUR FAVORITE FOOD</button></div>
           
            <MenuCoverBG heading='SALADS'></MenuCoverBG>
            <div className='container grid-boxing my-5'>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                </div>
         
            <div className='text-center'><button type='button' className='btn btn-outline-dark menu-btn'>ORDER YOUR FAVORITE FOOD</button></div>
           
            <MenuCoverBG heading='SOUPS'></MenuCoverBG>
            <div className='container grid-boxing my-5'>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                </div>
         
            <div className='text-center'><button type='button' className='btn btn-outline-dark menu-btn'>ORDER YOUR FAVORITE FOOD</button></div>
        </div>
    );
};

export default Menu;