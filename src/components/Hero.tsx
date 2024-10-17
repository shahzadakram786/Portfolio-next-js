'use client'

import html from '../assets/Html Coding (1).png'
import code from '../assets/Programming Language (1).png'
import picture from '../assets/smiling-anime-chibi-cartoon-boy-working-computer-white-background-smiling-anime-chibi-cartoon-boy-working-computer-321914300.png'
import { motion } from "framer-motion";
import Image from "next/image";
import Typewriter from 'typewriter-effect'


const Hero = () => {
  return (

    <>
    <div className="relative py-24 overflow-clip bg-gradient-to-t from-teal-500 to-gray-1000">
      
      <div className='absolute rounded-[50%] h-[1300px] w-[3000px] bg-black top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]'>
      </div>
      
       <div className='relative'>
        <div className="font-bold text-center">
            <h2 className="text-[#98B4CE] text-3xl">Hi, I am</h2>
            <h1 className="text-[#E48A57] text-5xl md:text-7xl Great_Vibes -tracking-tighter">Shahzad  Akram</h1>
            <span className='text-white/70 text-3xl md:text-4xl p-6'>
                An
              <Typewriter 
                    options={{
                      strings: ['Frontend Developer', 'Full-Stack Developer', 'React Enthusiast', 'Next.js Specialist'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
              
            </span>
        </div>


      <motion.div
      className="absolute left-[280px] top-[90px] hidden lg:block "
      drag>
            <Image
            src={html}
            height="190"
            width="190"
            alt='computer'
            draggable="false"
            >

            </Image>

      </motion.div>


      <motion.div
      className="absolute right-[220px] top-[90px] hidden lg:block"
      drag>
            <Image
            src={code}
            height="200"
            width="200"
            alt='computer'
            draggable="false"
            >

            </Image>

      </motion.div>

    

    <p className='text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80' >
        I am a Full-Stack Developer focused on creating websites that provide the best user experience
    </p>

    
    <Image
    src={picture}
    alt="profile picture"
    className='h-auto w-auto mx-auto'>

    </Image>

    </div> 


    
</div>
    </>
  )
}

export default Hero