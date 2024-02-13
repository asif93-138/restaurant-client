import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import MenuCoverBG from './MenuCoverBG';
import SectionTitle from './SectionTitle';
import MenuItem from './MenuItem';
import { AuthContext } from '../AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Menu = () => {
    const {menu} = useContext(AuthContext);
    const navigate = useNavigate();
    let offeredMenu = menu.filter(x => x.category == "offered");
    let dessertsMenu = menu.filter(x => x.category == "dessert");
    let pizzaMenu = menu.filter(x => x.category == "pizza");
    let saladMenu = menu.filter(x => x.category == "salad");
    let soupMenu = menu.filter(x => x.category == "soup");
    function menuClick(data) {
        navigate("/order", { state: { menu: data} });
    }
    return (
        <div>
            <Helmet>
                <title>Menu | Bistro Boss</title>
            </Helmet>
            <section className='menu-banner'>
                <div className='text-center text-white menu-txt-b'>
                    <h1>OUR MENU</h1>
                    <p>Would you like to try a dish?</p>
                </div>
            </section>
            <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER"></SectionTitle>
           
            <div className='container grid-boxing mb-3'>
            {
                        offeredMenu.map(x => <MenuItem key={x._id} menu={x}></MenuItem>)
                    }

                </div>
         
            <div className='text-center'><button type='button' onClick={() => {menuClick()}} className='btn btn-outline-dark menu-btn'>ORDER YOUR FAVORITE FOOD</button></div>
           
            <MenuCoverBG heading='DESSERTS'></MenuCoverBG>
            <div className='container grid-boxing my-5'>
            {
                        dessertsMenu.map(x => <MenuItem key={x._id} menu={x}></MenuItem>)
                    }
                </div>
         
            <div className='text-center'><button type='button' onClick={() => {menuClick('dessert')}} className='btn btn-outline-dark menu-btn'>ORDER YOUR FAVORITE FOOD</button></div>
           
            <MenuCoverBG heading='PIZZA'></MenuCoverBG>
            <div className='container grid-boxing my-5'>
            {
                        pizzaMenu.map(x => <MenuItem key={x._id} menu={x}></MenuItem>)
                    }
                </div>
         
            <div className='text-center'><button type='button' onClick={() => {menuClick('pizza')}} className='btn btn-outline-dark menu-btn'>ORDER YOUR FAVORITE FOOD</button></div>
           
            <MenuCoverBG heading='SALADS'></MenuCoverBG>
            <div className='container grid-boxing my-5'>
            {
                       saladMenu.map(x => <MenuItem key={x._id} menu={x}></MenuItem>)
                    }
                </div>
         
            <div className='text-center'><button type='button' onClick={() => {menuClick('salad')}} className='btn btn-outline-dark menu-btn'>ORDER YOUR FAVORITE FOOD</button></div>
           
            <MenuCoverBG heading='SOUPS'></MenuCoverBG>
            <div className='container grid-boxing my-5'>
            {
                        soupMenu.map(x => <MenuItem key={x._id} menu={x}></MenuItem>)
                    }
                </div>
         
            <div className='text-center'><button type='button' onClick={() => {menuClick('soup')}} className='btn btn-outline-dark menu-btn'>ORDER YOUR FAVORITE FOOD</button></div>
        </div>
    );
};

export default Menu;