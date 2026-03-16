import React from 'react';

const Link = ({route}) => {

    // console.log(route);
    
    return (
        <li key={route.id} className='bg-amber-200 lg:bg-transparent py-1 px-1 hover:bg-amber-500 lg:text-white text-black '>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;