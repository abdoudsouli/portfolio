
import Aurora from '../../components/Reactbits/Aurora'
export default function Contant({children}) {

  return (
    <>
    <div>
  <div className='relative z-20'>
     {children} 
  </div>

   <div className="absolute top-0 left-0 w-full h-full z-0 opacity-25">
<Aurora
  speed={0.6}
  scale={3}
  brightness={2.4}
  color1="#3B82F6"
  color2="#EF4444"
  noiseFrequency={2.5}
  noiseAmplitude={0.5}
  bandHeight={0.5}
  bandSpread={0.2}
  octaveDecay={0.08}
  layerOffset={0.1}
  colorSpeed={1}
  enableMouseInteraction
  mouseInfluence={0.4}
/>
   </div>
    </div>
    </>
  )
}
