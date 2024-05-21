// components/Hero.js
import Typewriter from './Typewriter';
export default function Hero() {
  return (
    <div className="bg-[#181b1d]">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 text-white">
        <div className="px-4 md:px-6 animate-fade-in">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter animate-scale-in lg:max-w-5xl max-w-2xl">
                Immerse Yourself in the Sounds of <span className='text-[#b197fc]'>UltraV</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl animate-fade-in">
                <Typewriter text="Discover the captivating Tropical House music of UltraV" speed={30} />
              </p>
            </div>
            <div className="mt-8 flex space-x-8">
          <button className="inline-flex h-12 items-center justify-center rounded-md bg-purple-700 px-6 py-3 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-purple-800/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
            Listen Now
          </button>
          <button className="inline-flex h-12 items-center justify-center rounded-md border text-gray-900 bg-white px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-300 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
            Learn More
          </button>
        </div>
          </div>
        </div> 
      </section>
    </div>
  )
}
