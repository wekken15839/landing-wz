import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Prices from "@/components/sections/Prices";
import Projects from "@/components/sections/Projects";
import { Navbar } from "@material-tailwind/react";
export default function Home() {

  return (<>
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Prices />
      <Footer />
    </div>
  </>);
};  