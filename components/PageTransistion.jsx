
"use client";
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {usePathname} from "next/navigation"

const PageTransistion = ({children}) => {
    const pathname = usePathname();
  return (
    <AnimatePresence>
        <div key={pathname}>
        <motion.div
    initial={{ opacity: 1}}
    animate={{ opacity: 0, scale: 1, transition: { duration: 0.4, delay:0.1, ease:"easeInOut"}}}
    className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
      />
        {children}
        </div>
        </AnimatePresence>
  )
}

export default PageTransistion