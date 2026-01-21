import RotatingText from '../../components/Reactbits/RotatingText'
import developer from '../../assets/deve.svg'
import LogoLoop from '../../components/Reactbits/LogoLoop';
import { SiReact, SiMysql , SiLaravel , SiTailwindcss,SiJavascript ,SiPostgresql,SiHtml5,SiCss3 ,SiBootstrap,SiJquery,SiAdobeillustrator ,SiAdobephotoshop,SiCpanel,SiJira,SiRefinedgithub,SiGit    } from 'react-icons/si';
import { motion } from "motion/react"

const techLogos = [
 { node: <SiReact />, title: "React", href: "https://react.dev/" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com/" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com/" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org/" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com/" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com/" },
  { node: <SiJquery />, title: "jQuery", href: "https://jquery.com/" },
  { node: <SiAdobeillustrator />, title: "Adobe Illustrator", href: "https://www.adobe.com/products/illustrator.html" },
  { node: <SiAdobephotoshop />, title: "Adobe Photoshop", href: "https://www.adobe.com/products/photoshop.html" },
  { node: <SiCpanel />, title: "cPanel", href: "https://cpanel.net/" },
  { node: <SiRefinedgithub />, title: "GitHub", href: "https://github.com/" },
  { node: <SiJira />, title: "Jira", href: "https://www.atlassian.com/software/jira" },
];


export default function About() {
  return (
    <div className="container h-[calc(100vh-5rem)] flex flex-col justify-center  mx-auto py-6"> 
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
        className='text-2xl flex items-center mx-auto md:mx-0 gap-5 font-bold'>
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
     <p className='text-md text-gray-600 dark:text-gray-300 leading-6'>
I’m a Full Stack Web Developer with 5 years of experience, including 2 years as a freelance developer, crafting modern and reliable web applications.
I specialize in PHP / Laravel, backend architecture, and database optimization (MySQL & PostgreSQL).
I enjoy turning complex ideas into simple, scalable solutions and building systems that are fast, secure, and easy to maintain.
As a freelancer, I’ve worked on diverse projects, collaborating with clients to deliver clean code, clear communication, and real value.
Always curious, always learning — I’m driven by growth, performance, and well-crafted digital experiences.
</p>
           <div className='max-w-[700px] overflow-hidden h-20 mx-auto mt-10'>
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
    className='hidden lg:flex justify-center'>
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
