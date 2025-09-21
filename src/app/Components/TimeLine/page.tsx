import React from "react";
import { Timeline } from "@/components/ui/timeline";
export default function TimelinePage() {
    const data = [
        {
            year: "2025",
            month: "January",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Currently a 2nd-year college working student, building projects like <a href="https://snaptrail.app/" className="underline-offset-2 underline">SnapTrail </a>
                        and continuously learning new technologies.
                    </p>
                </div>
            ),
        },
        {
            year: "2024",
            month: "September",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Started my second year of college while working part-time. Focused on improving my web development skills and building real-world projects.
                    </p>
                </div>
            ),
        },
        {
            year: "2024",
            month: "March",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Completed my first year of college and began exploring modern web technologies including React, Next.js, and TypeScript.
                    </p>
                </div>
            ),
        },
        {
            year: "2024",
            month: "January",
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Started my college journey as a Computer Science student
                    </p>
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Enrolled in Computer Science program
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Started learning programming fundamentals
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Built my first portfolio website
                        </div>
                    </div>
                </div>
            ),
        },
        {
            year: "2023",
            month: "Early",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Discovered my passion for web development and started learning HTML, CSS, and JavaScript through online tutorials and courses.
                    </p>
                </div>
            ),
        },
    ];
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}
