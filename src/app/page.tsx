"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { DATA } from '../app/page-data'
import { Sun, MoonIcon } from "lucide-react";
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
import { Particles } from "@/components/magicui/particles";
import { AnimatedBackground } from "@/components/motion-primitives/animated-background";

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400']
})

export default function Page() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [activeSection, setActiveSection] = useState('Home');
  const [isOverInput, setIsOverInput] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT' || target.contentEditable === 'true') {
        setIsOverInput(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT' || target.contentEditable === 'true') {
        setIsOverInput(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  useEffect(() => {
    const storedMode = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialMode = storedMode || (prefersDark ? 'dark' : 'light');
    setMode(initialMode);
    setIsLoaded(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem('theme', mode);

    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [mode, isLoaded]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      const storedTheme = localStorage.getItem('theme');
      if (!storedTheme) {
        setMode(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const sections = ['Home', 'About', 'Project', 'Contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          },
          {
            threshold: 0.2,
            rootMargin: '-10% 0px -10% 0px'
          }
        );
        observer.observe(section);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      {isLoading && (
        <Loading />
      )}
      
      {/* Enhanced Background Animation System */}
      <div className="background-container">
        {/* Main gradient background */}
        {/* <div className="background-gradient"></div> */}
        
        {/* Dynamic gradient overlay */}
        {/* <div className="dynamic-gradient"></div> */}
        
        {/* Aurora effect */}
        {/* <div className="aurora-effect"></div> */}
        
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
        
        {/* Animated mesh gradient overlay */}
        {/* <div className="mesh-gradient"></div> */}
        
        {/* Floating geometric shapes
        <div className="floating-shapes">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div> */}
        
        {/* Grid pattern overlay */}
        {/* <div className="grid-pattern"></div> */}
        
        {/* Noise texture */}
        {/* <div className="noise-texture"></div> */}
        
        {/* Animated particles */}
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>

      {/* Additional Animated Background Component */}
      <AnimatedBackground 
        variant="all" 
        intensity="subtle" 
        className="z-5"
      />

      {/* Interactive Particles Component */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <Particles
          quantity={40}
          staticity={40}
          ease={60}
          size={1.2}
          color="#3b82f6"
          vx={0.05}
          vy={0.05}
        />
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
            <div className="pb-10">
              <TooltipProvider>
                <Dock iconDistance={0}>
                  {DATA.navbar.map((item) => (
                    <DockIcon key={item.label}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={item.href}
                            aria-label={item.label}
                            className={cn(
                              buttonVariants({ variant: "ghost", size: "icon" }),
                              "size-12 rounded-full relative",
                              activeSection === item.label && "bg-primary/20 ring-2 ring-primary/50"
                            )}
                          >
                            <item.icon className="size-4" />
                            {activeSection === item.label && (
                              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
                            )}
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{item.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    </DockIcon>
                  ))}
                  <Separator orientation="vertical" className="h-full" />
                  {Object.entries(DATA.contact.social).map(([name, social]) => (
                    <DockIcon key={name}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={social.url}
                            aria-label={social.name}
                            className={cn(
                              buttonVariants({ variant: "ghost", size: "icon" }),
                              "size-12 rounded-full",
                            )}
                          >
                            <social.icon className="size-4" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </DockIcon>
                  ))}
                  <Separator orientation="vertical" className="h-full py-2" />
                  <DockIcon>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className='mode'>
                          {mode === 'light' ? (
                            <Button variant={'ghost'} onClick={toggleMode}><MoonIcon /></Button>
                          ) : (
                            <Button variant={'ghost'} onClick={toggleMode}><Sun /></Button>
                          )}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Theme</p>
                      </TooltipContent>
                    </Tooltip>
                  </DockIcon>
                </Dock>
              </TooltipProvider>
            </div>

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
