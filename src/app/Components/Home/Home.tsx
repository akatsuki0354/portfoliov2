import { CardDescription } from "@/components/ui/card";
import Profile from "@/app/assets/img/transparent-profile1.png";
import { useState, useEffect } from "react";
import '../Home/Home.style.css'
import Image from 'next/image'
import { Tilt } from "../../../../components/motion-primitives/tilt";

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
                <div className="flex justify-between items-center   profile_and_text" >
                    <div className="text_profile md:basis-[63%]">
                        <h1 className="h1_Name">
                            <span className="text-muted-foreground ">Hello!</span> I&#39;m Franco
                        </h1>
                        <h1 className="title text-emerald-600 font-semibold -mt-2">
                            {text}
                            <span className="animate-blink"></span>
                        </h1>
                        <CardDescription className="text-xl lg:text-justify ">
                            Based in Bulacan, I am a second-year college student at ICI with a deep passion for building and exploring digital solutions. Since 2021, I’ve been focused on growing as a web developer, constantly learning and refining my skills. While I enjoy playing chess and Mobile Legends in my free time, my true drive comes from creating meaningful web experiences and continuously improving in the tech space.
                            <div className="mt-4 inline-talents flex gap-4">
                                <span className="bg-pink-200 text-pink-800 dark:bg-pink-700 dark:text-pink-200 text-sm px-3 py-1 rounded-full">Web App</span>
                                <span className="bg-blue-200 text-blue-800 dark:bg-blue-700 dark:text-blue-200 text-sm px-3 py-1 rounded-full">Responsive</span>
                                <span className="bg-orange-200 text-orange-800 dark:bg-orange-700 dark:text-orange-200 text-sm px-3 py-1 rounded-full">UI / UX</span>
                            </div>
                        </CardDescription>
                    </div>
                    <Tilt rotationFactor={10} isRevese className="img ">
                        <div >
                            <div className="img-child">
                                <Image src={Profile} alt="franco-gregorio" />
                            </div>
                        </div>
                    </Tilt>
                </div>
            </div>
        </div>
    );
}

export default Home;

