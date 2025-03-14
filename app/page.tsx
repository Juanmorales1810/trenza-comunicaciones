import Hero from "@/components/interface/Hero";
import Service from "@/components/interface/Service";
import Team from "@/components/interface/Team";
import WhyUs from "@/components/interface/WhyUs";
import ProductsHover from "@/components/ProductsHover/productsHover";

export default function Home() {
    return (
        <main className="flex flex-col justify-center items-center w-full">
            <Hero />
            <WhyUs />
            <Service />
            {/* <ProductsHover /> */}
            <Team />
        </main>
    );
}
