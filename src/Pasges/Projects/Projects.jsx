import { NavLink  } from "react-router-dom";
import { motion } from "motion/react";

import pr1 from "../../assets/project/pr1.png";
import pr2 from "../../assets/project/pr2.png";
import pr3 from "../../assets/project/pr3.png";
import pr4 from "../../assets/project/pr4.jpg";
import pr5 from "../../assets/project/pr5.jpg";
import pr6 from "../../assets/project/pr6.png";

import ScrollStack, { ScrollStackItem } from "../../components/Reactbits/ScrollStack";

export default function Projects() {

  const projects = [
  {
    id: 1,
    title: "E-commerce Store",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, consequatur dolore doloremque illum saepe autem repudiandae necessitatibus vitae eligendi fugit ea odit mollitia laborum ut aut facilis rem! Harum, ducimus?",
    image: pr1,
    tech: ["PHP", "HTML", "CSS"],
    link: "/project/"+1
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, consequatur dolore doloremque illum saepe autem repudiandae necessitatibus vitae eligendi fugit ea odit mollitia laborum ut aut facilis rem! Harum, ducimus?",
    image: pr2,
    tech: ["React", "Tailwind"],
    link: "/project/"+2
  },
  {
    id: 3,
    title: "Website",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, consequatur dolore doloremque illum saepe autem repudiandae necessitatibus vitae eligendi fugit ea odit mollitia laborum ut aut facilis rem! Harum, ducimus?",
    image: pr3,
    tech: ["React","Tailwind","PHP", "HTML", "CSS"],
    link: "/project/"+3
  },
 {
    id: 4,
    title: "Website",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, consequatur dolore doloremque illum saepe autem repudiandae necessitatibus vitae eligendi fugit ea odit mollitia laborum ut aut facilis rem! Harum, ducimus?",
    image: pr4,
    tech: ["React","Tailwind","PHP", "HTML", "CSS"],
  },
  {
    id: 5,
    title: "Website",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, consequatur dolore doloremque illum saepe autem repudiandae necessitatibus vitae eligendi fugit ea odit mollitia laborum ut aut facilis rem! Harum, ducimus?",
    image: pr5,
    tech: ["React","Tailwind","PHP", "HTML", "CSS"],
  },
  {
    id: 6,
    title: "Website",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, consequatur dolore doloremque illum saepe autem repudiandae necessitatibus vitae eligendi fugit ea odit mollitia laborum ut aut facilis rem! Harum, ducimus?",
    image: pr6,
    tech: ["React","Tailwind","PHP", "HTML", "CSS"],
  },
]

  return (
   <motion.div  initial={{
        y:'+5vw'
        }}
        animate={{
         y:0
        }}
        transition={{
         duration:1,
         delay:0.2
         }} className="container mx-auto md:h-[calc(100vh-6rem)] overflow-hidden">

 <div
 className="py-5 m text-center md:w-1/2 md:mx-auto"> 
     <h2 className="text-3xl my-2">My portfolio</h2>
    <p className="">Here you’ll find a range of projects demonstrating my skills in full-stack development, from intuitive front-end interfaces to robust back-end systems.</p> 
 </div>
<ScrollStack>
   {projects.map((project) => (
    <ScrollStackItem
      key={project.id}
      itemClassName="bg-white/30 backdrop-blur-sm text-gray-500 dark:text-gray-50 dark:bg-black/30 overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
        
        <div className="flex justify-center items-center">
          <img src={project.image} className="rounded-2xl md:w-90" alt="" />
        </div>

        <div>
          <h2 className="text-2xl text-red-700 dark:text-gray-50">
            {project.title}
          </h2>

          <p className="my-1">{project.description}</p>

          <div className="mt-3mt-3 w-full flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-2xl my-2 w-max px-4 py-1 dark:bg-gray-900"
              >
                {tech}
              </div>
            ))}
          </div>

          {project.link && (
            <NavLink to={project.link}>
              <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 mt-3 rounded-full cursor-pointer">
                Show
              </button>
            </NavLink>
          )}
        </div>

      </div>
    </ScrollStackItem>
  ))}
</ScrollStack>

    </motion.div>
  )
}
