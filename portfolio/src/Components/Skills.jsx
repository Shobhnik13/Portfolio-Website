import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import solidity from '../assets/solidity.png'
import firebase from '../assets/firebase.png'
import c from '../assets/c.png'
import cpp from '../assets/cpp.png'
import java from '../assets/java.png'

const Skills = () => {
    const data=[
        {
                id:1,
                imgSrc:html,
                text:'HTML',
        },
        {
            id:2,
            imgSrc:css,
            text:'CSS',
        },
        {
            id:3,
            imgSrc:tailwind,
            text:'Tailwind',
        },
        {
            id:4,
            imgSrc:javascript,
            text:'Javascript',
        },
        {
            id:5,
            imgSrc:react,
            text:'React.js',
        },
        {
            id:6,
            imgSrc:github,
            text:'Github',
        },
        {
            id:7,
            imgSrc:node,
            text:'Node.js',
        },
        {
            id:8,
            imgSrc:solidity,
            text:'Solidity',
        },
    ]
  return (
    
    <div name='Skills' className='orange w-full h-screen bg-gradient-to-b from-black to-gray-800'>
      <div className='p-8 w-full h-full max-w-screen-lg mx-auto'>
        <div>
            <p className='text-4xl md:text-6xl font-bold text-white border-b-8 border-fuchsia-400 inline'>Skills</p>
            <p className='text-3xl py-10 md:text-5xl font-semibold text-gray-500'>Tech I've worked with</p>
        </div>
{/* carousel  */}
            <div class="image-slider">
        <div class="image-slider-track" >
            <div class="slide" className='shadow-md shadow-orange-400  ml-2 p-4 hover:scale-110 duration-100'>
               <img src={html} alt="" className='m-auto'/>
               <p className='text-gray-400 font-semibold text-center'>HTML</p>
            </div>
            <div class="slide" className='shadow-md shadow-blue-500 ml-2 p-4 hover:scale-110 duration-100'>
               <img src={css} alt="" className='m-auto'/>
               <p className='text-gray-400 font-semibold text-center '>CSS</p>
            </div>
            <div class="slide" className=' p-4 ml-4 hover:scale-110 duration-100 shadow-md shadow-yellow-500'>
               <img src={javascript} alt=""  className='m-auto'/>
               <p className='text-gray-400 font-semibold text-center'>Javascript</p>
            </div>
            <div class="slide" className='p-4 ml-4 hover:scale-110 duration-100 shadow-md shadow-gray-800'>
               <img src={github} alt="" className='m-auto' />
               <p className='text-gray-400 font-semibold  text-center'>Github</p>
            </div>
            <div class="slide" className=' p-4 ml-4 hover:scale-110 duration-100 shadow-md shadow-blue-500'>
               <img src={tailwind} alt="" className='m-auto'/>
               <p className='text-gray-400 font-semibold  text-center'>Tailwind</p>
            </div>
            <div class="slide" className='p-4 ml-4 hover:scale-110 duration-100 shadow-md shadow-blue-500'>
               <img src={react} alt="" className='m-auto' />
               <p className='text-gray-400 font-semibold text-center'>React.js</p>
            </div>
            <div class="slide" className='p-4 ml-4 hover:scale-110 duration-100 shadow-md shadow-green-500'>
               <img src={node} alt="" className='m-auto' />
               <p className='text-gray-400 font-semibold text-center '>Node.js</p>
            </div>
            <div class="slide" className='p-4 ml-4  hover:scale-110 duration-100 shadow-md shadow-gray-800'>
               <img src={solidity} alt="" className='w-[200px] m-auto'/>
               <p className='text-gray-400 font-semibold  text-center '>Solidity</p>
            </div>
            <div class="slide" className='p-4 ml-4 hover:scale-110 duration-100 shadow-md shadow-yellow-500'>
               <img src={firebase} alt="" className='m-auto' />
               <p className='text-gray-400 font-semibold  text-center'>Firebase</p>
            </div>
            <div class="slide" className='p-4 ml-4 hover:scale-110 duration-100 shadow-md shadow-blue-500'>
               <img src={c} alt="" className='m-auto w-[200px]'  />
               <p className='text-gray-400 font-semibold  text-center'>C</p>
            </div>
            <div class="slide" className='p-4 ml-4 hover:scale-110 duration-100 shadow-md shadow-blue-500'>
               <img src={cpp} alt="" className='m-auto w-[200px]' />
               <p className='text-gray-400 font-semibold  text-center'>C++</p>
            </div>
            <div class="slide" className='p-4 ml-4 hover:scale-110 duration-100 shadow-md shadow-red-500'>
               <img src={java} alt="" className='m-auto w-[200px]' />
               <p className='text-gray-400 font-semibold  text-center'>Java</p>
            </div>
        </div>
    </div>
    
    </div>
    </div>
  )
}

export default Skills