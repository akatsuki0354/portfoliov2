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
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400']
})
export default function Page() {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    const storedMode = localStorage.getItem('mode');
    if (storedMode) setMode(storedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('mode', mode);
    if (mode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [mode]);

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
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
        className='left-12 top-4 z-50 '
      >
        <div>
          <MouseIcon className='h-6 w-6' />
        </div>
      </Cursor>
      <div className={`${nunito.className} dark:bg-muted`}>
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
                            "size-12 rounded-full",
                          )}
                        >
                          <item.icon className="size-4" />
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
        <section id="Home">
          <Home />
        </section>
        <hr />
        <section id="About">
          <About />
        </section>
        <hr />
        <section id="Project">
          <Project />
        </section>
        <hr />
        <section id="Contact">
          <Contact />
        </section>
        <hr />
        <Footer />
      </div>
    </div>
  );
}
