"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('.menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div>
    <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-[#181b1d] text-white shadow-md">
      <div className="flex items-center">
        <Link href="/">
          <div className="text-2xl font-bold italic text-gradient px-2 hover:scale-105">UV</div>
        </Link>
      </div>
      <nav className="hidden md:flex items-center space-x-6 ml-auto">
        <Link className="hover:underline" href="/music">
          Music
        </Link>
        <Link className="hover:underline" href="/about">
          About Me
        </Link>
        <Link className="hover:underline" href="/collab">
          Collaboration
        </Link>
        {/* <Link className="hover:underline" href="#">
          Contact
        </Link> */}
      </nav>
      <div className="menu-container md:hidden">
        <button
          className="p-2 rounded-md hover:bg-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
        {isMenuOpen && (
          <nav
            className="absolute top-full right-0 w-full bg-[#181b1d] text-white shadow-md flex flex-col items-stretch p-4"
          >
            <Link className="hover:underline py-2 px-4" href="/music">
              Music
            </Link>
            <Link className="hover:underline py-2 px-4" href="/about">
              About Me
            </Link>
            <Link className="hover:underline py-2 px-4" href="/collab">
              Collaboration
            </Link>
          </nav>
        )}
      </div>
    </header>
    </div>
  );
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
  );
}

export default Header;