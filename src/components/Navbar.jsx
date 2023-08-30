import React from 'react';
import logo from '../assets/logo.png'
import { BiSolidUserPlus } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Navbar = () => {
  return (
    <>
        <nav className="navbar flex justify-around py-2">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="list">
                <ul className='flex mt-2'>
                    <li className='px-7'><a className='text-dark' href="#">Home</a></li>
                    <li className='px-7'><a className='text-dark' href="#">Shop</a></li>
                    <li className='px-7'><a className='text-dark' href="#">About</a></li>
                    <li className='px-7'><a className='text-dark' href="#">Contact</a></li>
                </ul>
            </div>
            <div className="icon relative flex mt-3">

                <BiSolidUserPlus className='overlayfirst mx-4 text-[1.5rem]'/>
                <p className='user absolute top-8 left-3'>user</p>

                <FiSearch className='overlaysecond mx-4 text-[1.5rem]'/>
                <p className='user absolute top-8 left-14'>search</p>

                <AiOutlineHeart className='overlaythird mx-4 text-[1.5rem]'/>
                <p className='user absolute top-8 left-32'>heart</p>
             

                <AiOutlineShoppingCart className='overlayfourth mx-4 text-[1.5rem]'/>
                <p className='user absolute top-8 left-48'>cart</p>

            

                </div>

        </nav>
    </>
    )
}

export default Navbar