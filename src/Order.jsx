import React from 'react';
import { Helmet } from 'react-helmet-async';
import slide1 from '../public/assets/home/slide1.jpg';

import bg from '../public/assets/shop/banner2.jpg';

const Order = () => {
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
    <li className="">
      <a className="nav-link p-0 mx-3 active" data-bs-toggle="tab" href="#home"><h5>SALAD</h5></a>
    </li>
    <li className="">
      <a className="nav-link p-0 mx-3" data-bs-toggle="tab" href="#menu1"><h5>PIZZA</h5></a>
    </li>
    <li className="">
      <a className="nav-link p-0 mx-3" data-bs-toggle="tab" href="#menu2"><h5>SOUP</h5></a>
    </li>
  </ul>

  
  <div className="tab-content">
    <div id="home" className="container tab-pane active">
    <div className="card m-3 border-0">
    <img className="card-img-top img-ch" src={slide1} alt="Card image" />
    <div className="card-body text-center bg-light">
      <h6 className="card-title">Caeser Salad</h6>
      <p className="card-text"><small>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</small></p>
      <button type='button' className="btn btn-primary btn-ch">ADD TO CART</button>
    </div>
  </div>
  <div className="card m-3 border-0">
    <img className="card-img-top img-ch" src={slide1} alt="Card image" />
    <div className="card-body text-center bg-light">
      <h6 className="card-title">Caeser Salad</h6>
      <p className="card-text"><small>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</small></p>
      <button type='button' className="btn btn-primary btn-ch">ADD TO CART</button>
    </div>
  </div>
  <div className="card m-3 border-0">
    <img className="card-img-top img-ch" src={slide1} alt="Card image" />
    <div className="card-body text-center bg-light">
      <h6 className="card-title">Caeser Salad</h6>
      <p className="card-text"><small>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</small></p>
      <button type='button' className="btn btn-primary btn-ch">ADD TO CART</button>
    </div>
  </div>
  <div className="card m-3 border-0">
    <img className="card-img-top img-ch" src={slide1} alt="Card image" />
    <div className="card-body text-center bg-light">
      <h6 className="card-title">Caeser Salad</h6>
      <p className="card-text"><small>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</small></p>
      <button type='button' className="btn btn-primary btn-ch">ADD TO CART</button>
    </div>
  </div>
  <div className="card m-3 border-0">
    <img className="card-img-top img-ch" src={slide1} alt="Card image" />
    <div className="card-body text-center bg-light">
      <h6 className="card-title">Caeser Salad</h6>
      <p className="card-text"><small>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</small></p>
      <button type='button' className="btn btn-primary btn-ch">ADD TO CART</button>
    </div>
  </div>
  <div className="card m-3 border-0">
    <img className="card-img-top img-ch" src={slide1} alt="Card image" />
    <div className="card-body text-center bg-light">
      <h6 className="card-title">Caeser Salad</h6>
      <p className="card-text"><small>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</small></p>
      <button type='button' className="btn btn-primary btn-ch">ADD TO CART</button>
    </div>
  </div>
    </div>
    <div id="menu1" className="container tab-pane fade">
    <div className="card m-3 border-0">
    <img className="card-img-top img-ch" src={slide1} alt="Card image" />
    <div className="card-body text-center bg-light">
      <h6 className="card-title">Caeser Salad</h6>
      <p className="card-text"><small>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</small></p>
      <button type='button' className="btn btn-primary btn-ch">ADD TO CART</button>
    </div>
  </div>
  <div className="card m-3 border-0">
    <img className="card-img-top img-ch" src={slide1} alt="Card image" />
    <div className="card-body text-center bg-light">
      <h6 className="card-title">Caeser Salad</h6>
      <p className="card-text"><small>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</small></p>
      <button type='button' className="btn btn-primary btn-ch">ADD TO CART</button>
    </div>
  </div>
  <div className="card m-3 border-0">
    <img className="card-img-top img-ch" src={slide1} alt="Card image" />
    <div className="card-body text-center bg-light">
      <h6 className="card-title">Caeser Salad</h6>
      <p className="card-text"><small>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</small></p>
      <button type='button' className="btn btn-primary btn-ch">ADD TO CART</button>
    </div>
  </div>
  <div className="card m-3 border-0">
    <img className="card-img-top img-ch" src={slide1} alt="Card image" />
    <div className="card-body text-center bg-light">
      <h6 className="card-title">Caeser Salad</h6>
      <p className="card-text"><small>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</small></p>
      <button type='button' className="btn btn-primary btn-ch">ADD TO CART</button>
    </div>
  </div>
  <div className="card m-3 border-0">
    <img className="card-img-top img-ch" src={slide1} alt="Card image" />
    <div className="card-body text-center bg-light">
      <h6 className="card-title">Caeser Salad</h6>
      <p className="card-text"><small>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</small></p>
      <button type='button' className="btn btn-primary btn-ch">ADD TO CART</button>
    </div>
  </div>
  <div className="card m-3 border-0">
    <img className="card-img-top img-ch" src={slide1} alt="Card image" />
    <div className="card-body text-center bg-light">
      <h6 className="card-title">Caeser Salad</h6>
      <p className="card-text"><small>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</small></p>
      <button type='button' className="btn btn-primary btn-ch">ADD TO CART</button>
    </div>
  </div>
    </div>
    <div id="menu2" className="container tab-pane fade">
    <div className="card m-3 border-0">
    <img className="card-img-top img-ch" src={slide1} alt="Card image" />
    <div className="card-body text-center bg-light">
      <h6 className="card-title">Caeser Salad</h6>
      <p className="card-text"><small>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</small></p>
      <button type='button' className="btn btn-primary btn-ch">ADD TO CART</button>
    </div>
  </div>
  <div className="card m-3 border-0">
    <img className="card-img-top img-ch" src={slide1} alt="Card image" />
    <div className="card-body text-center bg-light">
      <h6 className="card-title">Caeser Salad</h6>
      <p className="card-text"><small>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</small></p>
      <button type='button' className="btn btn-primary btn-ch">ADD TO CART</button>
    </div>
  </div>
  <div className="card m-3 border-0">
    <img className="card-img-top img-ch" src={slide1} alt="Card image" />
    <div className="card-body text-center bg-light">
      <h6 className="card-title">Caeser Salad</h6>
      <p className="card-text"><small>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</small></p>
      <button type='button' className="btn btn-primary btn-ch">ADD TO CART</button>
    </div>
  </div>
  <div className="card m-3 border-0">
    <img className="card-img-top img-ch" src={slide1} alt="Card image" />
    <div className="card-body text-center bg-light">
      <h6 className="card-title">Caeser Salad</h6>
      <p className="card-text"><small>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</small></p>
      <button type='button' className="btn btn-primary btn-ch">ADD TO CART</button>
    </div>
  </div>
  <div className="card m-3 border-0">
    <img className="card-img-top img-ch" src={slide1} alt="Card image" />
    <div className="card-body text-center bg-light">
      <h6 className="card-title">Caeser Salad</h6>
      <p className="card-text"><small>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</small></p>
      <button type='button' className="btn btn-primary btn-ch">ADD TO CART</button>
    </div>
  </div>
  <div className="card m-3 border-0">
    <img className="card-img-top img-ch" src={slide1} alt="Card image" />
    <div className="card-body text-center bg-light">
      <h6 className="card-title">Caeser Salad</h6>
      <p className="card-text"><small>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</small></p>
      <button type='button' className="btn btn-primary btn-ch">ADD TO CART</button>
    </div>
  </div>
    </div>
  </div>
            </section>
        </div>
    );
};

export default Order;