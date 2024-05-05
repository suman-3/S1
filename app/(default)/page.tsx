import Partners from "@/components/Home/Sponsors";
import FAQ from "@/components/Home/Faq/Faq";
import Hero from "@/components/Home/Hero/Hero";
// import Newsletter from "@/components/Home/newsletter";
// import Testimonials from "@/components/Home/Testimonials";
import AboutUs from "@/components/Home/AboutUs";
import Collaboration from "@/components/Home/Collaboration";
import Themes from "@/components/Home/Themes";
import { Timeline } from "@/components/Home/Timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Themes />
      <Timeline />
      <Partners />
      <Collaboration />
      <FAQ />
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
    </>
  );
}
