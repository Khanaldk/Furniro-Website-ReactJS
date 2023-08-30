import {useState,useEffect} from 'react'
import {data} from '../Data/data'
import Button from './Button';
import { AiOutlineShareAlt } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";



const Thirdpart = () => {
    const [dataProducts,setProducts]=useState([]);
    useEffect(()=>{
        setProducts(dataProducts)
    },[])
  return (
<>
    <section className="thirdpart pt-10 ">
        <div className="headthird flex justify-center font-semibold">
            <h2 className='text-[1.3rem] pb-6'>Our Products</h2>
        </div>

        <div className="product-wrapper  grid grid-cols-4 gap-10 pl-10">

        {
            data.map((value,i)=>{
                return <div className="products relative" key={i}>
                    <div className="imgthird">
                        <img className='relative' src={value.image} alt="image" />

                     {/* <p className='hovpart absolute top-6 left-52  text-red  text-center text-[0.8rem] w-[15%] px-2 py-4 rounded-[3rem]'>{value.tag}</p> */}

                  <div className='bg-pure px-4 py-2 w-[84%]'>
                        <h4 className='font-semibold pb-1'>{value.head}</h4>
                        <p className='text-[0.8rem] pb-1 text-brown'>{value.small}</p>
                        <div className='flex justify-between'>
                        <h5 className='font-semibold pb-1'>{value.para}</h5>
                        <del className='text-[0.8rem]'>{value.del}</del>
                        </div>
                        </div>
                        
                     </div>
                     

                     <div className="overlay flex flex-col justify-center absolute top-0 left-0">
                            <div className='flex justify-center w-[100%]'>
                         <Button style="border-solid border-2 py-2 font-semibold text-primary px-10 text-[0.9rem] mt-6 bg-light border-light" text={"Add to cart"}/>
                            </div>
                         <div className="share flex pt-6 justify-between w-[100%]">
                            <p className='flex px-2 text-[0.8rem]'><AiOutlineShareAlt className='pt-1 text-[1rem]'/>Share</p>
                            <p className='flex px-2 text-[0.8rem]'><BiGitCompare className='pt-1 text-[1rem]'/>Compare</p>
                            <p className='flex px-2 text-[0.8rem]'><AiOutlineHeart className='pt-1 text-[1rem]'/>Like</p>

                         </div>
                        </div>
                        
                      

                </div>
                
                
            })
           
        }

        </div>
<div className='flex justify-center'>
        <Button style="border-solid border-2 py-3 font-semibold text-primary px-16 text-[1rem] mt-6 " text={"Show More"}/>
</div>
        
    </section>
</>

    )
}

export default Thirdpart