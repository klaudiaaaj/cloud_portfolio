"use client"

import { ButtonCon } from '@/components/ui/buttonCon'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from '@/components/ui/select'

import React from 'react'
import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from "react-icons/fa"
import { motion } from 'framer-motion'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const info =[
  {
    icon:<FaPhoneAlt />,
    title:"Phone", 
    value: "+48 573 188 607"
  },
  {
    icon:<FaEnvelope />,
    title:"Email", 
    value: "klaudiaaa.janecka@gmail.com"
  },
  {
    icon:<FaMapMarkedAlt />,
    title:"Address", 
    value: "Katowice, City Center"
  },
]

const Contact = () => {
return(
  <motion.section 
  initial={{opacity: 0}}
  animate={{
    opacity:1, 
    transition: {delay:1.5, duration: 0.4, ease: "easeIn"}
  }} className="py-6"
  >
<div className='container mx-auto'>
<div className='flex flex-col xl:flex-row gap-[30px]'>
  <div className='xl:h-[60%] xl:w-[54%] order-2 xl:order-none'>
    <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl' action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value={publicRuntimeConfig.web3FormsKey}>
      <h3 className='text-4xl text-accent'>Let&apos;s connect!</h3>
      <p className="text-white/60">Please leave Yours contact details and message to me.  </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input type="firstname" placeholder="Firstname"/>
        <Input type="surname" placeholder="Surname"/>
        <Input type="email" placeholder="Email Address"/>
        <Input type="Phone" placeholder="Phone Number"/>
      </div>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue  placeholder="Select a service" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel> Select a service
            </SelectLabel>
              <SelectItem value ="est"> Web Development - Let me build/modify your website </SelectItem>
              <SelectItem value ="est"> DevOps service - Let me help you with your infrastructure </SelectItem>
              <SelectItem value ="est"> Database Engineering - Let me perform database, structural moderations </SelectItem>
              <SelectItem value ="est"> Hire Me - Connect with me to give me a job proposal </SelectItem>
              <SelectItem value ="est"> Software Consultation </SelectItem>
              <SelectItem value ="est"> Other </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Textarea className="h-[200px] w-full rounded-md border-white/10 bg-primary px-4 py-5 text-base placeholder:text-white/60 focus:border-accent/50 outline-none focus-visible:ring-offset-0 disabled-cursor-not-allowed disabled:opacity-50"
      placeholder="Type here your message">
      </Textarea>
      <ButtonCon size="md" className="max-w-40">
      Send Message
    </ButtonCon>
    </input>
    </form>

  </div> 
  <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
  <ul className='flex flex-col gap-10'>
    {info.map((item, index) => {
      return (
        <li key={index} className='flex items-start gap-6 xl:flex-row'>
          <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-[28px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
        {item.icon}
          </div>
          <div className='flex-1 flex flex-col xl:items-start'>
            <p className='text-white/50'>{item.title}</p>
            <h3 className='text-xl xl:ml-0'>{item.value}</h3>
          </div>
        </li>
      );
    })}
  </ul>
</div>
</div>

</div>

  </motion.section>
)}
export default Contact