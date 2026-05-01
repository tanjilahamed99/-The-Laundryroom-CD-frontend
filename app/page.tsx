"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import VideoSection from "@/components/VideoSection";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import IntroLoader from "@/components/IntroLoader";
import BubbleCursor from "@/components/BubbleCursor";
import LaundryTrack from "@/components/LaundryTrack";

export default function Home() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <IntroLoader done={done} />

      {done && (
        <>
          <Navbar />
          <main>
            <BubbleCursor />
            <Hero />
            <Ticker />
            <Stats />
            <Services />
            <HowItWorks />
            <Pricing />
            <VideoSection />
            <LaundryTrack />
            <About />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
