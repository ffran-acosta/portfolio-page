import React from 'react'
import { data } from '../data/projects.js' 


const Work = () => {

    const project = data;

    return (
        <div name='work' className='w-full text-white bg-[#112b51]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col  w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#ef913e]'>Work <span className='text-[#ef913e]'>.</span></p>
                    <p className='py-4'>Check out my recent Work</p>
                </div>
                {/* grid container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* grid items */}
                {project.map((item, index) => (
                    <div
                        key={index}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '
                        style={{ backgroundImage: `url(${item.image})` }} >

                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='flex w-full justify-center text-2xl font-bold text-qhite tracking-wider'>
                                {item.name}
                            </span>
                            <span className='flex text-sm mx-1 text-center'>{item.description}</span>
                            <div className='pt8 text-center'>
                                <a href={item.link} target="blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ef913e] font-bold text-lg'>Demo</button>
                                </a>

                                <a href={item.github} target="blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ef913e] font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>

    )
}

export default Work