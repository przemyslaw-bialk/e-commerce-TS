"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HomeCarousel = () => {
  return (
    <Carousel
      className="w-full  mx-auto"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem className="h-64 bg-red-200 flex items-center justify-center">
          Slide 1
        </CarouselItem>
        <CarouselItem className="h-64 bg-blue-200 flex items-center justify-center">
          Slide 2
        </CarouselItem>
        <CarouselItem className="h-64 bg-green-200 flex items-center justify-center">
          Slide 3
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default HomeCarousel;
