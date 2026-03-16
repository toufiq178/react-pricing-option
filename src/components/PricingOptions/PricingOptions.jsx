import React, { use } from 'react';
import PricingCard from './PricingCard';
import DaisyPricingOptions from '../DaisyPricingOptions/DaisyPricingOptions';

const PricingOptions = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise)

    // console.log(pricingData);


    return (
        <div className='space-y-5 mt-10'>

            <h1 className=' text-3xl md:text-4xl lg:text-6xl font-bold text-white-500 text-center'>Gym Subscriptions</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 m-10 text-black place-items-center '>

                {/* {
                    pricingData.map((pricing, index) => <PricingCard key={index} pricing={pricing}></PricingCard>)
                } */}
                {
                    pricingData.map((pricing, index) => <DaisyPricingOptions key={index} pricing={pricing}></DaisyPricingOptions>)
                }

            </div>
        </div>
    );
};

export default PricingOptions;