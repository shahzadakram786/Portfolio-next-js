import Link from 'next/link'
import React from 'react'
import { CgMail } from 'react-icons/cg'
import { FaPhone } from 'react-icons/fa'

/* eslint-disable react/no-unescaped-entities */





const Contact = () => {
  return (
    <div className='max-w-[1000px] mx-auto flex flex-col gap-12 p-8 lg:flex-row text-white/70 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8 sm:flex sm:mx-auto sm:flex-column' id='contact'>

        
        <div className='flex justify-center items-center'>
            <ul className='space-y-4'>

              <li className='flex items-center max-[400px]:flex-col max-[400px]:gap-5'>
                <FaPhone size={10} color='#FB923C' className='h-[110px] w-auto mr-6'/>
                <Link href="tel:+923251657929" className='text-xl cursor-pointer text-[#FB923C]'>+923251657929</Link>
              </li>

              <li className='flex items-center max-[400px]:flex-col max-[400px]:gap-4'>
                <CgMail size={150} color='#FB923C' className='h-[110px] w-auto mr-6 '/>
                <Link href="mail:alyakram786@gmail.com" className='text-xl text-[#FB923C]'>alyakram786@gmail.com</Link>
              </li>

            </ul>
        </div>
        <div className='bg-white/10 p-6 rounded-xl max-w-[550px] sm:mx-auto'>

            <h2 className='text-5xl font-bold text-orange-400 mb-4'>Let's Connect</h2>
            <p className='text-white/70 mb-6'>Send me a messeage and lets schedule a call! </p>
            <form   action="https://formspree.io/f/xldeeorb"  method='post' className='space-y-4'>
               <div className=' grid md:grid-cols-2 gap-4 mx-auto'>

                  <input type="text" name='name' className='w-full bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 foucs:ring-orange-400' placeholder='First Name' />

                  <input type="text" name='name' className='w-full bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 foucs:ring-orange-400' placeholder='Last Name' />

                  <input type="email" name='email' className='w-full bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 foucs:ring-orange-400' placeholder='Email' />

                  <input type="phone" name='phone' className='w-full bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 foucs:ring-orange-400' placeholder='Phone' />
                  
               </div>
               <textarea name='message' className= ' w-full bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 foucs:ring-orange-400' 
               placeholder='Enter Your Message' id=""></textarea>

               <button type='submit' className='bg-orange-700 hover:bg-orange-500 text-white  font-semibold text-xl  py-6 w-full rounded-xl p-3 '>Send Message</button>
            </form>

        </div>


    </div>
  )
}

export default Contact