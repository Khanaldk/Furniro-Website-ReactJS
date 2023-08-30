import React from 'react'
import Button from './Button'

const Footer = () => {
  return (
    <>
    <footer className="foot flex justify-around mt-8 pb-10">
        <div className="furni">
            <h2 className='text-[1.8rem] font-semibold pb-8'>Funiro.</h2>
            <p className='text-foot w-[90%]'>400 University Drive Suite 200 Coral Gables,
            </p>
            <p className='text-foot w-[65%]'>FL 33134 USA</p>
        </div>
        <div className="links">
            <h4 className='text-foot pb-8'>Links</h4>
            <ul>
                <li className='py-4'><a href="#">Home</a></li>
                <li className='py-4'><a href="#">Shop</a></li>
                <li className='py-4'><a href="#">About</a></li>
                <li className='py-4'><a href="#">Contact</a></li>

            </ul>
        </div>
        <div className="help">
            <h4 className='text-foot pb-8'>Help</h4>
            <ul>

                <li className='py-4'><a href="#">Payment Options</a></li>
                <li className='py-4'><a href="#">Returns</a></li>
                <li className='py-4'><a href="#">Privacy Policies</a></li>

            </ul>
        </div>

        <div className="news">
            <h4 className='text-foot pb-8 pl-2'>Newsletter</h4>
            <div className="form">
                <input className='border-b-2 mx-2 pr-8 outline-none' type="email" name="email" id="email" placeholder='Enter Your Email Address'/>
                
                <Button style={"text-center font-semibold border-b-2"} text={"SUBSCRIBE"}/>
            </div>
        </div>

    </footer>

    <hr className='mb-10 w-[90%] ml-16 text-foot'/>
    <div className="lastpart ml-16">
        <p>2023 furino. All rights reverved</p>
    </div>
    </>
    )
}

export default Footer