import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#112b51]'>

            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#ef913e] sm:text-2xl'>Hi! My name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-white'>Franco</h1>
                <h2 className='text-4xl sm:text-6xl font-bold text-[#d2d2d2]'>I'm Full Stack Web Developer<span className='text-[#ef913e]'>.</span></h2>
                <p className='text-white py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque obcaecati perspiciatis, corporis accusamus ex. Esse voluptatum a vitae temporibus ab beatae blanditiis reprehenderit. Placeat velit libero quae earum atque?</p>
                <div>
                    <button className=' bg-[#102649] text-[#ef913e] group border-2 border-[#ef913e] px-6 py-3 my-2 flex items-center hover:bg-[#ef913e] hover:text-white duration-300'> 
                    View Work
                    <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className='ml-3' /> </span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Home