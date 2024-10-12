
import book from '../assets/book.png'
import pc from '../assets/3d-workstation-with-computer-peripheral-devices.png'
import card from '../assets/2209_w019_n002_695b_p15_695.png'
import finance from '../assets/Paper money or dollar bills and blue credit card 3D illustration.png'
import Image from 'next/image'


const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto" id='about'>

        <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4'>About <span className='text-orange-400'>Me</span> </h1>
            
            <div className='grid grid-cols-8 gap-6 place-items-center'>

                <div className='w-full col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                    {/* for animation backroung color  */}
                   <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                   
                    <div className='flex flex-row p-6'>
                        <Image
                        src={book}
                        alt='book'
                        className='w-auto h-[130px]'
                        />
                        <div>
                            <h2 className='text-2xl font-bold text-white/80'>Education</h2>
                            <p className='text-lg text-white/70 mt-2'>I hold the degree in Computer Science and i am focusing on technologies like React, Next.js, and Tailwind CSS.</p>
                        </div>
                    </div>
                </div>


                <div className='w-full col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                              {/* for animation backroung color  */}
                              <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                      
                    <div className='flex flex-row p-6'>
                        <Image
                        src={pc}
                        alt='pc'
                        className='w-auto h-[130px]'
                        />
                        <div>
                            <h2 className='text-2xl font-bold text-white/80'>Problem-Solving</h2>
                            <p className='text-lg text-white/70 mt-2'>I approach challenges with a logical and systematic mindset</p>
                        </div>
                    </div>
                </div>


                <div className='w-full col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                              {/* for animation backroung color  */}
                              <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                   
             
                    <div className='flex flex-row p-6'>
                        <Image
                        src={card}
                        alt='card'
                        className='w-auto h-[130px]'
                        />
                        <div>
                            <h2 className='text-2xl font-bold text-white/80'>Experience</h2>
                            <p className='text-lg text-white/70 mt-2'>I have a diverse portfolio of projects.</p>
                        </div>
                    </div>
                </div>



                <div className='w-full col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
            
                             {/* for animation backroung color  */}
                             <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                   
            
                    <div className='flex flex-row p-6'>
                        <Image
                        src={finance}
                        alt='finance'
                        className='w-auto h-[130px]'
                        />
                        <div>
                            <h2 className='text-2xl font-bold text-white/80'>Technical Skills</h2>
                            <p className='text-lg text-white/70 mt-2'>As a Full Stack Web Developer, I specilize in React js , Next.js, and Tailwind CSS</p>
                        </div>
                    </div>
                </div>


            </div>


    </div>
  )
}

export default About