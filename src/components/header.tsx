/**
 * v0 by Vercel.
 * @see https://v0.dev/t/aOwCeZeocxB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white shadow-md">
      <div className="flex items-center">
        <Link href="/">
        <div className="text-2xl font-bold italic">UltraV Music</div>
        </Link>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <Link className="hover:underline" href="/#music-section">
          Music
        </Link>
        <Link className="hover:underline" href="/about">
          About Me
        </Link>
        {/* <Link className="hover:underline" href="#">
          Shows
        </Link>
        <Link className="hover:underline" href="#">
          Contact
        </Link> */}
      </nav>
      <button className="md:hidden p-2 rounded-md hover:bg-gray-700">
        <MenuIcon className="h-6 w-6" />
      </button>
    </header>
  )
}

function MenuIcon(props: any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}