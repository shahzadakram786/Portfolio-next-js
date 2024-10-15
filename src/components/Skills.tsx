import { div } from 'framer-motion/client'
import React from 'react'
import {FaHtml5 , FaCss3Alt , FaReact , FaJsSquare, FaNodeJs, FaBootstrap, FaPython, FaPhp} from 'react-icons/fa'
import { FaDiagramNext } from 'react-icons/fa6'




const skillIcons = [
    {icon: <FaHtml5 size={140}/> , label: "HTML"},
    {icon: <FaCss3Alt size={140}/> , label: "Css"},
    {icon: <FaBootstrap size={140}/> , label: "Css"},
    {icon: <FaJsSquare size={140}/> , label: "JavaScript"},
    {icon: <FaReact size={140}/> , label: "React"},
    {icon: <FaNodeJs size={140}/> , label: "Node js"},
    {icon: <FaPython size={140}/> , label: "Python"},
    {icon: <FaPhp size={140}/> , label: "PHP"},

]



const Skills = () => {
  return (
    <div className='py-32 bg-gradient-to-b  from-[#381a57] to-black'>

        <div className='text-white  md:max-w-[950px] mx-auto p-8 text-center'>
            <h2 className='text-6xl font-bold mb-4'>What I DO</h2>

            <div className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-6'>
                {
                    skillIcons.map((skill, index)=>(
                        <div
                        key={index} className='h-[260px] w-[220px] sm:w-[190px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'>
                            {skill.icon}
                            <p className='mt-2'>{skill.label}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Skills