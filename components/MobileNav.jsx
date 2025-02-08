"use client"
import {React, useState} from 'react'
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation';
import {CiMenuFries} from "react-icons/ci"
const links=[
    {
        name:'home', 
        path:'/'
    },
    {
        name:'services', 
        path:'/services'
    },
    {
        name:'resume', 
        path:'/resume'
    },
    {
        name:'contact', 
        path:'/contact'
    },
 ]
function MobileNav() {
    const pathname= usePathname();  
    const [isOpen, setIsOpen] = useState(false);
    // const pathname = usePathname();
  
    const handleLinkClick = () => {
      setIsOpen(false);
    };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}> 
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[28px] mr-2 text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-32 text-center text-2xl">
                    <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Cloudy 
                        <span className="text-accent">.</span>
                        </h1> 
                        </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-9">
                    {links.map((link, index)=> {
                        return <Link onClick={handleLinkClick} href={link.path} key={index} className={`${link.path===pathname
                    && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
                        {link.name}

                    </Link>

                    })}
                    </nav>
                </SheetContent>
                </Sheet>
  )
}

export default MobileNav