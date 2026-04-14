import { NavLink  } from "react-router-dom";
import { motion } from "motion/react"

import ScrollStack, { ScrollStackItem } from '../../components/Reactbits/ScrollStack'

export default function Projects() {
  return (
   <motion.div  initial={{
        y:'+5vw'
        }}
        animate={{
         y:0
        }}
        transition={{
         duration:1,
         delay:0.2
         }} className="container mx-auto md:h-[calc(100vh-13rem)]">

 <div
 className="py-5 m text-center "> 
     <h2 className="text-3xl my-2">My portfolio</h2>
    <p className="">Dive into a curated collection of my finest work, showcasing expertise across various industries.</p> 
 </div>


<ScrollStack>
  
  <ScrollStackItem itemClassName="bg-white/30 backdrop-blur-sm text-gray-500 dark:text-gray-50 dark:bg-black/30">
   <NavLink to="/">
   <div className="grid grid-cols-2 gap-2 items-center">
    <div>
      
      <img src="https://ssl.sitew.org/images/blog/landing/2024/top/top_home_fr.svg" className="rounded-2xl" alt="" />
     
    </div>
    <div>
    <h2 className="text-2xl text-red-700 dark:text-gray-50">E-comme Store</h2>
    <p className="my-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repudiandae voluptas explicabo eius minima excepturi fuga quia est quae, veniam nostrum, amet sed ipsum error! Unde minima sunt hic quod?</p>
    <p className="my-3">
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-red-900">PHP</span>
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-red-900">HTML</span>
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-red-900">HTML</span>
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-red-900">CSS</span>
    </p>
    </div>
   </div> 
   </NavLink>
  </ScrollStackItem>

  <ScrollStackItem itemClassName="bg-white/30 backdrop-blur-sm text-gray-500 dark:text-gray-50 dark:bg-black/30">
   <div className="grid grid-cols-2 gap-2 items-center">
    <div>
      <img src="https://ssl.sitew.org/images/blog/landing/2024/top/top_home_fr.svg" className="rounded-2xl" alt="" />
      </div>
    <div>
    <h2 className="text-2xl text-red-700 dark:text-gray-50">E-comme Store</h2>
    <p className="my-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repudiandae voluptas explicabo eius minima excepturi fuga quia est quae, veniam nostrum, amet sed ipsum error! Unde minima sunt hic quod?</p>
    <p className="mt-3">
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">PHP</span>
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">HTML</span>
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">HTML</span>
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">CSS</span>
    </p>
    <button class="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 mt-3 rounded-full">
  show
</button>
    </div>
   </div>
  </ScrollStackItem>
    <ScrollStackItem itemClassName="bg-white/30 backdrop-blur-sm text-gray-500 dark:text-gray-50 dark:bg-black/30">
   <div className="grid grid-cols-2 gap-2 items-center">
    <div>
      <img src="https://ssl.sitew.org/images/blog/landing/2024/top/top_home_fr.svg" className="rounded-2xl" alt="" />
      </div>
    <div>
    <h2 className="text-2xl text-red-700 dark:text-gray-50">E-comme Store</h2>
    <p className="my-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repudiandae voluptas explicabo eius minima excepturi fuga quia est quae, veniam nostrum, amet sed ipsum error! Unde minima sunt hic quod?</p>
    <p className="mt-3">
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">PHP</span>
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">HTML</span>
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">HTML</span>
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">CSS</span>
    </p>
    <button class="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 mt-3 rounded-full">
  show
</button>
    </div>
   </div>
  </ScrollStackItem>
    <ScrollStackItem itemClassName="bg-white/30 backdrop-blur-sm text-gray-500 dark:text-gray-50 dark:bg-black/30">
   <div className="grid grid-cols-2 gap-2 items-center">
    <div>
      <img src="https://ssl.sitew.org/images/blog/landing/2024/top/top_home_fr.svg" className="rounded-2xl" alt="" />
      </div>
    <div>
    <h2 className="text-2xl text-red-700 dark:text-gray-50">E-comme Store</h2>
    <p className="my-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repudiandae voluptas explicabo eius minima excepturi fuga quia est quae, veniam nostrum, amet sed ipsum error! Unde minima sunt hic quod?</p>
    <p className="mt-3">
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">PHP</span>
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">HTML</span>
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">HTML</span>
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">CSS</span>
    </p>
    <button class="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 mt-3 rounded-full">
  show
</button>
    </div>
   </div>
  </ScrollStackItem>
    <ScrollStackItem itemClassName="bg-white/30 backdrop-blur-sm text-gray-500 dark:text-gray-50 dark:bg-black/30">
   <div className="grid grid-cols-2 gap-2 items-center">
    <div>
      <img src="https://ssl.sitew.org/images/blog/landing/2024/top/top_home_fr.svg" className="rounded-2xl" alt="" />
      </div>
    <div>
    <h2 className="text-2xl text-red-700 dark:text-gray-50">E-comme Store</h2>
    <p className="my-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repudiandae voluptas explicabo eius minima excepturi fuga quia est quae, veniam nostrum, amet sed ipsum error! Unde minima sunt hic quod?</p>
    <p className="mt-3">
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">PHP</span>
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">HTML</span>
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">HTML</span>
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">CSS</span>
    </p>
    <button class="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 mt-3 rounded-full">
  show
</button>
    </div>
   </div>
  </ScrollStackItem>
    <ScrollStackItem itemClassName="bg-white/30 backdrop-blur-sm text-gray-500 dark:text-gray-50 dark:bg-black/30">
   <div className="grid grid-cols-2 gap-2 items-center">
    <div>
      <img src="https://ssl.sitew.org/images/blog/landing/2024/top/top_home_fr.svg" className="rounded-2xl" alt="" />
      </div>
    <div>
    <h2 className="text-2xl text-red-700 dark:text-gray-50">E-comme Store</h2>
    <p className="my-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repudiandae voluptas explicabo eius minima excepturi fuga quia est quae, veniam nostrum, amet sed ipsum error! Unde minima sunt hic quod?</p>
    <p className="mt-3">
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">PHP</span>
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">HTML</span>
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">HTML</span>
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">CSS</span>
    </p>
    <button class="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 mt-3 rounded-full">
  show
</button>
    </div>
   </div>
  </ScrollStackItem>
    <ScrollStackItem itemClassName="bg-white/30 backdrop-blur-sm text-gray-500 dark:text-gray-50 dark:bg-black/30">
   <div className="grid grid-cols-2 gap-2 items-center">
    <div>
      <img src="https://ssl.sitew.org/images/blog/landing/2024/top/top_home_fr.svg" className="rounded-2xl" alt="" />
      </div>
    <div>
    <h2 className="text-2xl text-red-700 dark:text-gray-50">E-comme Store</h2>
    <p className="my-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repudiandae voluptas explicabo eius minima excepturi fuga quia est quae, veniam nostrum, amet sed ipsum error! Unde minima sunt hic quod?</p>
    <p className="mt-3">
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">PHP</span>
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">HTML</span>
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">HTML</span>
        <span className="bg-gray-200 rounded-2xl mr-2 px-4 py-1 dark:bg-gray-900">CSS</span>
    </p>
    <button class="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 mt-3 rounded-full">
  show
</button>
    </div>
   </div>
  </ScrollStackItem>
</ScrollStack>

    </motion.div>
  )
}
