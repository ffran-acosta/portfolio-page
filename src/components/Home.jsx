import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#112b51]'>

            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#ef913e] sm:text-2xl'>Hi! My name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-white'>Franco</h1>
                <h2 className='text-4xl sm:text-6xl font-bold text-[#d2d2d2]'>I'm Full Stack Web Developer<span className='text-[#ef913e]'>.</span></h2>
                <p className='text-white py-4 max-w-[700px]'>I'm looking for my first professional opportunity in the industry. My main focus is on building responsive and user-friendly websites using the latest web technologies such as HTML5, CSS3, React, and TypeScript. I have expertise in using Node.js and Express.js for server-side development and APIs. I believe in writing clean and efficient code, and I'm always up to date with the latest development trends and technologies. I have experience working with various databases such as MySQL, MongoDB, and PostgreSQL. My goal is to deliver high-quality web solutions that help businesses achieve their online objectives.</p>
                <div>
                    <Link to="work" smooth={true} duration={500} >
                    <button className=' bg-[#102649] text-[#ef913e] group border-2 border-[#ef913e] px-6 py-3 my-2 flex items-center hover:bg-[#ef913e] hover:text-white duration-300'> 
                    View Work
                    <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className='ml-3' /> </span>
                    </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Home