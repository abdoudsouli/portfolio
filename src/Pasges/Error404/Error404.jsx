
import { TbError404 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import FuzzyText from "../../components/Reactbits/FuzzyText"

export default function Error404() {
  return (
   <motion.main 
   initial={{
    y:'-5vw'
   }}
   animate={{
    y:0
   }}
   transition={{
    duration:1,
    delay:0.2
   }}
   className="grid min-h-[calc(100vh-5rem)] place-items-center px-6 py-24 sm:py-32 lg:px-8">
  <div className="text-center">
  <FuzzyText 
  className="w-full"
  baseIntensity={0.15}
  hoverIntensity={0.6}
  enableHover={true}
  >404</FuzzyText>
    <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance  sm:text-7xl">Page not found</h1>
    <p className="mt-6 text-lg font-medium text-pretty  sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <Link to="/" className="rounded-md bg-red-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-300  hover:text-red-800 transition ease-in-out duration-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Go back home</Link>
    </div>
  </div>
</motion.main>
  )
}
