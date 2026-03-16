import Link from './Link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';


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


    const [open, setOpen] = useState(false)




    const link = navigationData.map(route => <Link route={route}></Link>)
    
    





    return (
        <div className='flex justify-between items-center mx-5 py-3'>


            <div className='flex  gap-4'>

                <div onClick={() => setOpen(!open)}  className='lg:hidden'>

                    { !open ? <span><Menu /></span> : <span> <X /> </span>}
                    
                    

                </div>


                { open ? <ul className='block'>{link}</ul> :<ul className='hidden'>{link}</ul>}

                <h1 className='font-bold text-xl'>NavBar</h1>
            </div>
            <ul className='lg:flex gap-5 p-5 hidden'>
                {
                    link
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
            <button className='bg-black p-3 rounded-lg  '>Sign in</button>
        </div>
    );
};

export default NavBar;