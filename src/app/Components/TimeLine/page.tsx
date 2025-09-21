import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { ImageLink } from "@/components/ui/image-link";
import planing1 from '../../assets/img/planing-1.jpg'
import planing2 from '../../assets/img/planing-2.jpg'
import image2 from '../../assets/img/image-2.jpg'
export default function TimelinePage() {
    const data = [
        {
            year: "2025",
            month: "SnapTrail",
            content: (
                <div>
                    <p className=" mb-2 text-muted-foreground">

                        I am currently working and collaborating on projects at <a href="https://snaptrail.app/" className="underline-offset-2 underline">SnapTrail</a> as a Full Stack App Developer, using React Native and Firebase.

                    </p>
                </div>
            ),
        },
        {
            year: "2025",
            month: "Champion Blitz",
            content: (
                <div>
                    <p className=" mb-2   text-muted-foreground">
                        On April 3, I became the champion in a blitz programming competition. I competed against 2nd, 3rd, and 4th-year college students and managed to defeat them.
                    </p>
                    <ImageLink
                        src={image2}
                        alt="Champion Blitz Competition"
                        className="object-cover aspect-video rounded-lg"
                        linkText="View Competition Image"
                    />
                </div>
            ),
        },
        {
            year: "2024",
            month: "College Journey",
            content: (
                <div>
                    <p className=" mb-2   text-muted-foreground">
                        I began my college journey pursuing a <strong>Bachelor of Science in Information Systems</strong>,
                        where I gained foundational knowledge in flowcharts and programming fundamentals, and later
                        expanded into web development using frameworks such as <strong>React, Next.js,</strong> and <strong>TypeScript</strong>.
                    </p>
                </div>
            ),
        },
        {
            year: "2023",
            month: "Best in Research",
            content: (
                <div>
                    <p className=" mb-2   text-muted-foreground">
                        I started learning <strong>web development</strong> in 2021. During senior high school, I deepened my knowledge and began building my own projects. When our capstone project started,
                        I actively presented and discussed my work with my teacher. Our group was also recognized as the <strong>Best in Research</strong> in the ICT Strand.
                    </p>
                    <ImageLink
                        src={[planing1, planing2]}
                        className="md:w-56 object-cover aspect-video rounded-lg"
                        alt={["Research Project 1", "Research Project 2"]}
                        linkText="View Research Images"
                    />
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
