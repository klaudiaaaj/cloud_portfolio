import React from 'react'
import Link from 'next/link'
import Nav from './nav'
import { ButtonCon } from './ui/buttonCon'
import MobileNav from './MobileNav'
import { useNavigate } from "react-router-dom";

function Header() {
    

  return (
    <header className='py-8 xl:py-12 text-white '>
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/">
      <h1 className='text-4xl font-semibold '>
      Cloudy 
      <span className='text-accent'>.</span>
      </h1>
      </Link>
      <div className="hidden xl:flex gap-8 items-center">
        <Nav />
        <ButtonCon  >
        <Link href="/contact" className="btn btn-primary"> HIRE ME</Link>
        </ButtonCon>
      </div>
      {/* Mobile nav */}
      <div className='xl:hidden'> 
        <MobileNav />
      </div>
    </div>
    </header>
  )
}

export default Header