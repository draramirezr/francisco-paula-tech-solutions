import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { siteConfig } from "@/lib/utils";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const HealthSector = dynamic(
  () =>
    import("@/components/sections/HealthSector").then((m) => m.HealthSector),
  { loading: () => <SectionSkeleton /> }
);
const Projects = dynamic(
  () => import("@/components/sections/Projects").then((m) => m.Projects),
  { loading: () => <SectionSkeleton /> }
);
const WhyChoose = dynamic(
  () => import("@/components/sections/WhyChoose").then((m) => m.WhyChoose),
  { loading: () => <SectionSkeleton /> }
);
const Testimonials = dynamic(
  () =>
    import("@/components/sections/Testimonials").then((m) => m.Testimonials),
  { loading: () => <SectionSkeleton /> }
);
const Process = dynamic(
  () => import("@/components/sections/Process").then((m) => m.Process),
  { loading: () => <SectionSkeleton /> }
);
const FAQ = dynamic(
  () => import("@/components/sections/FAQ").then((m) => m.FAQ),
  { loading: () => <SectionSkeleton /> }
);

function SectionSkeleton() {
  return <div className="section-padding animate-pulse bg-transparent" aria-hidden />;
}

export const metadata: Metadata = {
  title: siteConfig.seoTitle,
  description: siteConfig.seoDescription,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    url: siteConfig.url,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <HealthSector />
      <Services />
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
