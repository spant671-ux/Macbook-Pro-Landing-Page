import { Canvas } from '@react-three/fiber'
import './style.css'
import { Environment, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'

const App = () => {
  return (
    <div className='w-full h-screen relative bg-black font-["Helvetica_Now_Display","Helvetica_Neue","Helvetica",Arial,sans-serif] overflow-hidden select-none'>
      {/* Top Navigation Bar */}
      <nav className='navbar line w-[90%] max-w-[1020px] flex items-center justify-between pt-6 pb-3 absolute top-0 left-1/2 -translate-x-1/2 z-20'>
        <a href="#" className='text-white text-base hover:opacity-75 transition-opacity'>
          <i className="ri-apple-fill"></i>
        </a>
        {[
          "Store",
          "Mac",
          "iPad", 
          "iPhone", 
          "Watch", 
          "AirPods", 
          "Home",
          "Entertainment",
          "Accessories",
          "Support"
        ].map((e) => (
          <a
            key={e}
            href={`#${e.toLowerCase()}`}
            className='text-white/80 hover:text-white font-normal text-xs transition-colors'
          >
            {e}
          </a>
        ))}
        <div className='flex items-center gap-6'>
          <button className='text-white/80 hover:text-white text-sm transition-colors cursor-pointer'>
            <i className="ri-search-line"></i>
          </button>
          <button className='text-white/80 hover:text-white text-sm transition-colors cursor-pointer'>
            <i className="ri-shopping-bag-line"></i>
          </button>
        </div>
      </nav>

      {/* Hero Typography & CTA */}
      <div className='absolute flex flex-col items-center text-white top-16 left-1/2 -translate-x-1/2 z-10'>
        {/* Main Title: Always Intact */}
        <h3 className='masked text-7xl md:text-8xl tracking-tighter font-bold'>macbook pro.</h3>

        {/* Sub-details: Smoothly fades away as screen opens, comes back when closed */}
        <div id='hero-details' className='flex flex-col items-center will-change-transform'>
          <h5 className='text-xl md:text-2xl font-semibold tracking-tight text-white/90 mt-1'>PROLED XDR Display</h5>
          <p className='text-center text-zinc-400 text-sm md:text-base max-w-md mt-2 font-normal leading-relaxed'>
            The most advanced MacBook Pro with the world’s best laptop display.
          </p>

          {/* Action Buttons */}
          <div className='flex items-center gap-4 mt-4'>
            <button className='bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-medium px-4 py-1.5 rounded-full transition-all active:scale-95 cursor-pointer shadow-lg shadow-blue-500/20'>
              Buy
            </button>
            <a
              href="#specs"
              className='text-[#2997ff] hover:underline text-xs font-medium flex items-center gap-1 transition-all'
            >
              Learn more <i className="ri-arrow-right-s-line text-sm"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Elegant Bottom Scroll Indicator */}
      <div
        id='scroll-hint'
        className='pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-zinc-500 text-[11px] tracking-wider uppercase font-medium will-change-transform'
      >
        <span>Scroll to open</span>
        <i className="ri-arrow-down-s-line text-sm animate-bounce"></i>
      </div>

      {/* 3D Scene */}
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <Environment
          files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr"]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App