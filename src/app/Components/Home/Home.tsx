import { CardDescription } from "@/components/ui/card";
import Profile from "@/app/assets/img/transparent-profile1.png";
import '../Home/Home.style.css'
import { Tilt } from "../../../../components/motion-primitives/tilt";
import { SpringElement } from '@/components/animate-ui/components/spring-element';
import { TypingText } from '@/components/animate-ui/text/typing';
import {
    Avatar,
    AvatarImage,
} from '@/components/ui/avatar';
const dataText = [
    "FrontEnd Web Developer",
    "BackEnd Web Developer",
    "Full Stack Web Developer",
];
function Home() {

    return (
        <div className=" lg:pb-0 flex justify-center place-items-center w-full">
            <div className="container home">
                <div className="flex justify-between items-center gap-5   profile_and_text" >
                    <div className="text_profile md:basis-[63%]">
                        <h1 className="text-[clamp(2.90rem,5vw+1rem,6rem)] font-bold">
                            <span className="text-yellow-500">Hello!</span> I&apos;m Franco
                        </h1>
                        <hr className="hidden md:block "/>
                        <h1 className=" md:mt-3 text-[clamp(2rem,5vw+1rem,3rem)]">
                            <span className="text-yellow-500">
                            I am    
                            </span> <TypingText
                              
                                text={dataText}
                                cursor
                                loop={true}
                                cursorClassName="h-10"
                            />
                        </h1>
                        <CardDescription className="text-xl p-2 md:p-0 text-center md:text-justify ">
                            Based in Bulacan, I am a second-year college student at ICI with a deep passion for building and exploring digital solutions. Since 2021, I&apos;ve been focused on growing as a web developer, constantly learning and refining my skills. While I enjoy playing chess and Mobile Legends in my free time, my true drive comes from creating meaningful web experiences and continuously improving in the tech space.
                            <div className="mt-4 inline-talents flex gap-4">
                                <span className="bg-pink-200 text-pink-800 dark:bg-pink-700 dark:text-pink-200 text-sm px-3 py-1 rounded-full">Web App</span>
                                <span className="bg-blue-200 text-blue-800 dark:bg-blue-700 dark:text-blue-200 text-sm px-3 py-1 rounded-full">Responsive</span>
                                <span className="bg-orange-200 text-orange-800 dark:bg-orange-700 dark:text-orange-200 text-sm px-3 py-1 rounded-full">UI / UX</span>
                            </div>
                        </CardDescription>
                    </div>
                    <div className="img mt-15 lg:mt-0">
                        <SpringElement>
                            <Tilt rotationFactor={10} isRevese>
                                <Avatar className="size-60 sm:size-70 lg:size-90 AvatarImage ">
                                    <AvatarImage
                                        draggable={false}
                                        src={Profile.src}
                                    />
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

