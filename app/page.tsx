import Hero from "@/components/interface/Hero";
import ProductsHover from "@/components/ProductsHover/productsHover";

export default function Home() {
    return (
        <main className="flex flex-col justify-center items-center w-full">
            <Hero />
            <ProductsHover />
        </main>
    );
}
