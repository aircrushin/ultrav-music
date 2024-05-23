/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UovoqloGQBJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardContent, Card } from "@/components/ui/card"
import Link from "next/link"
import React from 'react';
import FAQ from "@/components/faq"
export default function Component() {
  return (
    <>
      <section className="relative w-full h-[80vh] flex items-center justify-center bg-[url('/palm-trees.jpg')] bg-cover bg-center mt-6">
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
            <p className="text-gray-500 dark:text-gray-400 mt-4"> You can connect with me on social media or by email.</p>
            <p className="italic items-end justify-end space-x-2 mt-4 text-end md:tracking-wider">Email: ultrav0229@gmail.com</p>
            <p className="italic items-end justify-end text-end md:tracking-wider">wechat: aircrushin</p>
          </div>
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <FAQ />
        </div>
      </section>
    </>
  )
}