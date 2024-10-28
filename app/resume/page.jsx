"use client";

import {FaHtml5, FaCss3, FaJs, FaJava, FaNodeJs, FaReact, FaGit, FaGithub, FaFigma} from "react-icons/fa";

import {
  SiTailwindcss, SiExpress, SiMysql, SiMongodb, SiMongoose, SiNpm, SiNextdotjs, SiMicrosoftazure, SiAmazonwebservices, SiPostman
} from "react-icons/si"

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

import {Tooltip, TooltipContent, TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip";

import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";

import {motion} from "framer-motion";



// about me
const about = {
  title : "About Me",
  description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A inventore necessitatibus id itaque impedit quo sit, debitis velit!",
  info :[
    {
      fieldName : "Name",
      fieldValue : "Yash Gosavi"
    },
    {
      fieldName : "Phone",
      fieldValue : "(+91) 9579939962"
    },
    {
      fieldName : "Experience",
      fieldValue : "1 Year"
    },
    {
      fieldName : "Location",
      fieldValue : "Pune, India"
    },
    {
      fieldName : "Freelance",
      fieldValue : "Available"
    },
    {
      fieldName : "Email",
      fieldValue : "iyashgosavi02@gmail.com"
    },
    {
      fieldName : "Languages",
      fieldValue : "English"
    },
  ]
}

// experience data
const experience = {
  icon : '/assets/resume/badge.svg',
  title : 'My Experience',
  description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A inventore necessitatibus id itaque impedit quo sit, debitis velit!',
  items :[
    {
      company : 'Tata Consultancy Services',
      position : 'Upcoming Systems Engineer',
      duration : 'Nov 2024 - Present'
    },
    {
      company : 'SlashMark',
      position : 'React Developer',
      duration : 'Jan 2024 - Mar 2024'
    },
    {
      company : 'WIT - LOL Coding Club',
      position : 'Media Manager',
      duration : 'July 2023 - Dec 2023'
    },
    {
      company : 'Future Ready Talent',
      position : 'TCS - Sirius Program Intern',
      duration : 'Mar 2023 - Aug 2023'
    },
    {
      company : 'Persistent Systens',
      position : 'Martian Progam Intern',
      duration : 'Mar 2023 - June 2023'
    },
]
}

// education data
const education = {
  icon : '/assets/resume/cap.svg',
  title : 'My Education',
  description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A inventore necessitatibus id itaque impedit quo sit, debitis velit!',
  items :[
    {
      institute : 'Online Course Platform',
      degree : 'MERN Stack Developer',
      duration : 'Summer 2024'
    },
    {
      institute : 'WIT,Solapur',
      degree : 'B.Tech (CSE)',
      duration : '2020 - 2024'
    },
    {
      institute : 'VSJC, Aurangabad',
      degree : 'Higher Secondary',
      duration : '2019 - 2020'
    },
    {
      institute : 'APPS, Aurangabad',
      degree : 'Secondary',
      duration : '2017 - 2018'
    }
    
]
}

// skills data
const skills = {
  title : 'My Skills',
  description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A inventore necessitatibus id itaque impedit quo sit, debitis velit!',
  skillset : [
    {name : 'JavaScript', icon : <FaJs />},
    {name : 'Java', icon : <FaJava />},
    {name : 'React', icon : <FaReact />},
    {name : 'Node.js', icon : <FaNodeJs />},
    {name : 'Next.js', icon : <SiNextdotjs />},
    {name : 'HTML 5', icon : <FaHtml5 />},
    {name : 'CSS 3', icon : <FaCss3 />},
    {name : 'Tailwind CSS', icon : <SiTailwindcss />},
    {name : 'MySQL', icon : <SiMysql />},
    {name : 'MongoDB', icon : <SiMongodb />},
    {name : 'Postman', icon : <SiPostman />},
    {name : 'Figma', icon : <FaFigma/>},  
  ]
}

const Resume = () => {
  return (
    <motion.div
    initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease: "easeIn"}}}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="skills" className="flex flex-col xl:flex-row gap-[60px] ">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[36px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) =>{
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl items-center justify-center flex flex-col lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p>{item.company}</p>
                        </div>
                      </li>
                    } )}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[36px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) =>{
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl items-center justify-center flex flex-col lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p>{item.institute}</p>
                        </div>
                      </li>
                    } )}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-4">
                    {skills.skillset.map((skill,index)=>{
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    })}
                  </ul>
              </div>
            </TabsContent>
            
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left" >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">{about.info.map((item,index)=>{
                  return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                    <span className="text-white/60">{item.fieldName}</span>
                    <span className="text-xl">{item.fieldValue}</span>
                  </li>
                })}</ul>
              </div>
            </TabsContent>


          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume