import { CarouselDefault } from "../Carousel";
import Subtitle from "../text_labels/Subtitle";
import Text from "../text_labels/Text";


export default function About() {

  return (<div className="min-h-screen flex flex-col p-5 md:p-10  md:gap-5 w-full">
    {/* TITLE */}
    <div className="text-center sm:mb-7 w-full mb-2">
      <Subtitle>Conoce un poco más </Subtitle>
      <Subtitle><span className="text-primary">Sobre nosotros</span></Subtitle>
      <span className="text-sm md:text-base text-black">¿Quiénes somos?</span>
    </div>
    <div className="flex flex-col md:flex-row  lg:px-20 items-center h-full w-full gap-6">
      {/* CAROUSEL */}
      <div>
        <CarouselDefault />
      </div>
      {/* TEXT */}
      <div className="text-center flex flex-col gap-2 items-center">
        <Subtitle>
          Lorem ipsun dolor sit amet
        </Subtitle>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corrupti architecto quidem dolorem vero autem, officia nulla. Nostrum aliquam laudantium magni, impedit placeat numquam quos nihil, quia perspiciatis, molestias sit amet
        </Text>
        <button className="py-2 px-5 text-lg md:text-lg lg:text-xl rounded-md w-fit bg-primary text-white my-3">Contáctanos</button>
      </div>
    </div>
  </div>);
};  