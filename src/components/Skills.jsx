import React from 'react'
import CSS from  '../assets/css.png'
import HTML from '../assets/html5.png'
import JavaScript from '../assets/JavaScript-logo.png'
import ReactImg from '../assets/reactjs.png'
import Node from '../assets/nodejs.png'
import Git from '../assets/git.png'
import GitHub from '../assets/github.png'
import Mysql from '../assets/mysql.png'
import Express  from '../assets/expressjs2.png'
import Mongo from '../assets/mongodb.png'
import Postgres from '../assets/postgres.png'
import TypeScript from '../assets/typescript.png'
import Tailwind from '../assets/tailwind.png'
import Python from '../assets/python.png'
import VSC from '../assets/visualstudiocode.png' 


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
                    <div className='bg-[#102649] shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#ef913e] duration-300'>
                        <img className='w-20 mx-auto pt-4' src={TypeScript} alt="TS ICON" />
                        <p className='my-4'>TypeScript</p>
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
                    <div className='bg-[#102649]  shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#ef913e] duration-300'>
                        <img className='w-20 mx-auto pt-4' src={Mysql} alt="MYSQL ICON" />
                        <p className='my-4'>MySQL</p>
                    </div>
                    <div className='bg-[#102649] shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#ef913e] duration-300'>
                        <img className='w-20 mx-auto pt-4' src={Postgres} alt="POSTGRES ICON" />
                        <p className='my-4'>PostgresSQL</p>
                    </div>
                    <div className='bg-[#102649]  shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#ef913e] duration-300'>
                        <img className='w-20 mx-auto pt-4' src={Mongo} alt="MONGO ICON" />
                        <p className='my-4'>MongoDB</p>
                    </div>
                    <div className='bg-[#102649]  shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#ef913e] duration-300'>
                        <img className='w-20 mx-auto pt-4' src={Git} alt="GIT ICON" />
                        <p className='my-4'>Git</p>
                    </div>
                    <div className='bg-[#102649]  shadow-md shadow-[#040c16] hover:scale-110 hover:text-[#ef913e] duration-300'>
                        <img className='w-20 mx-auto pt-4' src={GitHub} alt="GITHUB ICON" />
                        <p className='my-4'>GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills