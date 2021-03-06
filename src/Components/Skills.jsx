import React from 'react'
import HTML from '../Assets/html.png';
import CSS from '../Assets/css.png';
import JavaScript from '../Assets/javascript.png';
import ReactImg from '../Assets/react.png';
import Node from '../Assets/node.png';
import FireBase from '../Assets/firebase.png';
import Tailwind from '../Assets/tailwind.png';
import Mongo from '../Assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#5b186e] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-500'>Skills</p>
                <p className='py-4'> These are the technologies I am familiar with</p>
            </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4  gap-4 text-center py-8'>
            <div className='shadow-md shadow[#19031a] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow[#19031a] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow[#19031a] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="Javascript icon" />
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-md shadow[#19031a] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow[#19031a] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                <p className='my-4'>NODE JS</p>
            </div>
            <div className='shadow-md shadow[#19031a] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon" />
                <p className='my-4'>MONGO DB</p>
            </div>
            <div className='shadow-md shadow[#19031a] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                <p className='my-4'>Tailwind</p>
            </div>
            <div className='shadow-md shadow[#19031a] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                <p className='my-4'>Firebase</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Skills