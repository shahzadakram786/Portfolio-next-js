'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import prj1 from '../assets/prj1.png'
import prj2 from '../assets/prj2.png'
import prj3 from '../assets/prj3.png'
import prj4 from '../assets/prj4.png'
const projects = [

    {
        title: "Responsive E-commerce Website",
        desc: "A fully responsive e-commerce platform that allows users to browse and purchase products. The site includes a product listing, search functionality, and a seamless shopping cart experience.",
        devstack: "React, Redux, Bootstrap, Node.js, MongoDB",
        link: "https://myecommercewebsite.com",
        git: "https://github.com/username/ecommerce-website",
        src: prj1
    },

    {
        title: "Interactive Data Dashboard",
        desc: "An interactive dashboard designed for visualizing large datasets with real-time filtering and multiple chart types, enabling data-driven decision-making.",
        devstack: "React, D3.js, Power BI, Node.js",
        link: "https://mydatadashboard.com",
        git: "https://github.com/username/data-dashboard",
        src: prj2   
     },

    {
        title: "Personal Portfolio Website",
        desc: "A sleek portfolio website showcasing personal projects, with a modern design, smooth animations, and dynamic content loading. Includes integrated contact form and project details.",
        devstack: "Next.js, Tailwind CSS, Vercel",
        link: "https://myportfolio.com",
        git: "https://github.com/username/portfolio-website",
        src: prj3   
    },

    {
        title: "Real-Time Chat Application",
        desc: "A real-time chat application with user authentication, message persistence, and group chat functionality. Features a modern UI and integrated file sharing system.",
        devstack: "React, Firebase, Tailwind CSS",
        link: "https://mychataapp.com",
        git: "https://github.com/username/chat-application",
        src: prj4   
    }

]


const Portfoilio = () => {
  return (
    <div className='text-white bg-gradient-to-b mt-52 from-black to-[#381a57] py-18 id ' id='portfolio'>


<h1 className='text-white text-6xl max-w-[320px] mx-auto my-12 mtfont-semibold p-4 mb-4'>Selected <span className='text-orange-400'> Projects</span> </h1>

            <div className='px-6 md:px-0 max-w-[1000px] mx-auto mt-32 space-y-24'>
                {projects.map((project ,index) => (
                    <motion.div
                        key={index}
                        initial={{opacity:0 , y:75}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true}}
                        transition={{duration:0.5 , delay:0.25}}
                        className={`mt-12 flex flex-col gap-12 ${index % 2 === 1 ? "md:flex-row-reverse ": " md:flex-row"}`}>
                        <div className='space-y-2 max-w-[500px]'>

                            <h2 className='text-7xl my-4 text-white/70'>{`0 ${index + 1}`}</h2>
                            <h2 className='text-4xl'>{project.title}</h2>
                            <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
                            <p className='text-xl text-orange-400 font-semibold'>{project.devstack}</p>

                            <div className='w-64 h-[1px] bg-gray-400 mt-20'>
                                <Link href={project.link} className='mr-6'>Link</Link>
                                <Link  href={project.git}>Git</Link>
                            </div>
                        </div>

                        <div className='flex justify-center items-center'>
                            <Image src={project.src} alt={project.title} className='h-[350px] w-[500px] object-cover border rounded border-gray-700'/>
                        </div>

                    </motion.div>
                ))}
            </div>
    </div>
  )
}

export default Portfoilio