import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Courses from "@/components/Courses";
import Features from "@/components/Features";
import LearningPath from "@/components/LearningPath";
import Schedule from "@/components/Schedule";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import FAQ from "@/components/FAQ";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Courses />
        <Features />
        <LearningPath />
        <Schedule />
        <Testimonials />
        <CtaBand />
        <FAQ />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
