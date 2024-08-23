import Chat from '@/components/chat';
import Hero from '../components/hero'
import Music from '../components/music'
import Banner from '@/components/banner';

export default function Home() {
  return (
    <div>
      <Hero />
      <iframe 
        style={{ borderRadius: "12px" }} 
        src="https://open.spotify.com/embed/track/0sDWUnDav1NkpyU0ytXhrH?utm_source=generator" 
        width="100%" 
        height={352} 
        frameBorder="0" 
        allowFullScreen 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
      />
      <Music />
      {/* <Chat /> */}
    </div>
  );
}