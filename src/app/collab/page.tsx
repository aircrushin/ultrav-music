"use client"
import Head from 'next/head';
import { useState } from 'react';
import Artists from '@/components/artists';
// import { ToastContainer, toast } from 'react-nextjs-toast';

export default function Collab() {
  const [email, setEmail] = useState('ultrav0229@gmail.com');

  const handleCopy = (e:any) => {
    e.preventDefault();
    // navigator.clipboard.writeText(email).then(() => {
    //   toast.notify('Email address copied to clipboard!', {
    //     duration: 3, // duration in seconds
    //     type: "success"
    //   });
    // });
  };

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Collaboration - UltraV Music</title>
      </Head>
      {/* <ToastContainer position="top-right"/> */}
      <Artists />
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6">Collaborate with UltraV</h1>
        <p className="mb-4">
          If you are a producer or a singer who wants to make a dope song with me, feel free to send me a demo! <br /> I will listen to it and give you feedback as soon as possible.
        </p>
        <h2 className="text-2xl font-bold mb-4">Genres I Collaborate With</h2>
        <p className="mb-4">
          In most cases, I collaborate with producers and singers in the following genres:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Tropical House</li>
          <li>Deep House</li>
          <li>Lofi Hip-hop</li>
          <li>Future Bass</li>
          <li>anything that is a feeling of summer!</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Send Me a Demo</h2>
        <p className="mb-4">
          To send me a demo, please email me at <a href="#" className='text-blue-500 hover:underline' onClick={handleCopy}>ultrav0229@gmail.com</a>
        </p>
      </div>
    </div>
  );
}

