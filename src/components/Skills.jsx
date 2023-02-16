import React from 'react'
import CSS from  '../assets/skills/css.png'
import HTML from '../assets/skills/html5.png'
import JavaScript from '../assets/skills/JavaScript-logo.png'
import ReactImg from '../assets/skills/reactjs.png'
import Node from '../assets/skills/nodejs.png'
import Git from '../assets/skills/git.png'
import Mysql from '../assets/skills/mysql.png'
import Express  from '../assets/skills/expressjs2.png'
import Postgres from '../assets/skills/postgres.png'
import TypeScript from '../assets/skills/typescript.png'
import Docker from '../assets/skills/docker.png'
import Python from '../assets/skills/python.png'
// import GitHub from '../assets/skills/github.png'
// import Mongo from '../assets/skills/mongodb.png'
// import Tailwind from '../assets/skills/tailwind.png'
// import VSC from '../assets/skills/visualstudiocode.png' 


const Skills = () => {
    return (
        <div name='skills' className='bg-[#112b51] text-white'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#ef913e]'>SKILLS <span className='text-[#ef913e]'>.</span></p>
                    <p className='py-4'>These are the technologies I've worked with.</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='bg-[#102649] shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#ef913e] duration-300'>
                        <img className='w-20 mx-auto pt-4' src={HTML} alt="HTML ICON" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='bg-[#102649]  shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#ef913e] duration-300'>
                        <img className='w-20 mx-auto pt-4' src={CSS} alt="CSS ICON" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='bg-[#102649]  shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#ef913e] duration-300'>
                        <img className='w-20 mx-auto pt-4' src={JavaScript} alt="JS ICON" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='bg-[#102649]  shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#ef913e] duration-300'>
                        <img className='w-20 mx-auto pt-4' src={ReactImg} alt="REACT ICON" />
                        <p className='my-4'>React JS</p>
                    </div>
                    <div className='bg-[#102649]  shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#ef913e] duration-300'>
                        <img className='w-20 mx-auto pt-4' src={Node} alt="NODE ICON" />
                        <p className='my-4'>Node</p>
                    </div>
                    <div className='bg-[#102649]  shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#ef913e] duration-300'>
                        <img className='w-20 mx-auto pt-4' src={Express} alt="EXPRESS ICON" />
                        <p className='my-4'>Express JS</p>
                    </div>
                    <div className='bg-[#102649] shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#ef913e] duration-300'>
                        <img className='w-20 mx-auto pt-4' src={TypeScript} alt="TS ICON" />
                        <p className='my-4'>TypeScript</p>
                    </div>
                    <div className='bg-[#102649] shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#ef913e] duration-300'>
                        <img className='w-20 mx-auto pt-4' src={Python} alt="TS ICON" />
                        <p className='my-4'>Python</p>
                    </div>
                    <div className='bg-[#102649]  shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#ef913e] duration-300'>
                        <img className='w-20 mx-auto pt-4' src={Mysql} alt="MYSQL ICON" />
                        <p className='my-4'>MySQL</p>
                    </div>
                    <div className='bg-[#102649] shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#ef913e] duration-300'>
                        <img className='w-20 mx-auto pt-4' src={Postgres} alt="POSTGRES ICON" />
                        <p className='my-4'>PostgresSQL</p>
                    </div>
                    <div className='bg-[#102649]  shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#ef913e] duration-300'>
                        <img className='w-20 mx-auto pt-4' src={Docker} alt="DOCKER ICON" />
                        <p className='my-4'>Docker</p>
                    </div>
                    <div className='bg-[#102649]  shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#ef913e] duration-300'>
                        <img className='w-20 mx-auto pt-4' src={Git} alt="GIT ICON" />
                        <p className='my-4'>Git</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills