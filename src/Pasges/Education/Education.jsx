import { motion } from "motion/react"
import { FaGraduationCap } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import PixelCard from '../../components/Reactbits/PixelCard';
import CardSwap, { Card } from '../../components/Reactbits/CardSwap'
export default function Education() {
  return (
       <div className="container h-max py-5  mx-auto md:py-0 ">

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
      className='flex flex-col justify-around items-center md:flex-row gap-2'>

<div className="w-full md:w-1/3">
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

      <motion.p 
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
          className="my-5  mx-5 md:mx-0">
        Academic background in computer science, including  a Specialized  Technician Diploma and a Bachelor's degree in Web and Mobile Development.
      </motion.p>
</div>
 

<div className="w-1/12 md:w-1/6 h-[200px] md:h-[450px]  relative">
  
  <CardSwap
    cardDistance={80}
    verticalDistance={115}
    delay={3000}
    pauseOnHover
  >
    <Card customClass="bg-white/70 backdrop-blur-md text-gray-500 dark:text-gray-50 dark:bg-black/70">
<PixelCard variant="">
  <div className="absolute">   
     <div className="text-5xl mb-5">
        <FaGraduationCap />
    </div>
    <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8 w-100">Specialized University Degree</h5>
    <p className="text-gray-600 dark:text-gray-50 mb-2 flex items-center"><FaCaretRight />Web and Mobile Development</p>
    <p className="text-gray-600 dark:text-gray-50 mb-2 flex items-center"><FaCaretRight />Ibn Tofail University, Kenitra</p>
    <span className="text-red-800 flex items-center"><FaCalendar />2018-2019</span>
</div>
</PixelCard>
    </Card>

    <Card customClass="bg-white/70 backdrop-blur-md text-gray-500 dark:text-gray-50 dark:bg-black/70">
     <PixelCard variant="pink">
  <div className="absolute">   
     <div className="text-5xl mb-5">
        <FaGraduationCap />
    </div>
    <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8 w-100">Specialized Technician Diplomat</h5>
    <p className="text-gray-600 dark:text-gray-50 mb-2 flex items-center"><FaCaretRight />Computer Development</p>
    <p className="text-gray-600 dark:text-gray-50 mb-2 flex items-center"><FaCaretRight />OFPPT, Ouazzane</p>
    <span className="text-red-800 flex items-center"><FaCalendar className="mr-2" />2016-2018</span>
</div>
</PixelCard>
    </Card>

    <Card customClass="bg-white/70 backdrop-blur-md text-gray-500 dark:text-gray-50 dark:bg-black/70">
      
  <PixelCard variant="pink">
  <div className="absolute">
   <div className="text-5xl mb-5">
        <FaGraduationCap />
    </div>
    <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8 w-100">BACCALAUREATE EXPERIMENTAL SCIENCES</h5>
    <p className="text-gray-600 dark:text-gray-50 mb-2 flex items-center"><FaCaretRight />EXPERIMENTAL SCIENCES</p>
    <p className="text-gray-600 dark:text-gray-50 mb-2 flex items-center"><FaCaretRight />Ibn Zohr High School, Ouazzane</p>
    <span className="text-red-800 flex items-center"><FaCalendar className="mr-2" />2015-2016</span>
</div>
</PixelCard>  

    </Card>
  </CardSwap>
</div>


      </motion.div>
    </div>
  )
}
