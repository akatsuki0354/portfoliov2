import { CardDescription } from "@/components/ui/card";
import Profile from "@/app/assets/img/transparent-profile1.png";
import { useState, useEffect } from "react";
import '../Home/Home.style.css'
import { Tilt } from "../../../../components/motion-primitives/tilt";
import { SpringElement } from '@/components/animate-ui/components/spring-element';
import { TypingText } from '@/components/animate-ui/text/typing';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar';
const dataText = [
    "FrontEnd Web Developer",
    "BackEnd Web Developer",
    "Full Stack Web Developer",
];
function Home() {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    useEffect(() => {
        if (charIndex < dataText[index].length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + dataText[index][charIndex]);
                setCharIndex(charIndex + 1);
            }, 100);

            return () => clearTimeout(timeout);
        } else {
            setTimeout(() => {
                setText("");
                setCharIndex(0);
                setIndex((prev) => (prev + 1) % dataText.length);
            }, 700);
        }
    }, [charIndex, index]);

    return (
        <div className="pb-24 lg:pb-0 flex justify-center place-items-center w-full">
            <div className="container home">
                <div className="flex justify-between items-center gap-5   profile_and_text" >
                    <div className="text_profile md:basis-[63%]">
                        <h1 className="text-[clamp(2.25rem,5vw+1rem,6rem)] font-bold">
                            <span className="text-muted-foreground ">Hello!</span> I&apos;m Franco
                        </h1>
                        <h1>
                            <TypingText
                                className="text-[clamp(2.25rem,2vw+1rem,3rem)]"
                                text={dataText}
                                cursor
                                loop={true}
                                cursorClassName="h-10"
                            />
                        </h1>
                        <CardDescription className="text-xl p-2 md:p-0 text-justify ">
                            Based in Bulacan, I am a second-year college student at ICI with a deep passion for building and exploring digital solutions. Since 2021, I&apos;ve been focused on growing as a web developer, constantly learning and refining my skills. While I enjoy playing chess and Mobile Legends in my free time, my true drive comes from creating meaningful web experiences and continuously improving in the tech space.
                            <div className="mt-4 inline-talents flex gap-4">
                                <span className="bg-pink-200 text-pink-800 dark:bg-pink-700 dark:text-pink-200 text-sm px-3 py-1 rounded-full">Web App</span>
                                <span className="bg-blue-200 text-blue-800 dark:bg-blue-700 dark:text-blue-200 text-sm px-3 py-1 rounded-full">Responsive</span>
                                <span className="bg-orange-200 text-orange-800 dark:bg-orange-700 dark:text-orange-200 text-sm px-3 py-1 rounded-full">UI / UX</span>
                            </div>
                        </CardDescription>
                    </div>
                    <div className="img">
                        <SpringElement>
                            <Tilt rotationFactor={10} isRevese>
                                <Avatar className="size-70  lg:size-90 AvatarImage ">
                                    <AvatarImage
                                        draggable={false}
                                        src={Profile.src}
                                    />
                                    <AvatarFallback>AK</AvatarFallback>
                                </Avatar>
                            </Tilt>
                        </SpringElement>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

