import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {Link} from 'react-router-dom'
const PopUp = ({setOpen}) => {
  return (
    <section className='fixed z-[9999] halo ' >
       <div className='halo1'></div>
      <div className=' bg-white/30 relative backdrop-blur w-screen h-screen lg:-top-40 lg:-left-20 
      -top-40 -left-5
      flex justify-center items-center '>
            <div className='absolute pt-10'>
            <AiOutlineCloseCircle onClick={() => setOpen(false)} className='absolute text-[40px] lg:-right-[35rem]
             lg:-top-[15rem]  -top-[20rem] -right-[9rem]'/>

            </div>
           <div className='flex justify-center items-center gap-y-4'>
            <ul className='text-center font-semibold'>
                <li className='text-[50px] '><a href="mailto:massfajar233@gmail.com">Email</a></li>
                <li className='text-[50px]'><a href="https://wa.me/6287836167585?text=Hello">Whatsapp</a></li>
                <li  className='text-[50px]'><a href="#">Linkedin</a></li>
            </ul>
           </div>
      </div>
       
        
        
    </section>
  )
}

export default PopUp