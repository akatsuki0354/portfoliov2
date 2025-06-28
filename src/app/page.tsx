"use client"
import Link from "next/link";
import React from "react";
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
import { usePageState } from "@/hooks/usePageState";
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400']
})

export default function Page() {
  const { mode, activeSection, isOverInput, isLoading, toggleMode } = usePageState();
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
