import React from 'react'
import Link from 'next/link'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const socials =[
    {icon: <FaGithub />,  path:`${publicRuntimeConfig.githubLink}`},

    {icon: <FaLinkedinIn />,  path:publicRuntimeConfig.linkedinInLink},

]
const SocialMedia = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=> {
            return(
            <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                {item.icon}
                </Link>
        )})}
        </div>
  )
}

export default SocialMedia