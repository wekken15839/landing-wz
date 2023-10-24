import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Prices from "@/components/sections/Prices";
import Projects from "@/components/sections/Projects";
export default function Home() {

  return (<>
    <div>
      <Hero />
      <About />
      <Projects />
      <Prices />
    </div>
  </>);
};  