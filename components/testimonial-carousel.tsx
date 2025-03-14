"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface TestimonialProps {
    logo: string;
    logoAlt: string;
    companyName: string;
    quote: string;
    stat1: {
        value: string;
        label: string;
        period: string;
    };
    stat2: {
        value: string;
        label: string;
        period: string;
    };
    person: {
        image: string;
        name: string;
        title: string;
        company: string;
    };
}

const testimonials: TestimonialProps[] = [
    {
        logo: "/placeholder.svg",
        logoAlt: "Nike logo",
        companyName: "Company Name",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        stat1: {
            value: "2.2x",
            label: "Monthly Active Users",
            period: "Since last month",
        },
        stat2: {
            value: "256%",
            label: "Increase in Revenue",
            period: "Since last year",
        },
        person: {
            image: "/placeholder.svg",
            name: "John Doe",
            title: "CEO",
            company: "Company Name",
        },
    },
    {
        logo: "/placeholder.svg",
        logoAlt: "Slack logo",
        companyName: "Company Name",
        quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        stat1: {
            value: "1.5x",
            label: "Monthly Active Users",
            period: "Since last month",
        },
        stat2: {
            value: "150%",
            label: "Increase in Revenue",
            period: "Since last year",
        },
        person: {
            image: "/placeholder.svg",
            name: "Jane Doe",
            title: "CTO",
            company: "Company 2",
        },
    },
    {
        logo: "/placeholder.svg",
        logoAlt: "Company logo",
        companyName: "Global Ventures",
        quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        stat1: {
            value: "4.7x",
            label: "Conversion Rate",
            period: "Since implementation",
        },
        stat2: {
            value: "320%",
            label: "Market Expansion",
            period: "In 6 months",
        },
        person: {
            image: "/placeholder.svg",
            name: "Robert Johnson",
            title: "Founder",
            company: "Global Ventures",
        },
    },
];

export default function TestimonialCarousel() {
    const [api, setApi] = useState<CarouselApi>();
    const [currentIndex, setCurrentIndex] = useState(0);

    // Setup the carousel API and event listeners
    useEffect(() => {
        if (!api) return;

        const handleSelect = () => {
            setCurrentIndex(api.selectedScrollSnap());
        };

        api.on("select", handleSelect);

        // Cleanup
        return () => {
            api.off("select", handleSelect);
        };
    }, [api]);

    const handlePrevious = () => {
        api?.scrollPrev();
    };

    const handleNext = () => {
        api?.scrollNext();
    };

    return (
        <div className="relative">
            <Carousel className="w-full" setApi={setApi}>
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem
                            key={index}
                            className="min-w-0 shrink-0 grow-0 basis-full"
                        >
                            <div className="grid grid-cols-1 gap-y-10 pb-14 pl-8 pr-4 pt-4 sm:pt-8 lg:grid-cols-3 lg:gap-10 lg:p-20">
                                {/* Person Image and Info */}
                                <div className="flex flex-col items-center justify-center">
                                    <Image
                                        src={
                                            testimonial.person.image ||
                                            "/placeholder.svg"
                                        }
                                        alt="placeholder"
                                        width={320}
                                        height={320}
                                        className="mx-auto max-h-80 rounded-xl lg:mx-0 lg:max-h-none"
                                    />
                                    <div className="mt-4 text-center">
                                        <h3 className="font-semibold">
                                            {testimonial.person.name}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {testimonial.person.title},{" "}
                                            {testimonial.person.company}
                                        </p>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="col-span-2">
                                    {/* Company Logo and Name */}
                                    <div className="mb-6 flex items-center justify-center gap-2 lg:mb-8 lg:justify-start">
                                        <Image
                                            src={
                                                testimonial.logo ||
                                                "/placeholder.svg"
                                            }
                                            alt={testimonial.logoAlt}
                                            width={44}
                                            height={44}
                                            className="h-auto w-7 lg:w-11"
                                        />
                                        <span className="text-xl font-semibold lg:text-3xl">
                                            {testimonial.companyName}
                                        </span>
                                    </div>

                                    {/* Testimonial Quote */}
                                    <p className="text-center text-xl font-semibold lg:text-left lg:text-2xl">
                                        "{testimonial.quote}"
                                    </p>

                                    {/* Separator */}
                                    <Separator className="my-8 lg:my-10" />

                                    {/* Stats */}
                                    <div className="grid justify-center gap-10 text-center md:grid-cols-2 lg:justify-start lg:text-left">
                                        <div className="flex flex-col">
                                            <span className="mb-4 text-4xl font-semibold md:text-6xl">
                                                {testimonial.stat1.value}
                                            </span>
                                            <span className="font-medium">
                                                {testimonial.stat1.label}
                                            </span>
                                            <span className="text-muted-foreground">
                                                {testimonial.stat1.period}
                                            </span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="mb-4 text-4xl font-semibold md:text-6xl">
                                                {testimonial.stat2.value}
                                            </span>
                                            <span className="font-medium">
                                                {testimonial.stat2.label}
                                            </span>
                                            <span className="text-muted-foreground">
                                                {testimonial.stat2.period}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Navigation Buttons */}
            <div className="absolute bottom-6 right-6 z-10 lg:bottom-10 lg:right-10">
                <div className="relative flex items-center gap-4">
                    <Button
                        variant="outline"
                        size="icon"
                        className="size-8 rounded-full"
                        onClick={handlePrevious}
                        disabled={!api}
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span className="sr-only">Previous slide</span>
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="size-8 rounded-full"
                        onClick={handleNext}
                        disabled={!api}
                    >
                        <ArrowRight className="h-4 w-4" />
                        <span className="sr-only">Next slide</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
