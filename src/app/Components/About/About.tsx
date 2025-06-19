import {
    Carousel,
    CarouselMainContainer,
    CarouselThumbsContainer,
    SliderMainItem,
    SliderThumbItem,
} from "@/components/ui/extension/carousel";
import { photoData } from "./About-data";

const CarouselExample = () => {
    return (
        <div className="mt-24 m:mt-0 pb-34 text-center text-xl">
            <h1 className="md:text-6xl text-5xl font-semibold text-center mb-6">About</h1>
            <blockquote className="mb-6 border-l-2 italic text-center">
                &quot;Great developers aren't born—they're made through consistency, curiosity, and code.&quot;
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
                                    <img src={id.photoURL.src} alt="" />
                                </SliderMainItem>
                            ))}
                        </CarouselMainContainer>
                    </div>
                    <CarouselThumbsContainer className="h-30 lg:h-60 min-w-0 flex-1 md:basis-1/4 w-full mt-4 md:mt-0">
                        {photoData.map((id, idx) => (
                            <SliderThumbItem
                                key={id.id}
                                index={idx}
                                className="rounded-md bg-transparent cursor-pointer "
                            >
                                <img src={id.photoURL.src} alt="" />
                            </SliderThumbItem>
                        ))}
                    </CarouselThumbsContainer>
                </Carousel>

            </div>
            <div className="flex justify-center">
                <div className=" md:w-2/4">
                    <p className="">
                        I have experience in front-end development using technologies such as SASS, Tailwind, and Bootstrap, along with a strong grasp of fundamental design principles. On the back end, I am proficient with Firebase and Node.js. Since 2021, I have been working with React, JavaScript, and TypeScript.
                    </p>

                    <div className="flex justify-center flex-wrap gap-2 mt-4">
                        <span className="bg-pink-200 text-pink-800 dark:bg-pink-700 dark:text-pink-200 text-sm px-3 py-1 rounded-full">SASS</span>
                        <span className="bg-blue-200 text-blue-800 dark:bg-blue-700 dark:text-blue-200 text-sm px-3 py-1 rounded-full">Tailwind</span>
                        <span className="bg-purple-200 text-purple-800 dark:bg-purple-700 dark:text-purple-200 text-sm px-3 py-1 rounded-full">Bootstrap</span>
                        <span className="bg-yellow-200 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-200 text-sm px-3 py-1 rounded-full">Design</span>
                        <span className="bg-orange-200 text-orange-800 dark:bg-orange-700 dark:text-orange-200 text-sm px-3 py-1 rounded-full">Firebase</span>
                        <span className="bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200 text-sm px-3 py-1 rounded-full">Node.js</span>
                        <span className="bg-cyan-200 text-cyan-800 dark:bg-cyan-700 dark:text-cyan-200 text-sm px-3 py-1 rounded-full">React</span>
                        <span className="bg-yellow-300 text-yellow-900 dark:bg-yellow-700 dark:text-yellow-200 text-sm px-3 py-1 rounded-full">JavaScript</span>
                        <span className="bg-indigo-200 text-indigo-800 dark:bg-indigo-700 dark:text-indigo-200 text-sm px-3 py-1 rounded-full">TypeScript</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CarouselExample;