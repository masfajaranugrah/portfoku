import React from 'react'
import {Link} from 'react-scroll'
const Menulink = () => {
  return (
    <div className='text-[25px] font-bold cursor-pointer pointer-events-auto '>
        <ul className='flex gap-x-5'>
        <li><Link to="home" activeClass="active" smooth={true} offset={-300} duration={1000} spy={true} >Home</Link> </li>
        <li><Link to="skill" activeClass="active" smooth={true} offset={-200} duration={1000} spy={true}>Skill</Link> </li>
            <li ><Link to="about" activeClass="active" smooth={true} offset={-10} duration={1000} spy={true} >About</Link> </li>
            <li><Link to="work" activeClass="active" smooth={true} offset={20} duration={1000} spy={true}>Work </Link></li>
            <li><Link to="testimonials" smooth={true} offset={50} duration={1000} spy={true} >Tertimonails</Link> </li>
        </ul>
    </div>
  )
}

export default Menulink