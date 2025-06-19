import { CardDescription } from "@/components/ui/card";
import Profile from "@/app/assets/img/transparent-profile1.png";
import { useState, useEffect } from "react";
import '../Home/Home.style.css'
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
        <div className=" flex justify-center place-items-center w-full">
            <div className="container home">
                <div className="flex justify-between items-center   profile_and_text" >
                    <div className="text_profile md:basis-[63%]">
                        <h1 className="h1_Name">
                            <span className="text-muted-foreground ">Hello!</span> I'm Franco
                        </h1>
                        <h1 className="title text-emerald-600 font-semibold -mt-2">
                            {text}
                            <span className="animate-blink"></span>
                        </h1>
                        <CardDescription className="text-xl ">
                            Based in Bulacan, I am eager to learn and always willing to improve
                            my skills. My hobby is playing chess and Mobile Legends, but I am
                            currently focused on web development. I am a second-year college
                            student at ICI.
                            <div className="mt-4 inline-talents flex gap-4">
                                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:text-white dark:bg-blue-600 px-2 py-1 text-xs font-semibold text-blue-600"> Web App</span>
                                <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 dark:text-white dark:bg-indigo-600 px-2 py-1 text-xs font-semibold text-indigo-600"> Responsive </span>
                                <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 dark:text-white dark:bg-orange-600 px-2 py-1 text-xs font-semibold text-orange-600"> UI / UX </span>
                            </div>
                        </CardDescription>
                    </div>
                    <div className="img ">
                        <div className="img-child">
                            <img src={Profile.src} alt="franco-gregorio" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;