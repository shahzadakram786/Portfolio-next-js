import Link from 'next/link'
import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { CgInstagram } from 'react-icons/cg'
import { CiLinkedin } from 'react-icons/ci'
import { FaLinkedinIn, FaStaylinked } from 'react-icons/fa'
import { LiaLinkedin, LiaLinkedinIn } from 'react-icons/lia'


const Footer = () => {
  return (
    <div className='text-center text-3xl flex w-full justify-around'>
        <div>
            <h1>Shahzad Akram</h1>
        </div>
        <div className='flex gap-5'>
                <Link href={"https://github.com/shahzadakram786/"} target='_blank'> <BsGithub/>  </Link>
                <Link href={"https://www.linkedin.com/in/shahzad-akram-250a2b25b/"} target="_blank"> <BsLinkedin/> </Link>
                <Link href={'#'}> <CgInstagram/> </Link>
                

        </div>
    </div>
  )
}

export default Footer