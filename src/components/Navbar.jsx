import React, { useState } from 'react'
import Logo from '../assets/LOGO2.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 border-b border-b-[#ef913e] bg-[#102649] text-white'>

      {/* LOGO */}
      <div>
        <img src={Logo} alt="Logo-Img" style={{ width: '65px', cursor: 'pointer' }} />
      </div>

      {/* MENU */}
      <ul className='hidden md:flex'>
        <li className='hover:text-[#ef913e] duration-300'>
          <Link to="home" smooth={true}  duration={500} >
            Home
          </Link>
        </li>
        <li className='hover:text-[#ef913e] duration-300'>
          <Link to="skills" smooth={true} duration={500} >
            Skills
          </Link>
        </li>
        <li className='hover:text-[#ef913e] duration-300'>
          <Link to="work" smooth={true} duration={500} >
            Work
          </Link>
        </li>
        <li className='hover:text-[#ef913e] duration-300'>
          <Link to="contact" smooth={true} duration={500} >
            Contact
          </Link>
        </li>
      </ul>

      {/* HAMBURGER MENU */}
      <div onClick={handleClick} className='md:hidden z-10 text-3xl cursor-pointer hover:text-[#ef913e] duration-300'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* MOBILE MENU */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#112b51] flex flex-col justify-center items-center'}>
        <li className='py-6 text-3xl hover:text-[#ef913e] duration-300'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500} >
            Home
          </Link>
        </li>
        <li className='py-6 text-3xl hover:text-[#ef913e] duration-300'>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
            Skills
          </Link>
        </li>
        <li className='py-6 text-3xl hover:text-[#ef913e] duration-300'>
          <Link onClick={handleClick} to="work" smooth={true} duration={500} >
            Work
          </Link>
        </li>
        <li className='py-6 text-3xl hover:text-[#ef913e] duration-300'>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
            Contact
          </Link>
        </li>
      </ul>

      {/* SOCIAL ICONS */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          {/* linkedin */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0e76a8]'>
            <a className='flex justify-between items-center w-full text-white' target='blank' href= "https://www.linkedin.com/in/ffran-acosta/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          {/* github */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515]'>
            <a className='flex justify-between items-center w-full text-white' target='blank' href="https://github.com/ffran-acosta/">
              GitHub <FaGithub size={30} />
            </a>
          </li>
          {/* Email */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-white' href="/">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          {/* resume */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ef913e]'>
            <a className='flex justify-between items-center w-full text-white' href="/">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          {/* instagram */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-tl from-indigo-600 via-red-400 to-yellow-400'>
            <a className='flex justify-between items-center w-full text-white' target='blank' href="https://www.instagram.com/ffran.acosta/">
              Instagram <FaInstagram size={30}/>
            </a>
          </li>
        </ul>

      </div>

    </div>
  )
}

export default Navbar