import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import bg from '../public/assets/shop/banner2.jpg';
import { AuthContext } from '../AuthProvider';
import { useLocation } from 'react-router-dom';


const Order = () => {
  
  const [dessert, setDessert] = useState([]);
  const [pizza, setPizza] = useState([]);
  const [salad, setSalad] = useState([]);
  const [soup, setSoup] = useState([]);
  const {menu, cartNumber, setCartNumber, user} = useContext(AuthContext);
  const location = useLocation(); 
  let dessertsMenu = menu.filter(x => x.category == "dessert"); 
  let pizzaMenu = menu.filter(x => x.category == "pizza"); 
  let saladMenu = menu.filter(x => x.category == "salad"); 
  let soupMenu = menu.filter(x => x.category == "soup"); 
  const dessertPages = [...Array(Math.ceil(dessertsMenu.length / 6)).keys()];
  const pizzaPages = [...Array(Math.ceil(pizzaMenu.length / 6)).keys()];
  const saladPages = [...Array(Math.ceil(saladMenu.length / 6)).keys()];
  const soupPages = [...Array(Math.ceil(soupMenu.length / 6)).keys()];
  function dessertPH(id) {
    setDessert(dessertsMenu.slice(6 * id, 6 * id + 6)); 
    const currentElement = document.getElementById('menu3').children[1].children;
    for (const x of currentElement) {
      if (x.className == 'page-item active') {x.className = 'page-item';}
    }
    currentElement[id].className = 'page-item active';
  }
  function pizzaPH(id) {
    setPizza(pizzaMenu.slice(6 * id, 6 * id + 6)); 
    const currentElement = document.getElementById('menu1').children[1].children;
    for (const x of currentElement) {
      if (x.className == 'page-item active') {x.className = 'page-item';}
    }
    currentElement[id].className = 'page-item active';
  }
  function saladPH(id) {
    setSalad(saladMenu.slice(6 * id, 6 * id + 6)); 
    const currentElement = document.getElementById('home').children[1].children;
    for (const x of currentElement) {
      if (x.className == 'page-item active') {x.className = 'page-item';}
    }
    currentElement[id].className = 'page-item active';
  }
  function soupPH(id) {
    setSoup(soupMenu.slice(6 * id, 6 * id + 6)); 
    const currentElement = document.getElementById('menu2').children[1].children;
    for (const x of currentElement) {
      if (x.className == 'page-item active') {x.className = 'page-item';}
    }
    currentElement[id].className = 'page-item active';
  }
  useEffect(() => {
    setDessert(dessertsMenu.slice(0, 6));
    setPizza(pizzaMenu.slice(0, 6));
    setSalad(saladMenu.slice(0, 6));
    setSoup(soupMenu.slice(0, 6));
   
    if (document.getElementById('s-0')) {
      document.getElementById('s-0').classList.add('active');
    }
    if (document.getElementById('p-0')) {
      document.getElementById('p-0').classList.add('active');
    }
    if (document.getElementById('o-0')) {
      document.getElementById('o-0').classList.add('active');
    }
    if (document.getElementById('d-0')) {
      document.getElementById('d-0').classList.add('active');
    }
  }, [menu])
  useEffect(() => {
    switch (location.state?.menu) {
      case 'dessert':
        if (document.getElementsByClassName('tab-content').length) {
          document.getElementsByClassName('nav-link p-0 mx-3')[0].classList.remove('active');
          document.getElementsByClassName('nav-link p-0 mx-3')[3].classList.add('active');
          document.getElementById('home').classList.remove('active');
          document.getElementById('menu3').classList.add('active');
          document.getElementById('menu3').classList.add('show');
        }
        break;
      case 'pizza':
        if (document.getElementsByClassName('tab-content').length) {
          document.getElementsByClassName('nav-link p-0 mx-3')[0].classList.remove('active');
          document.getElementsByClassName('nav-link p-0 mx-3')[1].classList.add('active');
          document.getElementById('home').classList.remove('active');
          document.getElementById('menu1').classList.add('active');
          document.getElementById('menu1').classList.add('show');
        }
        break;
      case 'soup':
        if (document.getElementsByClassName('tab-content').length) {
          document.getElementsByClassName('nav-link p-0 mx-3')[0].classList.remove('active');
          document.getElementsByClassName('nav-link p-0 mx-3')[2].classList.add('active');
          document.getElementById('home').classList.remove('active');
          document.getElementById('menu2').classList.add('active');
          document.getElementById('menu2').classList.add('show');
        }
    }
  }, [location.state?.menu])
  function tabUpdate(id) {
    setDessert(dessertsMenu.slice(0, 6));
    setPizza(pizzaMenu.slice(0, 6));
    setSalad(saladMenu.slice(0, 6));
    setSoup(soupMenu.slice(0, 6));
    
    const currentElement = document.getElementById(id).children[1].children;
    for (const x of currentElement) {
      if (x.className == 'page-item active') {x.className = 'page-item';}
    }
    document.getElementById('s-0').classList.add('active');
    document.getElementById('p-0').classList.add('active');
    document.getElementById('o-0').classList.add('active');
    document.getElementById('d-0').classList.add('active');
  }
  function addToCart(data) {
    if (user) {
      const cartC = {user: user.uid, cart : data}
      // console.log(cartID);
      fetch('https://bistro-restaurant-server-eight.vercel.app/cart', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartC)
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.insertedId) {
          setCartNumber(cartNumber + 1);
          alert('Added to cart!');
        }
      })
    }
    else {alert('Please login first!');}
  }
  // console.log(user);
  
    return (
        <div>
            <Helmet>
                <title>Order | Bistro Boss</title>
            </Helmet>
            <section style={{backgroundImage: `url('${bg}')`}} className='menu-banner mb-5'>
                <div className='text-center text-white menu-txt-b'>
                    <h1>ORDER FOOD</h1>
                    <p>Would you like to try a dish?</p>
                </div>
            </section>
            <section className='container text-center'>
          
  <ul className="nav nav-tabs my-5" role="tablist">
    <li className="" onClick={() => tabUpdate('home')}>
      <a className="nav-link p-0 mx-3 active" data-bs-toggle="tab" href="#home"><h5>SALAD</h5></a>
    </li>
    <li className="" onClick={() => tabUpdate('menu1')}>
      <a className="nav-link p-0 mx-3" data-bs-toggle="tab" href="#menu1"><h5>PIZZA</h5></a>
    </li>
    <li className="" onClick={() => tabUpdate('menu2')}>
      <a className="nav-link p-0 mx-3" data-bs-toggle="tab" href="#menu2"><h5>SOUP</h5></a>
    </li>
    <li className="" onClick={() => tabUpdate('menu3')}>
      <a className="nav-link p-0 mx-3" data-bs-toggle="tab" href="#menu3"><h5>DESSERT</h5></a>
    </li>
  </ul>

  
  <div className="tab-content">
    <div id="home" className="container tab-pane active">
      <article>
      {
        salad.map(x =>     <div key={x._id} className="card m-3 border-0">
        <img className="card-img-top img-ch" src={x.image} alt="Card image" />
        <span className='o-pt text-bg-dark py-2 px-3 m-0 rounded'>${x.price}</span>
        <div className="card-body text-center bg-light">
          <h6 className="card-title">{x.name}</h6>
          <p className="card-text"><small>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</small></p>
          <button onClick={() => addToCart(x)} type='button' className="btn btn-primary btn-ch">ADD TO CART</button>
        </div>
      </div>)
      }
      </article>
      <ul className="pagination justify-content-center mt-4">
        
      {saladPages.map(x => <li id={`s-${x}`} className="page-item" key={x}><button onClick={() => {saladPH(x)}} type='button' className='page-link'>{x + 1}</button></li>)}
      
      </ul>
    </div>
    <div id="menu1" className="container tab-pane fade">
    <article>
    {
        pizza.map(x =>     <div key={x._id} className="card m-3 border-0">
        <img className="card-img-top img-ch" src={x.image} alt="Card image" />
        <span className='o-pt text-bg-dark py-2 px-3 m-0 rounded'>${x.price}</span>
        <div className="card-body text-center bg-light">
          <h6 className="card-title">{x.name}</h6>
          <p className="card-text"><small>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</small></p>
          <button onClick={() => addToCart(x)} type='button' className="btn btn-primary btn-ch">ADD TO CART</button>
        </div>
      </div>)
      }
      </article>
      <ul className="pagination justify-content-center mt-4">
        
      {pizzaPages.map(x => <li id={`p-${x}`} className="page-item" key={x}><button onClick={() => {pizzaPH(x)}} type='button' className='page-link'>{x + 1}</button></li>)}
      
      </ul>
    </div>
    <div id="menu2" className="container tab-pane fade">
    <article>
    {
        soup.map(x =>     <div key={x._id} className="card m-3 border-0">
        <img className="card-img-top img-ch" src={x.image} alt="Card image" />
        <span className='o-pt text-bg-dark py-2 px-3 m-0 rounded'>${x.price}</span>
        <div className="card-body text-center bg-light">
          <h6 className="card-title">{x.name}</h6>
          <p className="card-text"><small>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</small></p>
          <button onClick={() => addToCart(x)} type='button' className="btn btn-primary btn-ch">ADD TO CART</button>
        </div>
      </div>)
      }
      </article>
      <ul className="pagination justify-content-center mt-4">
        
      {soupPages.map(x => <li id={`o-${x}`} className="page-item" key={x}><button onClick={() => {soupPH(x)}} type='button' className='page-link'>{x + 1}</button></li>)}
      
      </ul>
    </div>
    <div id="menu3" className="container tab-pane fade">
    <article>
    {
        dessert.map(x =>     <div key={x._id} className="card m-3 border-0">
        <img className="card-img-top img-ch" src={x.image} alt="Card image" />
        <span className='o-pt text-bg-dark py-2 px-3 m-0 rounded'>${x.price}</span>
        <div className="card-body text-center bg-light">
          <h6 className="card-title">{x.name}</h6>
          <p className="card-text"><small>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</small></p>
          <button onClick={() => addToCart(x)} type='button' className="btn btn-primary btn-ch">ADD TO CART</button>
        </div>
      </div>)
      }
      </article>
      <ul className="pagination justify-content-center mt-4">
        
      {dessertPages.map(x => <li id={`d-${x}`} className="page-item" key={x}><button onClick={() => {dessertPH(x)}} type='button' className='page-link'>{x + 1}</button></li>)}
      
      </ul>
    </div>
  </div>
            </section>
            
        </div>
    );
};

export default Order;