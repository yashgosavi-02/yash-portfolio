"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderButtons from "@/components/WorkSliderButtons";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Insurance And Investment Website",
    description: "A responsive site for exploring insurance and investment plans with a clean, intuitive UI built using React and Tailwind CSS.",
    stack: [{ name: "React" }, { name: "Tailwind CSS" }],
    image: "/assets/work/thumb1.png",
    live: "https://github.com/yashgosavi-02/Insurance-Investment-Website-Frontend",
    github: "https://github.com/yashgosavi-02/Insurance-Investment-Website-Frontend",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "VidTube - A Video Streaming Platform",  
    description: "A video streaming platform with a smooth user experience, built using React, Tailwind CSS, and Express for secure, efficient streaming.",
    stack: [{ name: "React" }, { name: "Tailwind CSS" }, { name: "Express" }],
    image: "/assets/work/thumb2.png",
    live: "https://github.com/yashgosavi-02/VidTube",
    github: "https://github.com/yashgosavi-02/VidTube",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Foodie - Food Ordering Website",
    description: "A user-friendly food ordering site with responsive design, allowing easy browsing and ordering. Built with React and Tailwind CSS.",
    stack: [{ name: "React" }, { name: "Tailwind CSS" }],
    image: "/assets/work/thumb3.png",
    live: "https://github.com/yashgosavi-02/Foodie",
    github: "https://github.com/yashgosavi-02/Foodie",
  },
];



const Project = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 , transition:{delay:2.4, duration :0.4, ease : "easeIn"}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {/* removes the last comma */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4 ">
                {/* live project button */}
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>

                {/* github button */}
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
              </div>
            </div>
          </div>
          {/* Slider Component */}
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                 <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                    <Image src={project.image} fill className='object-fill' alt="project-image" />
                    </div>
                 </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSliderButtons 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
