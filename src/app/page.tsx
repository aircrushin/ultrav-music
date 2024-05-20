import Image from "next/image";
import Hero from '../components/hero'
import Header from '../components/header'
import Music from '../components/music'
export default function Home() {
  return (
    <div>
        <Header />
        <Hero />
        <Music />
    </div>
  );
}
