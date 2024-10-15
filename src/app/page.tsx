import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfoilio from "@/components/Portfoilio";
import Skills from "@/components/Skills";

export default function Home() {
  return (
  <>  
    <Navbar/>
    <Hero/>
    <About/>
    <Portfoilio/>
    <Skills/>
    <Contact/>

  </> 
  );
}
