import { Canvas } from '@react-three/fiber'
import './style.css'
import { Environment, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'

const App = () => {
  return (
    <div className='w-full h-screen font-["Helvetica_Now_Display","Helvetica_Neue","Helvetica",Arial,sans-serif]'>
      <div className='navbar line flex gap-10 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2'>
      {[
        "Store",
        "Mac",
        "iPad", 
        "iPhone", 
        "Watch", 
        "Airpods", 
        "Home",
        "Entertainment",
        "Accessories",
        "Support"].map((e) => (
        <a href="" className='text-white font-medium text-sm'>{e}</a>
      ))}
      </div>
      <div className='absolute flex flex-col items-center text-white top-22 left-1/2 -translate-x-1/2'>
      <h3 className='masked text-7xl tracking-tighter font-bold'>macbook pro.</h3>
      <h5>Oh so pro!</h5>
      <p className='text-center w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint hic obcaecati soluta expedita!</p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
      <Environment
        files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr"]} />
      <ScrollControls pages={3}>
        <MacContainer />
      </ScrollControls>
    </Canvas>
    </div>
  )
}

export default App