// components/Hero.js
import Typewriter from './Typewriter';
export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white">
      <div className="px-4 md:px-6 animate-fade-in">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter animate-scale-in max-w-5xl">
            Immerse Yourself in the Sounds of UltraV
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl animate-fade-in">
              <Typewriter text="Discover the captivating Tropical House music of UltraV" speed={50} />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
