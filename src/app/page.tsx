// src/app/page.tsx
import Navbar from '@/components/layout/Navbar';
import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero';
import Values from '@/components/sections/Values';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Values />
      </main>
    </>
  );
}
