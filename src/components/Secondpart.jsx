import React from 'react';
import shofa from '../assets/shofa.png';
import table from '../assets/table.png';
import pillow from '../assets/pillow.png'

const Secondpart = () => {
  return (
<>
<section className="secondpart pt-10 bg-lesswhite">
    <div className="headsecond flex justify-center text-center">
        <div>  
        <h2 className='text-[2rem] font-semibold'>Browse The Range</h2>
        <p className='text-gray mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div>

    <div className="secondimagepart flex justify-around pt-16">
        <div className="shofa">
            <img src={shofa} alt="shofa" />
            <p className='font-semibold text-center pt-4'>Dining</p>
        </div>
        <div className="table">
            <img src={table} alt="table" />
            <p className='font-semibold text-center pt-4'>Living</p>
        </div>
        <div className="pillow">
            <img src={pillow} alt="pillow" />
            <p className='font-semibold text-center pt-4'>Bedroom</p>
        </div>
    </div>
</section>
</>
    )
}

export default Secondpart