'use client'
import React, { useRef, useEffect} from 'react'
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
import '../Navbar/nav.style.css'

export default function Navbar() {
    const { mode, toggleMode, activeSection } = usePageState();
    const containerRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLUListElement>(null);
    const filterRef = useRef<HTMLSpanElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    
    // Map activeSection to navbar index
    const getActiveIndex = () => {
        return DATA.navbar.findIndex(item => item.href === `#${activeSection}`);
    };
    
    const activeIndex = getActiveIndex();

    const noise = (n = 1) => n / 2 - Math.random() * n;

    const getXY = (
        distance: number,
        pointIndex: number,
        totalPoints: number
    ): [number, number] => {
        const angle =
            ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
        return [distance * Math.cos(angle), distance * Math.sin(angle)];
    };

    const createParticle = (
        i: number,
        t: number,
        d: [number, number],
        r: number
    ) => {
        const rotate = noise(r / 10);
        return {
            start: getXY(d[0], 15 - i, 15),
            end: getXY(d[1] + noise(7), 15 - i, 15),
            time: t,
            scale: 1 + noise(0.2),
            color: [1, 2, 3, 1, 2, 3, 1, 4][Math.floor(Math.random() * 8)],
            rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
        };
    };

    const makeParticles = (element: HTMLElement) => {
        const d: [number, number] = [90, 10];
        const r = 100;
        const bubbleTime = 1200 + 300;
        element.style.setProperty("--time", `${bubbleTime}ms`);
        for (let i = 0; i < 15; i++) {
            const t = 1200 + noise(600);
            const p = createParticle(i, t, d, r);
            element.classList.remove("active");
            setTimeout(() => {
                const particle = document.createElement("span");
                const point = document.createElement("span");
                particle.classList.add("particle");
                particle.style.setProperty("--start-x", `${p.start[0]}px`);
                particle.style.setProperty("--start-y", `${p.start[1]}px`);
                particle.style.setProperty("--end-x", `${p.end[0]}px`);
                particle.style.setProperty("--end-y", `${p.end[1]}px`);
                particle.style.setProperty("--time", `${p.time}ms`);
                particle.style.setProperty("--scale", `${p.scale}`);
                particle.style.setProperty("--color", `var(--color-${p.color}, white)`);
                particle.style.setProperty("--rotate", `${p.rotate}deg`);
                point.classList.add("point");
                particle.appendChild(point);
                element.appendChild(particle);
                requestAnimationFrame(() => {
                    element.classList.add("active");
                });
                setTimeout(() => {
                    try {
                        element.removeChild(particle);
                    } catch { }
                }, t);
            }, 30);
        }
    };

    const updateEffectPosition = (element: HTMLElement) => {
        if (!containerRef.current || !filterRef.current || !textRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const pos = element.getBoundingClientRect();
        const styles = {
            left: `${pos.x - containerRect.x}px`,
            top: `${pos.y - containerRect.y}px`,
            width: `${pos.width}px`,
            height: `${pos.height}px`,
        };
        Object.assign(filterRef.current.style, styles);
        Object.assign(textRef.current.style, styles);
        textRef.current.innerText = element.innerText;
    };

    const handleClick = (e: React.MouseEvent<HTMLLIElement>, index: number) => {
        console.log(index)
        const liEl = e.currentTarget;
        updateEffectPosition(liEl);
        if (filterRef.current) {
            const particles = filterRef.current.querySelectorAll(".particle");
            particles.forEach((p) => filterRef.current!.removeChild(p));
        }
        if (textRef.current) {
            textRef.current.classList.remove("active");
            void textRef.current.offsetWidth;
            textRef.current.classList.add("active");
        }
        if (filterRef.current) {
            makeParticles(filterRef.current);
        }
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLAnchorElement>,
        index: number
    ) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            const liEl = e.currentTarget.parentElement;
            if (liEl) {
                handleClick(
                    { currentTarget: liEl } as React.MouseEvent<HTMLLIElement>,
                    index
                );
            }
        }
    };

    useEffect(() => {
        if (!navRef.current || !containerRef.current) return;
        const activeLi = navRef.current.querySelectorAll("li")[
            activeIndex
        ] as HTMLElement;
        if (activeLi) {
            updateEffectPosition(activeLi);
            textRef.current?.classList.add("active");
        }
        const resizeObserver = new ResizeObserver(() => {
            const currentActiveLi = navRef.current?.querySelectorAll("li")[
                activeIndex
            ] as HTMLElement;
            if (currentActiveLi) {
                updateEffectPosition(currentActiveLi);
            }
        });
        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, [activeIndex]);

    return (
        <div>
            <div className="pb-10">
                <TooltipProvider>
                    <div className="relative" ref={containerRef}>
                        <Dock iconDistance={0} className='dark:bg-stone-800/50'>
                            <nav
                                className="flex relative"
                                style={{ transform: "translate3d(0,0,0.01px)" }}
                            >
                                <ul
                                    ref={navRef}
                                    className="flex gap-4 list-none p-0 px-4 m-0 relative z-[3]"
                                    style={{
                                        color: "white",
                                        textShadow: "0 1px 1px hsl(205deg 30% 10% / 0.2)",
                                    }}
                                >
                                    {DATA.navbar.map((item, index) => {
                                        const navItem = (
                                            <Link
                                                href={item.href}
                                                onKeyDown={(e) => handleKeyDown(e, index)}
                                                className="outline-none flex items-center gap-2"
                                            >
                                                <li
                                                    key={index}
                                                    className={` p-2 rounded-full dark:hover:bg-stone-800/50 hover:bg-teal-700/20 relative cursor-pointer transition-[background-color_color_box-shadow] duration-300 ease shadow-[0_0_0.5px_1.5px_transparent] text-teal-700  hover:scale-105 ${activeIndex === index ? "active border-2 dark:border-teal-300 border-teal-600 shadow-[0_0_10px_rgba(20,184,166,0.5)] dark:shadow-[0_0_10px_rgba(94,234,212,0.6)] ring-2 dark:ring-teal-200/40 ring-teal-400/40" : ""
                                                        }`}
                                                    onClick={(e) => handleClick(e, index)}
                                                >
                                                    <item.icon className={`size-5 transition-all duration-300 ease-in-out hover:scale-110 hover:drop-shadow-lg ${activeIndex === index ? 'text-white' : 'text-teal-600 hover:text-teal-700 dark:text-white dark:hover:text-white'}`} />

                                                </li>
                                            </Link>
                                        );

                                        return (
                                            <Tooltip key={index}>
                                                <TooltipTrigger asChild>
                                                    {navItem}
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>{item.label}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        );
                                    })}
                                </ul>
                            </nav>
                            <span className="effect filter" ref={filterRef} />
                            <span className="effect text" ref={textRef} />

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
                    </div>
                </TooltipProvider>
            </div>

            {/* Gooey Effect Styles */}
          
        </div>
    )
}