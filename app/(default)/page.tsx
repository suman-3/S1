import Partners from "@/components/Home/Sponsors";
import FAQ from "@/components/Home/Faq/Faq";
import Hero from "@/components/Home/Hero/Hero";
import AboutUs from "@/components/Home/AboutUs";
import Collaboration from "@/components/Home/Collaboration";
import Themes from "@/components/Home/Themes";
import Timeline from "@/components/Home/Timeline";

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
    </>
  );
}
