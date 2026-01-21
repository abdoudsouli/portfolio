import Card from "../../components/Card/Card";
import { motion } from "motion/react"
export default function Projects() {
  return (
   <div className="container mx-auto md:h-[calc(100vh-13rem)]">
 <div className="py-5"> 
     <h2 className="text-3xl my-2">My portfolio</h2>
    <p className="">Dive into a curated collection of my finest work, showcasing expertise across various industries.</p> 
 </div>
    <div className="overflow-y-scroll h-full py-5 px-5">
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
     className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
<Card img={'https://picsum.photos/id/251/300/200'} code={'HTML,CSS'} title={'Application web'} url={'#'}/>
<Card img={'https://picsum.photos/id/252/300/200'} code={'PHP,MYSQL,HTML,CSS'} title={'E-comme Store'} url={'#'}/>
<Card img={'https://picsum.photos/id/253/300/200'} code={'PHP,MYSQL,HTML,CSS'} title={'E-comme Store'} url={'#'}/>
<Card img={'https://picsum.photos/id/254/300/200'} code={'PHP,MYSQL,HTML,CSS'} title={'E-comme Store'} url={'#'}/>
<Card img={'https://picsum.photos/id/255/300/200'} code={'PHP,MYSQL,HTML,CSS'} title={'E-comme Store'} url={'#'}/>
<Card img={'https://picsum.photos/id/258/300/200'} code={'PHP,MYSQL,HTML,CSS'} title={'E-comme Store'} url={'#'}/>
     </motion.div>
    </div>
    </div>
  )
}
