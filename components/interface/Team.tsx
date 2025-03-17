import { BriefcaseBusiness, Dribbble, Github, Linkedin } from "lucide-react";
import React from "react";

const team = [
    {
        id: 1,
        name: "Pablo Valdebenito",
        description:
            "Especialista en Edición y Videos, encargado de la postproducción audiovisual, montaje y optimización de contenido visual para diversas plataformas. Su enfoque está en lograr una narrativa atractiva a través de la edición, efectos visuales y mejoras de calidad.",
        role: "Editor y Videógrafo",
        links: [
            {
                id: 1,
                icon: <Github className="size-4" />,
                url: "#",
            },
            {
                id: 2,
                icon: <Linkedin className="size-4" />,
                url: "#",
            },
            {
                id: 3,
                icon: <Dribbble className="size-4" />,
                url: "#",
            },
        ],
        imageUrl: "/placeholder.svg",
    },
    {
        id: 2,
        name: "Juan Morales",
        description:
            "Desarrollador web con experiencia en Programación y Diseño Web. Se especializa en la creación y optimización de sitios web modernos, asegurando funcionalidad, estética y experiencia de usuario fluida. Su trabajo combina código y diseño para lograr plataformas intuitivas y eficientes.",
        role: "Desarrollador FullStack",
        links: [
            {
                id: 1,
                icon: <Github className="size-4" />,
                url: "https://github.com/Juanmorales1810",
            },
            {
                id: 2,
                icon: <Linkedin className="size-4" />,
                url: "https://www.linkedin.com/in/juan-exequiel-morales/",
            },
            {
                id: 3,
                icon: <BriefcaseBusiness className="size-4" />,
                url: "https://juan-morales.is-a.dev/",
            },
        ],
        imageUrl: "/placeholder.svg",
    },
    {
        id: 3,
        name: "Valeria Pizarro",
        description:
            "Diseñadora con un enfoque en Diseño, Diagramación e Ilustración. Su labor abarca la creación de identidades visuales, composición de material gráfico y producción de ilustraciones personalizadas. Su trabajo se orienta a transmitir mensajes visuales impactantes y coherentes con la marca.",
        role: "Diseñadora Gráfica",
        links: [
            {
                id: 1,
                icon: <Github className="size-4" />,
                url: "#",
            },
            {
                id: 2,
                icon: <Linkedin className="size-4" />,
                url: "#",
            },
            {
                id: 3,
                icon: <Dribbble className="size-4" />,
                url: "#",
            },
        ],
        imageUrl: "/placeholder.svg",
    },
    {
        id: 4,
        name: "Felipe Pizarro",
        description:
            "Director de Agencia con experiencia en Fotografía, Paid Media Management, Marketing y Ventas. Lidera estrategias de crecimiento, publicidad digital y generación de contenido visual de alta calidad. Su visión estratégica combina creatividad y análisis de mercado para potenciar marcas y maximizar su alcance.",
        role: "Director de Agencia",
        links: [
            {
                id: 1,
                icon: <Github className="size-4" />,
                url: "#",
            },
            {
                id: 2,
                icon: <Linkedin className="size-4" />,
                url: "#",
            },
            {
                id: 3,
                icon: <Dribbble className="size-4" />,
                url: "#",
            },
        ],
        imageUrl: "/placeholder.svg",
    },
];

export default function Team() {
    return (
        <section className="py-32">
            <div className="container px-4 flex flex-col items-center text-center">
                <p className="semibold">El Equipo de Trenza Comunicaciones</p>
                <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
                    El Equipo de Trenza Comunicaciones
                </h2>
                <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
                    Nuestro equipo está formado por profesionales apasionados
                    por el marketing digital, el diseño gráfico, y la fotografía
                    profesional. Nos comprometemos a brindarte soluciones
                    innovadoras y efectivas para llevar tu negocio al siguiente
                    nivel en el mundo digital.
                </p>
                <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
                    <button
                        data-slot="button"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 has-[>svg]:px-3 w-full sm:w-auto"
                    >
                        Secondary
                    </button>
                    <button
                        data-slot="button"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 w-full sm:w-auto"
                    >
                        Primary
                    </button>
                </div>
            </div>
            <div className="container mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:px-32">
                {team.map((member) => (
                    <div
                        key={member.id}
                        className="flex flex-col items-center bg-accent p-8"
                    >
                        <span
                            data-slot="avatar"
                            className="relative flex shrink-0 overflow-hidden rounded-full mb-4 size-20 md:mb-5 lg:size-24"
                        >
                            <img
                                data-slot="avatar-image"
                                className="aspect-square size-full"
                                src={member.imageUrl}
                            />
                        </span>
                        <p className="text-center font-medium">{member.name}</p>
                        <p className="text-center text-muted-foreground">
                            {member.role}
                        </p>
                        <p className="py-3 text-center text-sm text-muted-foreground">
                            {member.description}
                        </p>
                        <div className="mt-2 flex gap-4">
                            {member.links.map((link) => (
                                <a key={link.id} href={link.url}>
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
