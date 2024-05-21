/**
 * v0 by Vercel.
 * @see https://v0.dev/t/b8tAN0SvGkH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
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
];

export default function Music() {
  return (
    <>
      <section className="w-full py-12 md:py-24 bg-slate-200" id="music-section">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4 px-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl/none">
                  Discover My Music
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Immerse yourself in a world of captivating melodies and soulful rhythms. Explore my diverse music
                  collection and find your new favorite track.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="https://music.163.com/#/artist?app_version=9.0.80&id=12120673&dlt=0846" target="_blank"
                >
                  Listen Now On Netease Music
                </Link>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full  lg:order-last lg:aspect-square"
              height="500"
              src="/cover.jpg"
              width="500"
            />
          </div>
        </div>
      </section>
      {/* <section className="w-full py-4 md:py-6 lg:py-8 px-4 bg-slate-50" id="tracks">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6">
          {tracks.map((track, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href={track.link}>
                <span className="sr-only">Play</span>
              </Link>
              <img
                alt="Album Cover"
                className="object-cover w-full"
                height={400}
                src={track.image}
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-semibold text-lg md:text-xl">{track.title}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{track.artist}</p>
                  <Button size="icon" variant="ghost">
                    <PlayIcon className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </>
  );
}

function PlayIcon(props: any) {
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
