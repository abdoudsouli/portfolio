
import SplitText from '../../components/Reactbits/SplitText'
import TextType from '../../components/Reactbits/TextType'
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { motion } from "motion/react"
import red from "../../assets/red.png";
import light from "../../assets/light.png";
import { useEffect, useState } from "react";

export default function Home() {

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDark(); // أول مرة

    const observer = new MutationObserver(checkDark);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const image = isDark ? red : light;

  return (
    <div className="container h-[calc(100vh-5rem)] mx-auto ">
      <div className="text-center h-full flex flex-col-reverse  md:flex-row md:items-center md:mx-0 md:text-left">
         <div className='md:w-1/2'>
<motion.div
  initial={{
        y:'+2vw'
        }}
        animate={{
         y:0
        }}
        transition={{
         duration:1,
         delay:0.5
         }}
className='text-2xl font-semibold'>

<h2
className='text-sm w-max py-1 px-3 my-2 bg-red-800 text-gray-50 rounded-lg mx-auto lg:mx-0'
>Dsouli Abderrazak</h2>
<SplitText
className='uppercase text-5xl'
text="hi! i'm Dsouli"
delay={100}
duration={1.1}
/>    
</motion.div>

<motion.div 
  initial={{
        y:'+3vw'
        }}
        animate={{
         y:0
        }}
        transition={{
         duration:1,
         delay:0.5
         }}
className='text-5xl font-black uppercase'>
<TextType
className='text-red-800 text-5xl'
text={["FrontEnd", "BackEnd", "Happy coding!"]}
typingSpeed={75}
pauseDuration={1500}
showCursor={true}
cursorCharacter="|"
/> 
</motion.div>

        <motion.p
          initial={{
        y:'+4vw'
        }}
        animate={{
         y:0
        }}
        transition={{
         duration:1,
         delay:0.5
         }}
         className='py-4 text-gray-400 text-md leading-7'>
        Full Stack Web Developer with 5 years of experience, including 2 years as a freelancer, specializing in the development of robust web applications using PHP/Laravel and database management (MySQL, PostgreSQL). Strong expertise in process automation and the creation of custom internal tools. Self-driven, detail-oriented, and performance-focused.    
        </motion.p>

        <motion.div 
        initial={{
        x:'-100vw'
        }}
        animate={{
         x:0
        }}
        transition={{
         duration:1,
         delay:0.5
         }}
        className='mt-3 flex justify-center w-max mx-auto md:mx-0 '>
          <a className='text-2xl px-3 py-3 bg-gray-300 text-red-800 rounded-4xl hover:bg-red-800 hover:text-gray-300 transition ease-in-out duration-700 mr-5' href="http://" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
          </a>
          <a className='text-2xl px-3 py-3 bg-gray-300 text-red-800 rounded-4xl hover:bg-red-800 hover:text-gray-300 transition ease-in-out duration-700 mr-5' href="http://" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          </a>
          <a className='text-2xl px-3 py-3 bg-gray-300 text-red-800 rounded-4xl hover:bg-red-800 hover:text-gray-300 transition ease-in-out duration-700 mr-5' href="http://" target="_blank" rel="noopener noreferrer">
          <MdEmail />
          </a>
          <a className='text-2xl px-3 py-3 bg-gray-300 text-red-800 rounded-4xl hover:bg-red-800 hover:text-gray-300 transition ease-in-out duration-700' href="http://" target="_blank" rel="noopener noreferrer">
          <FaPhoneVolume />
          </a>
        </motion.div>
         </div>

         <motion.div 
       initial={{ y: "-1rem" }}
animate={{ y: ["-1rem", "0rem", "-1rem"] }}
transition={{
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut"
         }}
         className='md:w-1/2'>
              <img className=' block w-50 mb-12 md:mb-0 md:w-[500px] mx-auto' src={image} alt="" />
         </motion.div>
      </div>
    </div>
  )
}
