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
import { SiCss3, SiTypescript, SiVercel, SiAntdesign, SiBootstrap, SiChakraui, SiNodedotjs, SiYarn, SiGit, SiGithub, SiUnity, SiFirebase, SiNextdotjs, SiJavascript, SiHtml5, SiSass, SiPython, SiReact, SiTailwindcss, SiBlender, SiNotion, SiSupabase, SiAndroidstudio } from "react-icons/si";
import "./About.modern.css";
import { SkillTag } from "@/components/ui/skill-tag";

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
                                <Image src={id.photoURL.src} alt="" width={id.photoURL.width} height={id.photoURL.height} className="object-cover aspect-video " />
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
                    <div className=" dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl ">
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
                        <SkillTag delay={1} icon={<SiCss3 />}>
                            CSS3
                        </SkillTag>
                        <SkillTag delay={2} icon={<SiTypescript />}>
                            TypeScript
                        </SkillTag>
                        <SkillTag delay={3} icon={<SiVercel />}>
                            Vercel
                        </SkillTag>
                        <SkillTag delay={4} icon={<SiAntdesign />}>
                            Ant Design
                        </SkillTag>
                        <SkillTag delay={5} icon={<SiBootstrap />}>
                            Bootstrap
                        </SkillTag>
                        <SkillTag delay={6} icon={<SiChakraui />}>
                            Chakra
                        </SkillTag>
                        <SkillTag delay={7} icon={<SiNodedotjs />}>
                            Node.js
                        </SkillTag>
                        <SkillTag delay={8} icon={<SiYarn />}>
                            Yarn
                        </SkillTag>
                        <SkillTag delay={9} icon={<SiGit />}>
                            Git
                        </SkillTag>
                        <SkillTag delay={10} icon={<SiGithub />}>
                            GitHub
                        </SkillTag>
                        {/* <span className="bg-[#000000] text-[#FF7139] text-sm px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow flex items-center">
                            <SiNotion className="mr-2" /> Portfolio
                        </span> */}
                        <SkillTag delay={11} icon={<SiUnity />}>
                            Unity
                        </SkillTag>
                        <SkillTag delay={12} icon={<SiFirebase />}>
                            Firebase
                        </SkillTag>
                        <SkillTag delay={13} icon={<SiNextdotjs />}>
                            Next.js
                        </SkillTag>
                        <SkillTag delay={14} icon={<SiJavascript />}>
                            JavaScript
                        </SkillTag>
                        <SkillTag delay={15} icon={<SiHtml5 />}>
                            HTML5
                        </SkillTag>
                        <SkillTag delay={16} icon={<SiSass />}>
                            SASS
                        </SkillTag>
                        <SkillTag delay={17} icon={<SiPython />}>
                            Python
                        </SkillTag>
                        <SkillTag delay={18} icon={<SiReact />}>
                            React
                        </SkillTag>
                        <SkillTag delay={19} icon={<SiTailwindcss />}>
                            TailwindCSS
                        </SkillTag>
                        <SkillTag delay={20} icon={<SiBlender />}>
                            Blender
                        </SkillTag>
                        <SkillTag delay={21} icon={<SiNotion />}>
                            Notion
                        </SkillTag>
                        <SkillTag delay={22} icon={<SiSupabase />}>
                            Supabase
                        </SkillTag>
                        <SkillTag delay={23} icon={<SiAndroidstudio />}>
                            Android Studio
                        </SkillTag>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselExample;