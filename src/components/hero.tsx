import Typewriter from './Typewriter';
import Link from "next/link";
import Banner from '@/components/banner'; 
import { FaSpotify, FaYoutube, FaSoundcloud } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="bg-[#181b1d]">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 text-white mt-10">
        <div className="px-4 md:px-6 animate-fade-in">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-6">
              <h1 className="leading-[60px] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter animate-scale-in lg:max-w-5xl max-w-2xl">
            <span className='text-gradient'>UltraV Music</span>
              </h1>
              <p className="mx-auto max-w-[1000px] text-gray-300 md:text-xl animate-fade-in">
                <Typewriter text="Music Producer/DJ -- Tropical House -- Chill Vibes -- This is how tomorrow moves" speed={30} />
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
              <Link href="https://open.spotify.com/artist/0ioqyBVFLM9ce0eFyLz2Ly" target="_blank">
                <button className="inline-flex h-12 items-center justify-center rounded-md bg-green-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 w-full md:w-auto">
                  <FaSpotify className="mr-2" /> Listen Now
                </button>
              </Link>
              <Link href="/#music-section">
                <button className="inline-flex h-12 items-center justify-center rounded-md border border-white text-white bg-transparent px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 w-full md:w-auto">
                  Explore Music
                </button>
              </Link>
            </div>
            {/* <div className="mt-8 flex space-x-6">
              <Link href="https://youtube.com/ultraVMusic" target="_blank">
                <FaYoutube className="text-3xl text-red-600 hover:text-red-700 transition-colors" />
              </Link>
              <Link href="https://soundcloud.com/ultraVMusic" target="_blank">
                <FaSoundcloud className="text-3xl text-orange-500 hover:text-orange-600 transition-colors" />
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}
