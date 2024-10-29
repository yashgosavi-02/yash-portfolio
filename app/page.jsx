"use client";
import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-accent">Yash Gosavi</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">I specialize in creating seamless digital experiences, bringing together a refined design sense with expertise in diverse programming languages and technologies.</p>


            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button onClick={() => window.open("https://drive.google.com/file/d/1DzKhP5ofGHnJscSTZ7RwDkhdMfK296mc/view?usp=sharing", "_blank")} variant = "outline" size="lg" className="uppercase flex items-center gap-2">
                <span > Download CV </span>
                <FiDownload className="text-x;"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-11 h-11 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
        <Stats/>
      </div>
    </section>
  )
}

export default Home