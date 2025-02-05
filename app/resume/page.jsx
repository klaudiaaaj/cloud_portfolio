"use client";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
 import { ScrollArea } from "@/components/ui/scroll-area";
 import React from 'react';
 import * as Icons from "react-icons/fa";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faHtml5, faCss3, faJs, faReact, faNodeJs, faFigma, faGithub } from '@fortawesome/free-brands-svg-icons';
 import { faDatabase } from '@fortawesome/free-solid-svg-icons';
 
const aboutme =
{
  title: "About Me",
  Description: "I am a Full Stack Developer with a passion for creating beautiful and functional websites. I have experience in building web applications using React, Node.js, and MongoDB. I am also proficient in HTML, CSS, and JavaScript. I am a quick learner and always eager to learn new technologies. I am currently looking for a full-time position as a Full Stack Developer.",
  info: [
    {
      fieldname: "Name",
      value: "Klaudia Janecka"
    }, {
      fieldname: "Phone number",
      value: "+48 573 188 607"
    }, {
      fieldname: "LinkedIn",
      value: "Klaudia"
    }, {
      fieldname: "GitHub",
      value: "klaudiaaaj"
    },
    {
      fieldname: "Email",
      value: "klaudiaaa.janecka@gmail.com"
    },
    {
      fieldname: "Location",
      value: "Katowice, Poland"
    },
  ]
}
const experience = {
  icon: '/assets/resume/badge.svg',
  title: "Experience",
  description: "I have experience in building web applications using React, Node.js, and MongoDB. I have also worked with various technologies such as HTML, CSS, JavaScript, and Figma. I am a quick learner and always eager to learn new technologies.",
  items: [
    {
      company: "Opensky data systems",
      position: ".NET Developer",
      duration: "2021 - 2022",
      description: "I worked as a .NET Developer at Opensky data systems. I was responsible for developing and maintaining web applications using .NET technologies. I also worked on various projects using HTML, CSS, and JavaScript."
    },
    {
      company: "Diebold Nixdorf",
      position: "Cloud developer/DevOps",
      duration: "2024 - Present",
      description: "I worked as a .NET Developer at Opensky data systems. I was responsible for developing and maintaining web applications using .NET technologies. I also worked on various projects using HTML, CSS, and JavaScript."
    },
    {
      company: "CreateCtrl",
      position: "Junior .NET Developer",
      duration: "2021 - 2022",
      description: "I worked as a .NET Developer at Opensky data systems. I was responsible for developing and maintaining web applications using .NET technologies. I also worked on various projects using HTML, CSS, and JavaScript."
    },
    {
      company: "Opensky data systems",
      position: ".NET Developer",
      duration: "2021 - 2022",
      description: "I worked as a .NET Developer at Opensky data systems. I was responsible for developing and maintaining web applications using .NET technologies. I also worked on various projects using HTML, CSS, and JavaScript."
    },
    {
      company: "Diebold Nixdorf",
      position: "Cloud developer/DevOps",
      duration: "2024 - Present",
      description: "I worked as a .NET Developer at Opensky data systems. I was responsible for developing and maintaining web applications using .NET technologies. I also worked on various projects using HTML, CSS, and JavaScript."
    },
    {
      company: "Onex Group",
      position: "Inter .NET/React Developer",
      duration: "07.2020 - 09.2020",
      description: "I worked as a .NET Developer at Opensky data systems. I was responsible for developing and maintaining web applications using .NET technologies. I also worked on various projects using HTML, CSS, and JavaScript."
    },
  ]
}
/**
 * Education section data
 */

const education = {
  icon: '/assets/resume/education.svg',
  title: "Education",
  description: "I have a Master's degree in Computer Science from Politechnika Śląska. During my studies, I gained a strong foundation in software development, algorithms, and data structures. I also worked on various projects using technologies such as React, Node.js, and MongoDB.",
  items: [
    {
      institution: "Politechnika Śląska w Gliwicach",
      degree: "Bachelor's in Computer Science",
      duration: "2019 - 2022",
      description: "I completed my Bachelor's degree in Computer Science, where I focused on software development, algorithms, and data structures. I also worked on various projects using technologies such as React, Node.js, and MongoDB."
    },
    {
      institution: "Politechnika Śląska w Gliwicach",
      degree: "Master's in Computer Science",
      duration: "2022 - 2024",
      description: "I completed my Master's degree in Computer Science, where I focused on software development, algorithms, and data structures. I also worked on various projects using technologies such as React, Node.js, and MongoDB."
    },
  ]
}

const skills = {
  icon: '/assets/resume/skills.svg',
  title: "Skills",
  description: "I have a strong foundation in software development, algorithms, and data structures. I also worked on various projects using technologies such as React, Node.js, and MongoDB.",

   skillslist:[
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3 },
    { name: "JavaScript", icon: faJs },
    { name: "React", icon: faReact },
    { name: "Node.js", icon: faNodeJs },
    { name: "MongoDB", icon: faDatabase },
    { name: "Figma", icon: faFigma },
    { name: "GitHub", icon: faGithub },
    // Add more skills as needed
  ],
}

function resume() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{
      opacity: 1,
      transition: { duration: 0.4, delay: 1, ease: "easeIn" }
    }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="aboutme"
          className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="aboutme">About Me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          <div className="min-h-[80vh] w-full">
            <TabsContent value="aboutme" className="w-full text-center xl:text-left"> 
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{aboutme.title}</h3>
                <p className="text-lg text-white/60 mx-auto xl:mx-0">{aboutme.Description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 text-left mx-auto xl:mx-0 max-w-[820px]">
                  {aboutme.info.map((info, index) => {
                    return (
                      <li key={index} className="flex justify-center items-center gap-4 xl:justify-start">
                        <span className="text-accent">{info.fieldname}</span>
                        <span>{info.value}</span>
                      </li>
                    );
                  })}
                </ul>

              </div>

            </TabsContent>    
            <TabsContent value="experience">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="text-lg text-white/60">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {experience.items.map((item, index) => {
                      return (
                      <li key={index} className="bg-[#232329] h-[184px] px-10 py-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 " >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl font-semibold">{item.position}</h3>
                        <p className="text-muted-foreground">{item.company}</p>
                      </li>
                    );
                    })}
                  </ul>
               </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education">
            <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="text-lg text-white/60">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {education.items.map((item, index) => {
                      return (
                      <li key={index} className="bg-[#232329] h-[184px] px-10 py-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 " >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl font-semibold">{item.degree}</h3>
                        <p className="text-muted-foreground">{item.institution}</p>
                      </li>
                    );
                    })}
                  </ul>
               </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills">
              <div className="flex flex-col gap-6 text-center xl:text-left">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="text-lg text-white/60">{skills.description}</p>
              <ul className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 text-3xl xl:text-left">
            {skills.skillslist.map((skill, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={skill.icon} className="text-accent"/> {skill.name}
              </li>
            ))}
          </ul>
          </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default resume;
