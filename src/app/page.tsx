// src/app/page.tsx
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import About from '@/components/sections/About';
import Blog from '@/components/sections/Blog';
import Faq from '@/components/sections/Faq';
import Hero from '@/components/sections/Hero';
import Packages from '@/components/sections/Packages';
import Rooms from '@/components/sections/Rooms';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import Values from '@/components/sections/Values';
import VideoTour from '@/components/sections/VideoTour';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Values />
        <Services />
        <Rooms />
        <VideoTour />
        <Testimonials />
        <Packages />
        <Blog />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
