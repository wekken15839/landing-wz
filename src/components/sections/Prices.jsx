import { PricingCard } from "../PricingCard";
import Subtitle from "../text_labels/Subtitle";
import Text from "../text_labels/Text";

export default function Prices() {

  return (<div className=" w-full h-full md:px-10">
    <div className="flex flex-col gap-2 mx-5 py-12 ">
      {/* TITLE */}
      <div className="flex flex-col gap-1 items-center text-center h-full">
        <Subtitle><span className="text-primary">Nuestros Precios</span></Subtitle>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laborum omnis, rem nesciunt sequi iusto deserunt magni impedit ipsa hic!</Text>
      </div>
      <div className="flex flex-col justify-center gap-5 mt-5 sm:flex-wrap md:flex-row items-center  h-full">
        <PricingCard name={"Basic"} price={20000} />
        <PricingCard name={"Standard"} price={50000} />
        <PricingCard name={"Premium"} price={100000} />
      </div>
    </div>
  </div>);
};  