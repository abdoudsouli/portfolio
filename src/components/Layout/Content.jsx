
import Aurora from '../../components/Reactbits/Aurora'
export default function Contant({children}) {

  return (
    <>
    <div className="bg-white   text-gray-800    dark:bg-gray-900  dark:text-gray-50 h-max md:h-dvh">
  <div className='relative z-20'>
     {children} 
  </div>
   <div className="absolute top-0 left-0 w-full h-full z-0 opacity-25">
<Aurora
  colorStops={["#fca3bb","#ae0000","#ff0000"]}
  blend={0.8}
  amplitude={1.0}
  speed={1.6}
/>
   </div>
    </div>
    </>
  )
}
