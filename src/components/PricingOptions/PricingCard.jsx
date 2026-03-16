import React from 'react';
import Feature from './Feature';

const PricingCard = ({pricing}) => {

    const {name, price , information ,features} =  pricing
    
    return (
        <div className='card card-body bg-amber-400 shadow-sm shadow-amber-700'>
            <h1 className='text-4xl font-bold '>{name}</h1>
            <h3 className='text-2xl  font-bold '>{price}</h3>

            <div className=' card p-5 w-full bg-amber-500 text-black font-semibold  '>

                <p>{information}</p>
                {
                    features.map((feature , index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
        </div>
    );
};

export default PricingCard;