
import Link from "next/link";
import '../app/animate.css';
import Typewriter from './Typewriter';
import { Button } from "@/components/ui/button";

const tracks = [
  {
    title: "Nothin' At All",
    artist: "UltraV",
    image: "/nothing-at-all.jpg",
    link: "#",
  },
  {
    title: "Meant To Be",
    artist: "UltraV",
    image: "/meant-to-be.jpg",
    link: "#",
  },
  {
    title: "Love Me For Life",
    artist: "UltraV",
    image: "/love-me-for-life.jpg",
    link: "#",
  },
  {
    title: "Leaving You",
    artist: "UltraV",
    image: "/leaving-you.jpg",
    link: "#",
  },
  // 添加更多图片
  {
    title: "New Horizons",
    artist: "UltraV",
    image: "/new-horizons.jpg",
    link: "#",
  },
  {
    title: "Eternal Echoes",
    artist: "UltraV",
    image: "/eternal-echoes.jpg",
    link: "#",
  },
];

export default function Music() {
  return (
    <>
      <section className="w-full py-12 md:py-24 bg-slate-200" id="music-section">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4 px-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl/none" data-aos="fade-up">
                  <Typewriter text="Discover My Music" speed={100} />
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400" data-aos="fade-up">
                  Immerse yourself in a world of captivating melodies and soulful rhythms. Explore my diverse music
                  collection and find your new favorite track.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row" data-aos="fade-up">
                <Link
                  className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="https://music.163.com/#/artist?app_version=9.0.80&id=12120673&dlt=0846"
                  target="_blank"
                >
                  Listen Now On Netease Music
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10 lg:mr-6">
                {tracks.slice(0, 4).map((track, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-500" data-aos="fade-up">
                    <img
                      alt={track.title}
                      className="object-cover w-full"
                      src={track.image}
                      width={10}
                      
                      height={10}
                    />
                  </div>
                ))}
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PlayIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}
