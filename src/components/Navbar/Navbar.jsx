import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
export default function Navbar() {

  return (
    <>
        <header className="container py-5 h-20 mx-auto">
            <div className="grid items-center grid-cols-[2fr_3fr] mx-3 md:mx-0">
        <div className=" uppercase text-xl font-bold text-center lg:text-left">
         <Link to="/"><span className="text-red-800 text-2xl">Dsouli</span> Abderrazak</Link>
        </div>
         <ul className="hidden gap-8 mx-auto  md:flex md:items-center">
        <motion.li
        whileHover={{ y: -3 }}
        transition={{
            duration:0.5,
            delay:0.2
        }}
        >
            <Link to="/">Home</Link>
        </motion.li>
        <motion.li 
         whileHover={{ y: -3 }}
        transition={{
            duration:0.5,
            delay:0.2
        }}>
            <Link to="/about">About me</Link>
        </motion.li>
            <motion.li 
         whileHover={{ y: -3 }}
        transition={{
            duration:0.5,
            delay:0.2
        }}>
            <Link to="/contact">Contact</Link>
        </motion.li>
        
        <motion.li
         whileHover={{ y: -3 }}
        transition={{
            duration:0.5,
            delay:0.2
        }}>
            <Link to="/portfolio">My portfolio</Link>
        </motion.li>
          
        <motion.li
         whileHover={{ y: -3 }}
        transition={{
            duration:0.5,
            delay:0.2
        }}>
            <Link to="/education">Education</Link>
        </motion.li>

         <motion.li 
         whileHover={{ y: -3 }}
        transition={{
            duration:0.5,
            delay:0.2
        }}>
         <MdNightlight className="text-2xl cursor-pointer  hover:text-red-800 transition ease-in-out duration-700" /> 
        </motion.li>

          <motion.li 
         whileHover={{y: -3}}
        transition={{
            duration:0.5,
            delay:0.2
        }}>
         <Link to="/contact" className="py-2 px-3 bg-red-800 text-gray-50 rounded-lg hover:bg-gray-50 hover:text-red-800 transition ease-in-out duration-700 flex items-center"> <IoIosSend/> Get in touch</Link>
        </motion.li>
       </ul>
       <div className=" flex justify-end md:hidden mx-5">
           <IoMdMenu className="text-3xl cursor-pointer  " /> 
       </div>
            </div>
            
        </header>
    </>
  )
}
