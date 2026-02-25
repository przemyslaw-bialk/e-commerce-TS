"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

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
        <CarouselItem className="h-80 flex items-center justify-center relative">
          <Image
            src="/images/slider1.png"
            alt="photo of healthy food"
            fill
            className="object-cover"
          />

          <h2 className="text-white text-2xl font-bold bg-black/50 px-4 py-1 tracking-wider rounded-3xl z-20">
            Healthy Food
          </h2>
        </CarouselItem>
        <CarouselItem className="h-80 flex items-center justify-center relative">
          <Image
            src="/images/slider2.png"
            alt="photo of suplements"
            fill
            className="object-cover"
          />
          <div className=" absolute top-10 left-20 flex flex-col gap-3 items-start">
            <h2 className="text-white text-2xl font-bold bg-green-500/80 pr-14 pl-2 py-1 tracking-wider rounded-3xl">
              Suplements
            </h2>
            <h2 className="text-white text-2xl font-bold bg-green-500/80 pr-20 pl-2 py-1 tracking-wider rounded-3xl">
              Which you need
            </h2>
          </div>
        </CarouselItem>
        <CarouselItem className="h-80 bg-green-200 flex items-center justify-center">
          Slide 3
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default HomeCarousel;
