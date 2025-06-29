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
                        <span className="bg-pink-200 text-pink-800 dark:bg-pink-700 dark:text-pink-200 text-sm px-4 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-shadow">SASS</span>
                        <span className="bg-blue-200 text-blue-800 dark:bg-blue-700 dark:text-blue-200 text-sm px-4 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-shadow">Tailwind</span>
                        <span className="bg-purple-200 text-purple-800 dark:bg-purple-700 dark:text-purple-200 text-sm px-4 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-shadow">Bootstrap</span>
                        <span className="bg-yellow-200 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-200 text-sm px-4 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-shadow">Design</span>
                        <span className="bg-orange-200 text-orange-800 dark:bg-orange-700 dark:text-orange-200 text-sm px-4 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-shadow">Firebase</span>
                        <span className="bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200 text-sm px-4 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-shadow">Node.js</span>
                        <span className="bg-cyan-200 text-cyan-800 dark:bg-cyan-700 dark:text-cyan-200 text-sm px-4 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-shadow">React</span>
                        <span className="bg-yellow-300 text-yellow-900 dark:bg-yellow-700 dark:text-yellow-200 text-sm px-4 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-shadow">JavaScript</span>
                        <span className="bg-indigo-200 text-indigo-800 dark:bg-indigo-700 dark:text-indigo-200 text-sm px-4 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-shadow">TypeScript</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselExample;