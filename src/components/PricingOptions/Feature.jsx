import React from 'react';
import { CircleCheckBig } from 'lucide-react';
const Feature = ({feature}) => {
    return (
        <div className='flex items-center gap-3 justify-center mt-2'>
            <CircleCheckBig />
            <p  >{feature}</p>
        </div>
    );
};

export default Feature;