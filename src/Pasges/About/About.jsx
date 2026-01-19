import RotatingText from '../../components/Reactbits/RotatingText'
import developer from '../../assets/deve.svg'
import LogoLoop from '../../components/Reactbits/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { motion } from "motion/react"

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

export default function About() {
  return (
    <div className="container  h-[calc(100vh-5rem)] flex flex-col justify-center mx-auto text-gray-50 py-5"> 
        <motion.h2
        initial={{
          y:'+2rem'
        }}
        animate={{
          y:0
        }}
        transition={{
          duration:1,
          delay:0.5
        }}
        className='text-2xl flex items-center  gap-5 font-bold'>
        Programing
          <RotatingText
          texts={['With','Laravel','×','React','Powerful','Fast','Modern']}
          mainClassName="px-2 sm:px-2 md:px-3 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg bg-red-800 text-gray-50"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          rotationInterval={2000}/>
      </motion.h2>
  <div className='grid grid-cols-1 md:grid-cols-[3fr_2fr] items-center gap-2'>
    <motion.div 
        initial={{
          x:'-100rem'
        }}
        animate={{
          x:0
        }}
        transition={{
          duration:1,
          delay:0.5
        }}
        className='mx-5 my-5 md:mx-0 md:my-0'
    >
     <h2 className='text-2xl font-bold uppercase text-red-700'>About Me</h2>
     <p className='text-md text-gray-300 leading-6'>
I’m a Full Stack Web Developer with 5 years of experience, including 2 years as a freelance developer, crafting modern and reliable web applications.
I specialize in PHP / Laravel, backend architecture, and database optimization (MySQL & PostgreSQL).
I enjoy turning complex ideas into simple, scalable solutions and building systems that are fast, secure, and easy to maintain.
As a freelancer, I’ve worked on diverse projects, collaborating with clients to deliver clean code, clear communication, and real value.
Always curious, always learning — I’m driven by growth, performance, and well-crafted digital experiences.
</p>
           <div className='max-w-[600px] overflow-hidden h-20 mx-auto mt-10'>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
    </motion.div>
 
    <motion.div 
        initial={{
          x:'+100rem'
        }}
        animate={{
          x:0
        }}
        transition={{
          duration:1,
          delay:0.5
        }}
    className='flex justify-center'>
      <motion.div
  initial={{ y: "-2rem" }}
animate={{ y: ["-2rem", "0rem", "-2rem"] }}
transition={{
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut"
}}
      >
        <img src={developer} alt="" />
      </motion.div>
    </motion.div>
  </div>

    </div>
  )
}
