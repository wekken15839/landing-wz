"use client"
import { Carousel } from "@material-tailwind/react";
import Image from "next/image"
import herosinfondo from "../../public/herosinfondo.png"
import ardillaenmoto from "../../public/ardillaenmoto.png"
import ardillainteligente from "../../public/ardillainteligente.png"
const images = [herosinfondo, ardillaenmoto, ardillainteligente]


export function CarouselDefault() {
  return (

    <Carousel className="rounded-xl border border-black md:w-80 sm:w-3/4 xl:w-3/4 mx-auto" autoplay={true} autoplayDelay={2000} loop={true}>
      {images.map((img, index) => <div className="relative w-full h-full" key={index}>
        <div className="absolute bg-black w-full h-full left-0 top-0 opacity-60">
        </div>
        <Image src={img} alt="..." className="w-full h-full" />
      </div>)}
    </Carousel>

  );
}