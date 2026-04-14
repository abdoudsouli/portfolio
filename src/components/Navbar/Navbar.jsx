import { NavLink  } from "react-router-dom";
import { motion } from "motion/react";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

import logo from "../../assets/logo.png";
import logodark from "../../assets/logodark.png";
import useTheme from "../../Hoocks/useTheme";


export default function Navbar() {
   const [theme, setTheme] = useTheme();

    const handleThemeChange = (mode) => {
    setTheme(mode);
    };
    
    const themes = {
  dark: {
    name: 'dark',
    icon: (
      <MdOutlineLightMode
        onClick={() => handleThemeChange('light')}
        className="text-2xl cursor-pointer hover:text-red-800 transition duration-700"
      />
    ),
    logoimg:(
      <img src={logodark} className="h-10" alt="" />
    )
  },
  light: {
    name: 'light',
    icon: (
      <MdNightlight
        onClick={() => handleThemeChange('dark')}
        className="text-2xl cursor-pointer hover:text-red-800 transition duration-700"
      />
    ),
    logoimg:(
     <img src={logo} className="h-10" alt="" />
    )
  }
};



  return (
    <>
        <header className="container py-5 h-20 mx-auto">
            <div className="grid items-center grid-cols-[2fr_3fr] mx-3 md:mx-0">
        <div className=" uppercase text-lg font-bold text-center lg:text-left">
         <NavLink to="/">
         {themes[theme]?.logoimg}
         </NavLink>
        </div>
         <ul className="hidden gap-8 mx-auto  md:flex md:items-center">
        <motion.li
        whileHover={{ y: -3 }}
        transition={{
            duration:0.5,
            delay:0.2
        }}
        >
            <NavLink to="/" className={({ isActive }) =>isActive? "text-red-700": ""}>Home</NavLink>
        </motion.li>
        <motion.li 
         whileHover={{ y: -3 }}
        transition={{
            duration:0.5,
            delay:0.2
        }}>
            <NavLink to="/about" className={({ isActive }) =>isActive? "text-red-700 ": ""}>About me</NavLink>
        </motion.li>
            <motion.li 
         whileHover={{ y: -3 }}
        transition={{
            duration:0.5,
            delay:0.2
        }}>
            <NavLink to="/contact" className={({ isActive }) =>isActive? "text-red-700 ": ""}>Contact</NavLink>
        </motion.li>
        
        <motion.li
         whileHover={{ y: -3 }}
        transition={{
            duration:0.5,
            delay:0.2
        }}>
            <NavLink to="/portfolio" className={({ isActive }) =>isActive? "text-red-700 ": ""}>My portfolio</NavLink>
        </motion.li>
          
        <motion.li
         whileHover={{ y: -3 }}
        transition={{
            duration:0.5,
            delay:0.2
        }}>
            <NavLink to="/education" className={({ isActive }) =>isActive? "text-red-700 ": ""}>Education</NavLink>
        </motion.li>

         <motion.li 
         whileHover={{ y: -3 }}
        transition={{
            duration:0.5,
            delay:0.2
        }}>

         {themes[theme]?.icon}

        </motion.li>

          <motion.li 
         whileHover={{y: -3}}
        transition={{
            duration:0.5,
            delay:0.2
        }}>
         <NavLink to="/contact" className="py-2 px-3 bg-red-700 text-gray-50 rounded-lg hover:bg-gray-50 hover:text-red-800 transition ease-in-out duration-700 flex items-center"> <IoIosSend/> Get in touch</NavLink>
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
