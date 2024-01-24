import React from 'react';

const MenuCoverBG = ({heading}) => {
    return (
        <section className='text-center w-100 ft-cover-bg menu-bg-p text-white'>
        <div className='menu-cover-bg p-5'>
          <h2 className='ft-cover'>{heading}</h2>
          <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</small></p>
        </div>
        </section>
    );
};

export default MenuCoverBG;