import React from 'react'
import {FaGithub,FaLinkedin,FaTwitter} from 'react-icons/fa'
import {MdOutlineMail} from 'react-icons/md'
const Socials = () => {
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed text-white'>
   <ul>
    <li className='flex justify-between items-center  w-[220px] h-[60px] px-4 ml-[-160px]  hover:ml-[-10px]  duration-300  bg-blue-600'>
        <a target='_blank' 
        className='flex justify-between items-center gap-x-2 w-full text-gray-400'
         href="">
        LinkedIn <FaLinkedin size={30}/>
        </a>
    </li>

    <li className='flex justify-between items-center w-[220px] h-[60px] px-4 ml-[-160px]  hover:ml-[-10px]  duration-300  bg-gray-700'>
        <a target='_blank' 
        className='flex justify-between items-center gap-x-2 w-full text-gray-400' 
        href="">
            Github <FaGithub size={30}/>
            </a>
         </li>

    <li className='flex justify-between items-center w-[220px] h-[60px] px-4 ml-[-160px]  hover:ml-[-10px]  duration-300  bg-red-500'>
        <a target='_blank' 
        className='flex justify-between items-center gap-x-2 w-full text-gray-400' 
        href="">Gmail <MdOutlineMail size={30}/>
        </a>
    </li>

    <li className='flex justify-between items-center w-[220px] h-[60px] px-4 ml-[-160px]  hover:ml-[-10px]  duration-300  bg-blue-600'>
        <a target='_blank' 
        className='flex justify-between items-center gap-x-2 w-full text-gray-400' 
        href="">Twitter <FaTwitter size={30}/>
        </a>
    </li>
   </ul>
   </div>
  )
}

export default Socials