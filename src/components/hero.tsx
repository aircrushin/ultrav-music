// components/Hero.js
import Typewriter from './Typewriter';
import Header from './header'
export default function Hero() {
  return (
    <div className="lg:h-screen bg-gradient-to-r from-[#343a40] to-[#1E293B]">
      <Header />
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 text-white">
        <div className="px-4 md:px-6 animate-fade-in">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter animate-scale-in lg:max-w-5xl max-w-2xl">
                Immerse Yourself in the Sounds of <span className='text-[#b197fc]'>UltraV</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl animate-fade-in">
                <Typewriter text="Discover the captivating Tropical House music of UltraV" speed={50} />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
