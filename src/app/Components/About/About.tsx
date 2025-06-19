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
        <div className="mt-24 m:mt-0">

            <h1 className="text-4xl font-semibold text-center mb-6">About</h1>
            <blockquote className="mb-6 border-l-2 italic text-center">
                &quot;Great developers aren’t born—they’re made through consistency, curiosity, and code.&quot;
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
                    <CarouselThumbsContainer className="h-60 min-w-0 flex-1 md:basis-1/4 w-full mt-4 md:mt-0">
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

        </div>
    );
};

export default CarouselExample;