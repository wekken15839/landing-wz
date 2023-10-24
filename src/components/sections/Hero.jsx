import Image from "next/image";
import heroImage from "../../../public/herosinfondo.png"
import Title from "../text_labels/Title";
import Subtitle from "../text_labels/Subtitle";

export default function Hero() {

  return (<div className="min-h-screen flex flex-col bg-gray px-10 text-xl gap-3 md:gap-10 pb-5">
    {/* TEXTO Y IMAGEN */}
    <div className="flex flex-col items-center lg:flex-row">
      {/* TEXTO */}
      <div className="flex flex-col text-center items-center gap-2 flex-auto order-2 lg:order-1  w-full">
        <Title className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Obtén tu sitio web <span className="text-primary">ahora mismo</span>
        </Title>
        <span className="text-sm md:text-base">¿Quieres impulsar tu empresa con un sitio web rápido e intuitivo?</span>
        <button className="p-2 text-xl md:text-xl lg:text-2xl rounded-md w-fit bg-primary text-white font-bold mb-2">Haz Click Aquí</button>
      </div>
      {/* IMAGEN */}
      <div className="order-1 grid place-items-center w-full h-full">
        <Image alt="hero image" className="h-80 lg:h-[450px] xl:h-[650px] object-cover xl:w-max" width={450} src={heroImage} />
      </div>
    </div>
    {/* CLIENTES */}
    <div className="flex flex-col text-center justify-center items-center gap-4">
      <div className="flex flex-col gap-2 md:py-2">
        <Subtitle>
          Nuestros clientes
        </Subtitle>
        <span className="text-sm md:text-base text-ellipsis">Alrededor de todo el 2023 hemos tenido el placer de trabajar con más de 50 clientes en el Departamento del Cesar</span>
      </div>
      <div className="flex justify-center w-full text-4xl gap-2 md:text-5xl">
        <span>🛒</span>
        <span>🏬</span>
        <span>🗑️</span>
        <span>✈️</span>
        <span>📽️</span>
        <span>🛒</span>
      </div>
    </div>
  </div>);
};  