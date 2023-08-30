import React from 'react'
import rectangle from '../assets/Rectangle.png'
import rectangle2 from '../assets/Rectangle2.png'
import rectangle3 from '../assets/Rectangle3.png'
import rectangle4 from '../assets/Rectangle4.png'
import rectangle5 from '../assets/Rectangle5.png'
import rectangle6 from '../assets/Rectangle6.png'
import rectangle7 from '../assets/Rectangle7.png'
import rectangle8 from '../assets/Rectangle8.png'
import rectangle9 from '../assets/Rectangle9.png'


const Furniture = () => {
  return (

<>
    <section className="furniture pt-10 pb-10">
        <div className="furni text-center">
        <p className='text-brown'>Share your setup with</p>
        <h2 className='text-[2rem] font-semibold'>#FuniroFurniture</h2>
        </div>

        <div className="furni-image flex justify-between">
            <div>
                
            <img src={rectangle} alt="" height={50} />
            </div>
            <div>

            <img className='mt-9' src={rectangle2} alt="" width={500} />
            </div>
            <div>

            <img className='pt-44' src={rectangle5} alt="" />
            </div>
            <div>
 
            <img className='pt-20' src={rectangle7} alt="" />
            </div>
            <div>

            <img src={rectangle9} alt="" />
            </div>
            

        </div>

        <div className="nextfurniture flex justify-between">
            <div>
                <img className='mt-[-11rem]' src={rectangle3} alt=""/>
            </div>
            <div>
                <img  src={rectangle4} className='mr-[20rem] mt-[-11rem]' alt="" width={395}/>
            </div>
            <div className='mt-[-8rem]'>
                <img className='' src={rectangle6} alt="" />
            </div>
            <div className='mr-[8rem] mt-[-8rem]'>
                <img src={rectangle8} alt="" />
            </div>
        </div>
    </section>

   
</>
    )
}

export default Furniture