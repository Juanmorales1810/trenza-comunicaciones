import Contact from "@/components/interface/Contact";
import Cta from "@/components/interface/Cta";
import Hero from "@/components/interface/Hero";
import Service from "@/components/interface/Service";
import Team from "@/components/interface/Team";
import Testimonial from "@/components/interface/Testimonial";
import WhyUs from "@/components/interface/WhyUs";

export default function Home() {
    return (
        <main className="flex flex-col justify-center items-center w-full">
            <Hero />
            <WhyUs />
            <Service />
            <Testimonial />
            <Team />
            <Contact />
            <Cta />
        </main>
    );
}
