/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UovoqloGQBJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardContent, Card } from "@/components/ui/card"
import Link from "next/link"
import Header from '../../components/header'
import React from 'react';
export default function Component() {
  return (
    <>
    <Header />
      <section className="relative w-full h-[80vh] flex items-center justify-center bg-[url('/palm-trees.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80" />
        <div className="relative z-10 text-center text-white space-y-6">
          <img
            alt="Musician Profile"
            className="rounded-full mx-auto"
            height={200}
            src="/cover.jpg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width={200}
          />
          <h1 className="text-4xl font-bold">UltraV</h1>
          <p className="text-lg">EDM Producer, DJ, and Musician</p>
        </div>
      </section>
      <section className="py-20 px-4 md:px-8 lg:px-12 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Hi there! I'm UltraV, a passionate musician who loves creating upbeat, summer vibe muisc and soundscapes that transport
              listeners to a tropical paradise. My musical journey began at a 15, when I first picked up FL Studio
              and discovered my love for crafting catchy melodies and infectious rhythms.
            </p>
            <p className="text-gray-500 dark:text-gray-400 mt-4">
              Over the years, I've honed my skills and developed a unique sound that blends elements of Tropical House, reggae, and
              lofi. My music is all about spreading positivity, evoking feelings of warmth and joy, and
              encouraging people to embrace the carefree spirit of summer.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-4">Connect with Me</h2>
            <div className="flex justify-center space-x-4">
              <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                <TwitterIcon className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                <InstagramIcon className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                <PodcastIcon className="h-6 w-6" />
                <span className="sr-only">Spotify</span>
              </Link>
              <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                <YoutubeIcon className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
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