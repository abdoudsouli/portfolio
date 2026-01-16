
import img  from '../../assets/me.png'
import SplitText from '../../components/Reactbits/SplitText'
import TextType from '../../components/Reactbits/TextType'

export default function Home() {
  return (
    <div className="container h-[80%] mx-auto ">
      <div className="grid md:grid-cols-1 mx-3 lg:grid-cols-2 mx-0 gap-4 text-gray-50">
         <div className='grid grid-cols-1 content-center'>
<div className=''>
<SplitText
text='Abderrazak Dsouli'
delay={200}
duration={1.1}
className="text-2xl font-semibold"
/>    
</div>
<div className=''>
<TextType
className='text-5xl font-black uppercase'
text={["FrontEnd", "BackEnd", "Happy coding!"]}
typingSpeed={75}
pauseDuration={1500}
showCursor={true}
cursorCharacter="|"
/> 
</div>

             <p
             className='py-4 text-gray-400 text-lg leading-10'
             >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi placeat necessitatibus, exercitationem voluptatum optio enim eius praesentium aliquid adipisci et accusantium dicta excepturi quis cum iusto! Adipisci reprehenderit eligendi sunt?</p>
        <div className='mt-3 '>
          <ul className='flex justify-between '>
            <li>
                <a className="py-2 px-4 rounded-lg bg-red-950 text-gray-50 text-sm hover:bg-red-500 transition ease-in-out duration-500" href="http://" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </li>
            <li>
                 <a className="py-2 px-4 rounded-lg bg-red-950 text-gray-50 text-sm hover:bg-red-500 transition ease-in-out duration-500" href="http://" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
                 <a className="py-2 px-4 rounded-lg bg-red-950 text-gray-50 text-sm hover:bg-red-500 transition ease-in-out duration-500" href="http://" target="_blank" rel="noopener noreferrer">Email</a>
            </li>
            <li>
                 <a className="py-2 px-4 rounded-lg bg-red-950 text-gray-50 text-sm hover:bg-red-500 transition ease-in-out duration-500" href="http://" target="_blank" rel="noopener noreferrer">Phone</a>
            </li>
          </ul>
        </div>
         </div>

         <div className='flex justify-center py-20'>
            <img className='shadow-pink-950 shadow-2xl rounded-3xl block h-100' src={img} alt="" />
         </div>
      </div>
    </div>
  )
}
