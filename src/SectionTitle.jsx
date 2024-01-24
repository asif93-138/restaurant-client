import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center my-5'>
            <p className='st-sh'>{subHeading}</p>
            <hr style={{width: '35%', margin: 'auto'}} />
            <h3 className='my-3'>{heading}</h3>
            <hr style={{width: '35%', margin: 'auto'}} />
        </div>
    );
};

export default SectionTitle;