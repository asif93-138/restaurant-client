import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './App.css'
import image1 from '../public/assets/home/01.jpg';
import image2 from '../public/assets/home/02.jpg';
import image3 from '../public/assets/home/03.png';
import image4 from '../public/assets/home/04.jpg';
import image5 from '../public/assets/home/05.png';
import image6 from '../public/assets/home/06.png';
import slide1 from '../public/assets/home/slide1.jpg';
import slide2 from '../public/assets/home/slide2.jpg';
import slide3 from '../public/assets/home/slide3.jpg';
import slide4 from '../public/assets/home/slide4.jpg';
import slide5 from '../public/assets/home/slide5.jpg';
import fImg from '../public/assets/home/featured.jpg';

import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import SectionTitle from './SectionTitle';
import PopularMenu from './PopularMenu';
import Header from './Header';

function App() {
  const customHeight = window.innerWidth * 900 / 1920;
  const customHeight1 = window.innerWidth * 804 / 1920;
  return (
    <>
                <Helmet>
                <title>Home</title>
            </Helmet>
          
           
            <Carousel>
                <div>
                    <img src={image1} style={{height: customHeight1, objectFit: 'cover', objectPosition: '0% 50%'}} />
                </div>
                <div>
                    <img src={image2} style={{height: customHeight1, objectFit: 'cover', objectPosition: '0% 50%'}} />
                </div>
                <div>
                    <img src={image3} style={{height: customHeight1, objectFit: 'cover', objectPosition: '0% 50%'}} />
                </div>
                <div>
                    <img src={image4} style={{height: customHeight1, objectFit: 'cover', objectPosition: '0% 50%'}} />
                </div>
                <div>
                    <img src={image5} style={{height: customHeight1, objectFit: 'cover', objectPosition: '0% 50%'}} />
                </div>
                <div>
                    <img src={image6} style={{height: customHeight1, objectFit: 'cover', objectPosition: '0% 50%'}} />
                </div>
            </Carousel>
 
          

<section className='container cstm-swiper'>
  <SectionTitle subHeading={'---From 11:00am to 10:00pm---'} heading={'ORDER ONLINE'}></SectionTitle>
<Swiper
        slidesPerView={4}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='sw-p'>
          <img src={slide1} className='swiper-img' />
          <h3 className='sw-cap text-white'>SALADS</h3>
        </SwiperSlide>
        <SwiperSlide className='sw-p'>
          <img src={slide2} className='swiper-img' />
          <h3 className='sw-cap text-white'>PIZZA</h3>
        </SwiperSlide>
        <SwiperSlide className='sw-p'>
          <img src={slide3} className='swiper-img' />
          <h3 className='sw-cap text-white'>SOUP</h3>
        </SwiperSlide>
        <SwiperSlide className='sw-p'>
          <img src={slide4} className='swiper-img' />
          <h3 className='sw-cap text-white'>DESSERT</h3>
        </SwiperSlide>
        <SwiperSlide className='sw-p'>
          <img src={slide5} className='swiper-img' />
          <h3 className='sw-cap text-white'>SALADS</h3>
        </SwiperSlide>

      </Swiper>
      
</section>
<section className='container text-center ft-cover-bg'>
<div className='bg-white p-5'>
  <h2 className='ft-cover'>Bistro Boss</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
</div>
</section>
<PopularMenu></PopularMenu>
<section className='container my-5'>
  <h1 className='text-bg-dark text-center r-font mx-auto p-5'>Call Us: <small>+88</small><sub>019</sub><small>2345</small><sub>67</sub><small>89</small><sub>10</sub></h1>
</section>
<section className='container my-5'>
        <SectionTitle subHeading='---Should Try---' heading='CHEF RECOMMENDS'></SectionTitle>
        <div className='d-flex m-5'>
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
</section>
<section style={{height: customHeight}} className='bg-img-cstm'>
<div className='text-center pt-5 my-5'>
            <p className='st-sh'>---Check it out---</p>
            <hr className='text-white' style={{width: '35%', margin: 'auto'}} />
            <h3 className='my-3 text-white'>FROM OUR MENU</h3>
            <hr className='text-white' style={{width: '35%', margin: 'auto'}} />
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <img src={fImg} className='img-ft m-3' />
          <article className='text-white art-ft m-4'>
            <p className='m-0'>March 20, 2023</p>
            <p className='m-0'>WHERE CAN I GET SOME?</p>
            <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</small></p>
            <button type='button' className='btn btn-outline-dark btn-ft'><b>READ MORE</b></button>
          </article>
        </div>
</section>
<section className='container'>
<SectionTitle subHeading={'---What Our Clients Say---'} heading={'TESTIMONIALS'}></SectionTitle>
<div id="carouselExampleDark" className="carousel carousel-dark slide text-center">

  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <i className="review-col fs-3 bi bi-star-fill mx-2"></i>
      <i className="review-col fs-3 bi bi-star-fill mx-2"></i>
      <i className="review-col fs-3 bi bi-star-fill mx-2"></i>
      <i className="review-col fs-3 bi bi-star-fill mx-2"></i>
      <i className="review-col fs-3 bi bi-star-fill mx-2"></i>
      <br /><i style={{fontSize: '80px'}} className="bi bi-quote"></i>
      <p className='w-50 mx-auto'>Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <h3 className='review-col'>JANE DOE</h3>

    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <i className="review-col fs-3 bi bi-star-fill mx-2"></i>
      <i className="review-col fs-3 bi bi-star-fill mx-2"></i>
      <i className="review-col fs-3 bi bi-star-fill mx-2"></i>
      <i className="review-col fs-3 bi bi-star-fill mx-2"></i>
      <i className="review-col fs-3 bi bi-star-fill mx-2"></i>
      <br /><i style={{fontSize: '80px'}} className="bi bi-quote"></i>
      <p className='w-50 mx-auto'>Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <h3 className='review-col'>JANE DOE</h3>

    </div>
    <div className="carousel-item">
      <i className="review-col fs-3 bi bi-star-fill mx-2"></i>
      <i className="review-col fs-3 bi bi-star-fill mx-2"></i>
      <i className="review-col fs-3 bi bi-star-fill mx-2"></i>
      <i className="review-col fs-3 bi bi-star-fill mx-2"></i>
      <i className="review-col fs-3 bi bi-star-fill mx-2"></i>
      <br /><i style={{fontSize: '80px'}} className="bi bi-quote"></i>
      <p className='w-50 mx-auto'>Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <h3 className='review-col'>JANE DOE</h3>

    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</section>

    </>
  )
}

export default App
