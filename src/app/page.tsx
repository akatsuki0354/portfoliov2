"use client"
import React from "react";
import { Nunito } from "next/font/google";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { Spotlight } from "../../components/motion-primitives/spotlight";
import { MouseIcon } from "../app/page-data";
import { Cursor } from "../../components/motion-primitives/cursor";
import Loading from "@/components/loading";
import { usePageState } from "@/hooks/usePageState";
import Navbar from "./Components/Navbar/navbar";
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400']
})

export default function Page() {
  const { isLoading, isOverInput } = usePageState();

  return (
    <div>
      {isLoading && (
        <Loading />
      )}

      {/* Enhanced Background Animation System */}
      <div className="background-container">
        {/* Breathing circles */}
        <div className="breathing-circle"></div>
        <div className="breathing-circle"></div>
        <div className="breathing-circle"></div>

        {/* Tech-inspired accent lines */}
        <div className="tech-lines">
          <div className="tech-line"></div>
          <div className="tech-line"></div>
          <div className="tech-line"></div>
          <div className="tech-line"></div>
        </div>

        {/* Floating orbs with glow */}
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>

        <div className="floating-shapes">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="grid-pattern"></div>

        {/* Noise texture */}
        <div className="noise-texture"></div>
      </div>
      <Spotlight
        className='bg-teal-500/50 dark:bg-gray-500/50 blur-3xl'
        size={64}
        springOptions={{
          bounce: 0.3,
          duration: 0.1,
        }}
      />
      <Cursor
        attachToParent
        variants={{
          initial: { scale: 0.3, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.3, opacity: 0 },
        }}
        transition={{
          ease: 'easeInOut',
          duration: 0.15,
        }}
        className=' z-50'
      >
        {!isOverInput && (
          <div>
            <MouseIcon className='h-6 w-6' />
          </div>
        )}
      </Cursor>
      <div className={`${nunito.className} relative z-20`}>
        <div>

          <div className="fixed bottom-0 w-full flex flex-col items-center justify-center z-40">
            <Navbar />
          </div>
          <section id="Home" className="">
            <Home />
          </section>

          <section id="About" className="">
            <About />
          </section>

          <section id="Project" className="">
            <Project />
          </section>

          <section id="Contact" className="">
            <Contact />
          </section>
          <hr />
        </div>
      </div>
      <Footer />
    </div>
  );
}
