import {
    Carousel,
    CarouselMainContainer,
    CarouselThumbsContainer,
    SliderMainItem,
    SliderThumbItem,
} from "@/components/ui/extension/carousel";
import { photoData } from "./About-data";
import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image";
import TextHeader from "@/components/text-header";
import { SiCss3, SiTypescript, SiVercel, SiAntdesign, SiBootstrap, SiChakraui, SiNodedotjs, SiYarn, SiGit, SiGithub, SiUnity,  SiFirebase, SiNextdotjs, SiJavascript, SiHtml5, SiSass, SiPython, SiReact, SiTailwindcss, SiBlender, SiNotion,  SiSupabase,  SiAndroidstudio } from "react-icons/si";

const CarouselExample = () => {
    return (
        <div className="pt-24 m:mt-0 text-center text-xl">
            <TextHeader
                text="About"
            />
            <blockquote className="mb-6 text-muted-foreground text-xl border-l-2 italic text-center">
                <TextAnimate animation="blurIn" as="h1" duration={1}>
                    &quot;Great developers aren&#39;t born—they&#39;re made through consistency, curiosity, and code.&quot;
                </TextAnimate>
            </blockquote>

            <div className=" flex flex-col md:flex-row  justify-center place-items-center w-full max-w-4xl mx-auto px-2 gap-4 overflow-x-auto">
                <Carousel orientation="horizontal">
                    <div className="relative min-w-0  flex-1 md:basis-3/4 w-full">
                        <CarouselMainContainer className="h-60  md:h-90">
                            {photoData.map((id) => (
                                <SliderMainItem
                                    key={id.id}
                                    className="border border-muted flex overflow-hidden items-center justify-center md:h-84 rounded-md"
                                >
                                    <Image src={id.photoURL.src} alt="" width={id.photoURL.width} height={id.photoURL.height} className="object-contain" />
                                </SliderMainItem>
                            ))}
                        </CarouselMainContainer>
                    </div>
                    <CarouselThumbsContainer className="h-30 sm:h-50 lg:h-60 min-w-0 flex-1 md:basis-1/4 w-full mt-4 md:mt-0">
                        {photoData.map((id, idx) => (
                            <SliderThumbItem
                                key={id.id}
                                index={idx}
                                className="rounded-md bg-transparent cursor-pointer "
                            >
                                <Image src={id.photoURL.src} alt="" width={id.photoURL.width} height={id.photoURL.height} className="object-contain" />
                            </SliderThumbItem>
                        ))}
                    </CarouselThumbsContainer>
                </Carousel>

            </div>

            {/* About Me Section */}
            <div className="flex justify-center mt-12">
                <div className="max-w-7xl">
                    <div className="mb-6">
                        <TextHeader
                            variant="sub"
                            text="Who I Am"
                        />
                    </div>
                    <p className="text-muted-foreground text-xl  leading-relaxed">
                        <TextAnimate animation="blurIn" duration={1} as="h1">
                            I&apos;m a creative problem-solver and passionate web developer who loves turning ideas into
                            interactive, user-focused experiences. I believe great design meets great function, and I aim
                            to build websites that not only look good—but feel right to use. Alongside crafting seamless
                            interfaces, I also enjoy building reliable and scalable back-end systems that keep everything
                            running smoothly behind the scenes.
                        </TextAnimate>
                    </p>
                </div>
            </div>

            {/* Clean Code Philosophy Section */}
            <div className="flex justify-center mt-12">
                <div className="max-w-7xl">
                    <div className="mb-6">
                        <TextHeader
                            variant="sub"
                            text="My Code Philosophy"
                        />
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl p-8 border border-blue-200/50 dark:border-blue-800/50">
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            <TextAnimate animation="blurIn" duration={1.2} as="h1">
                                To keep my code clean, I try to name variables and functions in a way that clearly shows what they&apos;re for.
                                I keep functions short and focused on doing just one thing so they&apos;re easier to read and reuse.
                                Instead of nesting conditions too much, I use early returns to keep the flow simple.
                                I follow the DRY principle so I don&apos;t repeat code—if something&apos;s reusable, I turn it into a function or component.
                                I also stick to consistent formatting using tools like Prettier and follow a style guide so everything looks uniform.
                                When logic gets tricky, I leave comments to explain why I did something, not just what it does.
                                I organize my files by feature or functionality and refactor often to make things cleaner.
                                I also write tests to catch bugs early and keep things well-structured.
                                Lastly, I use linters like ESLint to spot and fix issues automatically.
                            </TextAnimate>
                        </p>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="flex justify-center mt-12">
                <div className="max-w-7xl">
                    <div className="mb-6">
                        <TextHeader
                            variant="sub"
                            text="Technologies I Work With"
                        />
                    </div>
                    <div className="flex justify-center flex-wrap gap-3">
                        <span className="bg-[#1572B6] text-white text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiCss3 className="mr-2" /> CSS3
                        </span>
                        {/* <span className="bg-[#000000] text-white text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiMarkdown className="mr-2" /> Markdown
                        </span> */}
                        <span className="bg-[#007ACC] text-white text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiTypescript className="mr-2" /> TypeScript
                        </span>
                        <span className="bg-[#000000] text-white text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiVercel className="mr-2" /> Vercel
                        </span>
                        <span className="bg-[#0170FE] text-white text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiAntdesign className="mr-2" /> Ant Design
                        </span>
                        <span className="bg-[#8511FA] text-white text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiBootstrap className="mr-2" /> Bootstrap
                        </span>
                        <span className="bg-[#4ED1C5] text-white text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiChakraui className="mr-2" /> Chakra
                        </span>
                        <span className="bg-[#6DA55F] text-white text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiNodedotjs className="mr-2" /> Node.js
                        </span>
                        <span className="bg-[#2C8EBB] text-white text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiYarn className="mr-2" /> Yarn
                        </span>
                        <span className="bg-[#F05033] text-white text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiGit className="mr-2" /> Git
                        </span>
                        <span className="bg-[#121011] text-white text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiGithub className="mr-2" /> GitHub
                        </span>
                        {/* <span className="bg-[#000000] text-[#FF7139] text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiNotion className="mr-2" /> Portfolio
                        </span> */}
                        <span className="bg-[#000000] text-white text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiUnity className="mr-2" /> Unity
                        </span>
                    
                        <span className="bg-[#039BE5] text-white text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiFirebase className="mr-2" /> Firebase
                        </span>
                        <span className="bg-[#000000] text-white text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiNextdotjs className="mr-2" /> Next.js
                        </span>
                        <span className="bg-[#323330] text-[#F7DF1E] text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiJavascript className="mr-2" /> JavaScript
                        </span>
                        <span className="bg-[#E34F26] text-white text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiHtml5 className="mr-2" /> HTML5
                        </span>
                        <span className="bg-[#CF649A] text-white text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiSass className="mr-2" /> SASS
                        </span>
                        <span className="bg-[#3670A0] text-[#ffdd54] text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiPython className="mr-2" /> Python
                        </span>
                        <span className="bg-[#20232A] text-[#61DAFB] text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiReact className="mr-2" /> React
                        </span>
                        <span className="bg-[#38B2AC] text-white text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiTailwindcss className="mr-2" /> TailwindCSS
                        </span>
                        <span className="bg-[#F5792A] text-white text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiBlender className="mr-2" /> Blender
                        </span>
                        <span className="bg-[#000000] text-white text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiNotion className="mr-2" /> Notion
                        </span>
                        <span className="bg-[#000000] text-white text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiSupabase className="mr-2" /> Supabase
                        </span>
                       
                        <span className="bg-green-600 text-white text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiAndroidstudio className="mr-2" /> Android Studio
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselExample;