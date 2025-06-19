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
import Home from "./Components/Home/Home";
import { Nunito } from "next/font/google";
import About from "./Components/About/About";
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400']
})
export default function Page() {
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');
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
    <div className={nunito.className}>
      <div className="fixed  bottom-0 w-full flex flex-col items-center justify-center z-50">
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
      <section id="About">
        <About />
      </section>
    </div>
  );
}
