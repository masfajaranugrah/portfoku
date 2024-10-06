import React from 'react'
import {AiOutlineMinus} from 'react-icons/ai'
const CardAnimate = (props) => {
  const {msg} = props.item
  return (
    <div>
        <div className='gra1 px-10 h-26 py-10 rounded-lg md:text-[30px] lg:text-[20px]'>
                <div >
                  <div>
                 <p>{msg}</p> 
                  </div>
                  <div className='flex justify-center items-center mt-4'>
                    <AiOutlineMinus className='text-[40px] md:text-[50px] w-[20rem] lg:text-[30px]'/>
                  </div>

                </div>
            
        </div>
    </div>
  )
}

export default CardAnimate