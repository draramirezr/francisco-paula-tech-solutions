import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { HealthSector } from "@/components/sections/HealthSector";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChoose } from "@/components/sections/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HealthSector />
      <Projects />
      <WhyChoose />
      <About />
      <Testimonials />
      <Process />
      <FAQ />
      <Contact />
    </>
  );
}
