import React from 'react';
import banner from '../assets/background.png';
import Button from './Button';

const Hero = () => {

    const backgroundIMG={
        background:`url(${banner})`,
        width:"100%",
        height:"100vh",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
    }
  return (
<>
<section className="hero px-7" style={backgroundIMG}>
    <div className="hero-wrapper container flex justify-end mx-auto items-center h-screen">
        <div className="hero-box bg-light py-8 px-7 w-[40%] mt-10 mr-6">
            <span className='text-para font-bold tracking-widest'>New Arrival</span>
            <h1 className='text-primary text-5xl font-bold w-[70%] my-5'>Discover Our New Collection</h1>
            <p className='w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <div className="buttonhero mt-10">
                <Button style=" font-bold bg-primary py-4 text-light px-11 text-[0.7rem]" text={"BUY NOW"}/>
            </div>
        </div>
    </div>
</section>
</>
    )
}

export default Hero