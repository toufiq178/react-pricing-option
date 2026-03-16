import Link from './Link';
import React from 'react';


const navigationData = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },
    {
        id: 3,
        name: "Services",
        path: "/services"
    },
    {
        id: 4,
        name: "Blog",
        path: "/blog"
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact"
    }
];




const NavBar = () => {
    return (
        <div>


            <ul className='flex gap-5 p-5'>
                {
                    navigationData.map(route => <Link route={route}></Link>)
                }
            </ul>

            {/* <ul className='flex gap-5 p-5'>
                {
                    navigationData.map(route =><li key={route.id}><a href={route.path}>{route.name}</a></li> )
                }
            </ul> */}


            {/* <ul className='flex gap-4 m-5 p-5'>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">about</a></li>
                <li><a href="/blogs">blogs</a></li>
                <li><a href="/contact">contact</a></li>
            </ul> */}
        </div>
    );
};

export default NavBar;