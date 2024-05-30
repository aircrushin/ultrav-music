import Link from "next/link"

export default function Component() {
    return (
        <footer className="bg-gray-900 text-white py-12 md:py-16 lg:py-20" data-aos="fade-up">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
                    <div className="flex flex-col items-start">
                        <Link className="flex items-center space-x-2 mb-4" href="#">
                            <MusicIcon className="h-8 w-8" />
                            <span className="text-xl font-bold">UltraV Music</span>
                        </Link>
                        <p className="text-gray-400 mb-6">Tropical House/Lofi/Ambient</p>
                        <div className="flex items-center space-x-4">
                            <Link className="text-gray-400 hover:text-white" href="#">
                                <InstagramIcon className="h-6 w-6" />
                            </Link>
                            <Link className="text-gray-400 hover:text-white" href="#">
                                <TwitterIcon className="h-6 w-6" />
                            </Link>
                            <Link className="text-gray-400 hover:text-white" href="#">
                                <PodcastIcon className="h-6 w-6" />
                            </Link>
                            <Link className="text-gray-400 hover:text-white" href="#">
                                <YoutubeIcon className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-lg font-bold mb-4">Explore</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link className="text-gray-400 hover:text-white" href="/">
                                    Discover
                                </Link>
                            </li>
                            <li>
                                <Link className="text-gray-400 hover:text-white" href="https://www.atlast.fm/playlists/" target="_blank">
                                    Playlists
                                </Link>
                            </li>
                            <li>
                                <Link className="text-gray-400 hover:text-white" href="/collab">
                                    Collaboration
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-lg font-bold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link className="text-gray-400 hover:text-white" href="/contact-me">
                                    Contact Support
                                </Link>
                            </li>
                            <li>
                                <Link className="text-gray-400 hover:text-white" href="/privacy-policy">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link className="text-gray-400 hover:text-white" href="/terms-of-service">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-lg font-bold mb-4">Friends</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link className="text-gray-400 hover:text-white" href="https://chillseason.zeabur.app/" target="_blank">
                                    Chillseason
                                </Link>
                            </li>
                            <li>
                                <Link className="text-gray-400 hover:text-white" href="https://zeabur.com/" target="_blank">
                                    Zeabur
                                </Link>
                            </li>
                            <li>
                                <Link className="text-gray-400 hover:text-white" href="https://www.atlast.fm/" target="_blank">
                                    ATLAST
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 md:mt-12 lg:mt-16 flex items-center justify-between">
                    <span className="text-gray-400 text-sm md:text-base">© 2024 UltraV Music. All rights reserved.</span>
                    <div className="flex items-center space-x-4">
                        <Link className="text-gray-400 hover:text-white" href="https://music.apple.com/cn/artist/ultra-v/1565389563" target="_blank">
                            <AppleIcon className="h-6 w-6" />
                        </Link>
                        <Link className="text-gray-400 hover:text-white" href="https://open.spotify.com/artist/0ioqyBVFLM9ce0eFyLz2Ly" target="_blank">
                            <ChromeIcon className="h-6 w-6" />
                        </Link>
                        <Link className="text-gray-400 hover:text-white" href="https://music.163.com/#/artist?app_version=9.0.80&id=12120673&dlt=0846" target="_blank">
                            <CloudIcon className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function AppleIcon(props: any) {
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
            <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
            <path d="M10 2c1 .5 2 2 2 5" />
        </svg>
    )
}


function ChromeIcon(props: any) {
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
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="21.17" x2="12" y1="8" y2="8" />
            <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
            <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
        </svg>
    )
}


function CloudIcon(props: any) {
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
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
    )
}


function InstagramIcon(props: any) {
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
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
}


function MusicIcon(props: any) {
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
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
        </svg>
    )
}


function PodcastIcon(props: any) {
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
            <path d="M16.85 18.58a9 9 0 1 0-9.7 0" />
            <path d="M8 14a5 5 0 1 1 8 0" />
            <circle cx="12" cy="11" r="1" />
            <path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z" />
        </svg>
    )
}


function TwitterIcon(props: any) {
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
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    )
}


function YoutubeIcon(props: any) {
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
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" />
        </svg>
    )
}