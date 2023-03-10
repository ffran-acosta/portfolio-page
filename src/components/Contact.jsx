import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full bg-[#112b51] flex items-center p-4'>
            <div className='max-w-[1000px] justify-center mx-auto p-4 flex flex-col w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#ef913e] text-white'>Contact <span className='text-[#ef913e]'>.</span></p>
                    <p className='text-white py-4'>Submit the form below or shoot me an email - francoaugustoacosta@gmail.com</p>
                </div>
                <div className='w-full h-full tems-center'>
                    <form method='POST' action="https://getform.io/f/e8ebe469-5bb4-42f6-800e-38bde59e842a" className='flex flex-col  w-full'>
                        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
                        <button className=' bg-[#102649] text-[#ef913e] border-2 border-[#ef913e] hover:bg-[#ef913e] hover:text-white duration-300 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact