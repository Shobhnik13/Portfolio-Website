import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-2'>
            <p className='text-4xl font-bold border-b-8 border-fuchsia-400 inline'>About</p>
        </div>
        <p className='text-xl mt-10'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate totam explicabo corporis possimus soluta non necessitatibus dolores earum omnis tempora.
        </p>
        
        <p className='text-xl mt-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore exercitationem harum veniam, ducimus dolor sed cum suscipit! Veniam, harum a.
        </p>
        </div>
    </div>
  )
}

export default About