import Hero from "@/components/interface/Hero";
import WhyUs from "@/components/interface/WhyUs";
import ProductsHover from "@/components/ProductsHover/productsHover";

export default function Home() {
    return (
        <main className="flex flex-col justify-center items-center w-full">
            <Hero />
            <WhyUs />
            <ProductsHover />
        </main>
    );
}
