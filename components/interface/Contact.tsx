import ContactForm from "@/components/contact-form";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function ContactPage() {
    return (
        <section className="relative mx-2.5 mt-2.5 rounded-t-2xl w-full max-w-5xl rounded-b-[36px] bg-[url(/image/hero/chart.jpeg)] bg-cover bg-center bg-no-repeat py-32 lg:mx-4">
            <div className="container max-w-2xl mx-auto">
                <h1 className="text-center text-4xl font-semibold tracking-tight text-zinc-950 lg:text-5xl">
                    Listo para Transformar Tu Negocio Digitalmente?
                </h1>
                <p className="mt-4 text-center leading-snug font-medium text-zinc-800 lg:mx-auto">
                    No esperes más para darle a tu negocio el impulso digital
                    que merece. En Trenza Comunicaciones, te ayudamos a mejorar
                    tu visibilidad en Google, atraer clientes a través de las
                    redes sociales, y crear contenido visual que destaque tu
                    marca. ¡Contáctanos hoy mismo!
                </p>

                <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
                    <div>
                        <h2 className="font-semibold text-black">
                            Corporate office
                        </h2>
                        <p className="mt-3 text-zinc-700">
                            1 Carlsberg Close
                            <br />
                            1260 Hillview, Australia
                        </p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-black">Email us</h2>
                        <div className="mt-3">
                            <div>
                                <a
                                    href="#"
                                    className="text-zinc-700 hover:text-foreground"
                                >
                                    support@example.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-semibold text-black">Follow us</h2>
                        <div className="mt-3 flex gap-6 lg:gap-10">
                            <a
                                href="#"
                                className="text-zinc-700 hover:text-foreground"
                            >
                                <Facebook className="size-5" />
                            </a>
                            <a
                                href="#"
                                className="text-zinc-700 hover:text-foreground"
                            >
                                <Twitter className="size-5" />
                            </a>
                            <a
                                href="#"
                                className="text-zinc-700 hover:text-foreground"
                            >
                                <Linkedin className="size-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="relative text-zinc-900 h-px w-full my-12">
                    <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
                </div>

                <div className="mx-auto">
                    <h2 className="text-lg font-semibold text-black">
                        Completa el formulario
                    </h2>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
