import React from 'react'
import {AiOutlineDownload} from 'react-icons/ai'
import {AiOutlineLink} from 'react-icons/ai'

const Home = () => {
  return (
    <div className='w-full h-screen' name='home'>
            <div className='flex flex-col justify-center mx-auto px-8 h-full max-w-[1000px]'>
                <h6 className='text-gray-500 text-md pb-2' >Hi,I am</h6>
                <h2 className='text-fuchsia-400 text-5xl md:text-7xl font-bold '>Shobhnik</h2>
                <h2 className='text-fuchsia-300 text-5xl md:text-7xl  font-semibold'>I am a Front-end developer</h2>
                <p className='py-3 max-w-[700px] text-lg md:text-xl font-semibold text-gray-500'>
                    Hey!I am a frontend developer who is passionate about creating user-friendy and responsive interfaces
                    that enhance the user engagement.
                </p>
                <button className='flex items-center text-md cursor-pointer border-none font-semibold max-w-[200px] px-2 md:max-w-[300px] rounded-xl bg-gradient-to-r from-fuchsia-400 to-fuchsia-300 justify-center py-1 my-4 hover:scale-105 duration-200'>
                    <a href="">Resume</a>
                    <span><AiOutlineLink size={40} className='ml-2'/></span>
                </button>
            </div>
      </div>
  )
}

export default Home