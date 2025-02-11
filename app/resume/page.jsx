"use client";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
 import { ScrollArea } from "@/components/ui/scroll-area";
 import React from 'react';
 import * as Icons from "react-icons/fa";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faDatabase } from '@fortawesome/free-solid-svg-icons';
 import { faHtml5, faCss3, faJs, faReact, faNodeJs, faFigma, faGithub, faDocker } from "@fortawesome/free-brands-svg-icons";
 import { faDotCircle, faCloud, faCogs, faServer, faTerminal, faProjectDiagram, faChartLine, faFileCode, faNetworkWired} from "@fortawesome/free-solid-svg-icons";

const aboutme = {
  title: "About Me",
  Description: "I nurture my passion for IT by actively attending meetups and events such as Warsaw IT Days.\nPresently, I work as a Cloud developer for Diebold Nixdorf in the Retirement Industry. Previously I was working for an Irish company specializing in projects for the public sector. I'm passionate about cutting-edge technologies in web development, cloud-based software integration, and software architecture. In my master's thesis, I conducted research on communication patterns in microservices architecture.Afterhours I realizing non-commercial programming projects with my friends.", 
  info: [
    {
      fieldname: "Name",
      value: "Klaudia Janecka"
    },
    {
      fieldname: "Phone number",
      value: "573 188 607"
    },
    {
      fieldname: "LinkedIn",
      value: "klaudia-janecka"
    },
    {
      fieldname: "GitHub",
      value: "klaudiaaaj"
    }
  ]
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: "Experience",
  description: "I have experience in building web applications using React, Node.js, and MongoDB. I have also worked with various technologies such as HTML, CSS, JavaScript, and Figma. I am a quick learner and always eager to learn new technologies.",
  items: [
    {
      company: "Diebold Nixdorf",
      position: "Cloud developer/DevOps",
      duration: "2024 - Present",
      description: "I worked as a .NET Developer at Opensky data systems. I was responsible for developing and maintaining web applications using .NET technologies. I also worked on various projects using HTML, CSS, and JavaScript."
    },
    {
      company: "Opensky data systems",
      position: ".NET Developer",
      duration: "2021 - 2022",
      description: "I worked as a .NET Developer at Opensky data systems. I was responsible for developing and maintaining web applications using .NET technologies. I also worked on various projects using HTML, CSS, and JavaScript."
    },
    {
      company: "CreateCtrl",
      position: "Junior .NET Developer",
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
  description: "I have successfully completed my Bachelor's and Master's degrees in Computer Science at the faculty of Automatic Control, Electronics and Computer Science (AEI) at the Silesian University of Technology in Gliwice.",
  items: [
    {
      institution: "Silesian University of Technology",
      degree: "Bachelor's in Computer Science",
      duration: "2019 - 2022",
      description: "I completed my Bachelor's degree in Computer Science, where I focused on software development, algorithms, and data structures. I also worked on various projects using technologies such as React, Node.js, and MongoDB."
    },
    {
      institution: "Silesian University of Technology",
      degree: "Master's in Computer Science",
      duration: "2022 - 2024",
      description: "I completed my Master's degree in Computer Science, where I focused on software development, algorithms, and data structures. I also worked on various projects using technologies such as React, Node.js, and MongoDB."
    },
  ]
}

const skills = {
  title: "Skills",
  description: "Here are some of my skills:",
  skillslist: [
    { name: "HTML5", icon: faHtml5 },
    { name: "CSS3", icon: faCss3 },
    { name: "JavaScript", icon: faJs },
    { name: "React", icon: faReact },
    { name: "Node.js", icon: faNodeJs },
    { name: "Figma", icon: faFigma },
    { name: "GitHub", icon: faGithub },
    { name: "Database", icon: faDatabase },
    { name: "Docker", icon: faDocker },
    { name: ".NET", icon: faDotCircle },
    { name: "Angular", icon: faProjectDiagram },
    { name: "TSQL", icon: faDatabase },
    { name: "Jenkins", icon: faCogs },
    { name: "YAML", icon: faFileCode },
    { name: "Kubernetes", icon: faCloud },
    { name: "Terraform", icon: faNetworkWired },
    { name: "Helm", icon: faServer },
    { name: "Azure", icon: faCloud },
    { name: "Powershell", icon: faTerminal },
    { name: "RabbitMQ", icon: faProjectDiagram },
    { name: "Kibana", icon: faChartLine },
    { name: "Elasticsearch", icon: faChartLine },
    { name: "BlackDuck", icon: faCogs },
    { name: "SonarScanner", icon: faCogs },
    { name: "ASP.NET Web Forms", icon: faDotCircle },
    { name: "C#", icon: faDotCircle },
    { name: "xUnit", icon: faDotCircle },
    { name: "CQRS", icon: faProjectDiagram },
    { name: "Azure Storage", icon: faCloud },
    { name: "Azure App Services", icon: faCloud },
    { name: "Entity Framework", icon: faDatabase },
    { name: "Ansible", icon: faServer },
    { name: "Azure DevOps", icon: faCloud },
    { name: "Pipelines - YAML", icon: faFileCode },
    { name: "Oracle", icon: faDatabase },
    { name: "NHibernate", icon: faDatabase },
    { name: "AWS", icon: faCloud },
    { name: "Hangfire", icon: faCogs },
    { name: "RestEase", icon: faCogs },
    { name: "Redis", icon: faDatabase },
    { name: "Ocelot", icon: faNetworkWired },
    { name: "Microsoft Graph", icon: faNetworkWired },
    { name: "NuGet", icon: faCogs }
  ]
};

const Resume = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 1, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex xl:items-center xl:justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="aboutme" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="text-white/90 flex flex-col w-full sm:w-full xl:max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="aboutme">About Me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          <div className="min-h-[80vh]] w-full">
            <TabsContent value="aboutme" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{aboutme.title}</h3>
                <p className="text-lg text-white/60 mx-auto xl:mx-0">{aboutme.Description}</p>
                <ul className="grid grid-cols-2 gap-6 justify-center text-xl xl:text-left mx-0 items-center sm:mx-auto xl:mx-0">
                  {aboutme.info.map((info, index) => {
                    return (
                      <li key={index} className="bg-[#232329] h-[184px] px-10 py-6 text-center rounded-xl flex flex-col sm:flex-row justify-center items-center gap-4 ">
                        <span className="text-accent">{info.fieldname}</span>
                        {info.fieldname === "LinkedIn" ? (
                          <a href={`https://www.linkedin.com/in/${info.value}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                            {info.value}
                          </a>
                        ) : info.fieldname === "GitHub" ? (
                          <a href={`https://github.com/${info.value}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                            {info.value}
                          </a>
                        ) : (
                          <span>{info.value}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="w-full text-center xl:text-left">
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
            <TabsContent value="education" className="w-full text-center xl:text-left">
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
            <TabsContent value="skills" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                {/* <p className="text-lg text-white/60">{skills.description}</p>  */}
                <ul className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 text-3xl text-center xl:text-left">
                  {skills.skillslist.map((skill, index) => (
                    <li key={index} className="bg-[#232329] h-[184px] rounded-xl flex justify-center xl:justify-center items-center">
                      <FontAwesomeIcon icon={skill.icon} className="text-accent" /> 
                      <h1 className="ml-2">{skill.name}</h1>
                      </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Resume;
