import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <>

        <header className="container py-5 h-20 mx-auto">
            <div className="grid justify-around lg:grid-cols-2 md:grid-cols-1 md:mx-3">
        <div className=" text-amber-50 uppercase text-xl font-bold text-center lg:text-left">
         <Link to="/"><span className="text-red-800 text-2xl">Dsouli</span> Abderrazak</Link>
        </div>
         <ul className="flex gap-8 mx-auto text-gray-50">
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
            <Link to="/projects">Projects</Link>
        </motion.li>
        <motion.li 
         whileHover={{ y: -3 }}
        transition={{
            duration:0.5,
            delay:0.2
        }}>
            <Link to="/contact">Contact</Link>
        </motion.li>
       </ul> 
            </div>
        </header>
    </>
  )
}
