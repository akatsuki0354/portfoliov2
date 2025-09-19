import React from 'react'
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { usePageState } from "@/hooks/usePageState";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { DATA } from '@/app/page-data'
import Link from "next/link";
import { Sun, MoonIcon } from "lucide-react";
export default function Navbar() {
    const { mode, activeSection, toggleMode } = usePageState();
    return (
        <div>
            <div className="pb-10">
                <TooltipProvider>
                    <Dock iconDistance={0} className='dark:bg-stone-800/50'>
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
    )
}