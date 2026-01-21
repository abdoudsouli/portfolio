import { motion } from "motion/react"
import { FaGraduationCap } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";

export default function Education() {
  return (
       <div className="container h-max py-5  mx-auto md:py-0 ">

      <motion.h2 
      initial={{
        x:'+5vw'
        }}
        animate={{
         x:0
        }}
        transition={{
         duration:1,
         delay:0.2
         }}
      className="text-3xl my-5  mx-5 md:mx-0">Formal Education</motion.h2>

      <motion.div
       initial={{
        y:'+5vw'
        }}
        animate={{
         y:0
        }}
        transition={{
         duration:1,
         delay:0.2
         }}
      className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 md:mx-0'>

<div className="block p-6 border border-gray-900   dark:border-red-900 rounded-lg shadow-lg shadow-gray-400 dark:shadow-red-900 transition-all ease-in-out duration-700 hover:scale-105">
    <div className="text-5xl mb-5">
        <FaGraduationCap />
    </div>
    <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">Specialized University Degree</h5>
    <p className="text-gray-600 dark:text-gray-400 mb-2 flex items-center"><FaCaretRight />Web and Mobile Development</p>
    <p className="text-gray-600 dark:text-gray-400 mb-2 flex items-center"><FaCaretRight />Ibn Tofail University, Kenitra</p>
    <span className="text-red-800 flex items-center"><FaCalendar />2018-2019</span>
</div>


<div className="block p-6 border border-gray-900   dark:border-red-900 rounded-lg shadow-lg shadow-gray-400 dark:shadow-red-900 transition-all ease-in-out duration-700 hover:scale-105">
    <div className="text-5xl mb-5">
        <FaGraduationCap />
    </div>
    <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">Specialized Technician Diplomat</h5>
    <p className="text-gray-600 dark:text-gray-400 mb-2 flex items-center"><FaCaretRight />Computer Development</p>
    <p className="text-gray-600 dark:text-gray-400 mb-2 flex items-center"><FaCaretRight />OFPPT, Ouazzane</p>
    <span className="text-red-800 flex items-center"><FaCalendar className="mr-2" />2016-2018</span>
</div>

<div className="block p-6 border border-gray-900   dark:border-red-900 rounded-lg shadow-lg shadow-gray-400 dark:shadow-red-900 transition-all ease-in-out duration-700 hover:scale-105">
   <div className="text-5xl mb-5">
        <FaGraduationCap />
    </div>
    <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">BACCALAUREATE EXPERIMENTAL SCIENCES</h5>
    <p className="text-gray-600 dark:text-gray-400 mb-2 flex items-center"><FaCaretRight />EXPERIMENTAL SCIENCES</p>
    <p className="text-gray-600 dark:text-gray-400 mb-2 flex items-center"><FaCaretRight />Ibn Zohr High School, Ouazzane</p>
    <span className="text-red-800 flex items-center"><FaCalendar className="mr-2" />2015-2016</span>
</div>

      </motion.div>
    </div>
  )
}
