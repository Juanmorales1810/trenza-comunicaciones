import { Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";
import TextPressure from "../text-pressure";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <section className="">
            <div className="w-full px-4 flex justify-between gap-8 border-x border-t py-4 max-md:flex-col md:px-24 lg:py-8">
                <div className="mb-8 flex-1">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/image/logoTrenza.png"
                            alt="logo"
                            width="260"
                            height="64"
                            className="dark:invert"
                        />
                    </Link>
                </div>
                <div className="flex flex-1 justify-between gap-8 max-sm:flex-col">
                    <div>
                        <h3 className="text-muted-foreground-subtle text-sm font-semibold tracking-[-0.28px]">
                            Product
                        </h3>
                        <ul className="mt-6 space-y-6 text-sm tracking-[-0.28px] lg:mt-8 lg:space-y-8">
                            <li className="hover:text-primary">
                                <Link href="#">Features</Link>
                            </li>
                            <li className="hover:text-primary">
                                <Link href="#">Pricing</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-muted-foreground-subtle text-sm font-semibold tracking-[-0.28px]">
                            Company
                        </h3>
                        <ul className="mt-6 space-y-6 text-sm tracking-[-0.28px] lg:mt-8 lg:space-y-8">
                            <li className="hover:text-primary">
                                <Link href="/contact">Contact</Link>
                            </li>
                            <li className="hover:text-primary">
                                <Link href="#">Faq</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-muted-foreground-subtle text-sm font-semibold tracking-[-0.28px]">
                            Legal
                        </h3>
                        <ul className="mt-6 space-y-6 text-sm tracking-[-0.28px] lg:mt-8 lg:space-y-8">
                            <li className="hover:text-primary">
                                <Link href="/terms-of-service">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-muted-foreground-subtle text-sm font-semibold tracking-[-0.28px]">
                            Social
                        </h3>
                        <div className="text-muted-foreground-subtle mt-6 flex gap-3 lg:mt-8">
                            <Link
                                href="https://instagram.com"
                                aria-label="Instagram"
                            >
                                <Instagram className="size-5" />
                            </Link>
                            <Link
                                href="https://twitter.com"
                                aria-label="Twitter"
                            >
                                <Twitter className="size-5" />
                            </Link>
                            <Link
                                href="https://Linkedin.com"
                                aria-label="Linkedin"
                            >
                                <Linkedin className="size-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-muted-foreground-subtle w-full px-4 border-x border-t border-b py-4 text-sm tracking-[-0.28px] md:px-24 lg:py-8">
                <p>
                    © {new Date().getFullYear()} Trenza Comunicaciones. All
                    rights reserved.
                </p>
            </div>
            <div className="w-full px-4 border-x hidden md:block md:px-24">
                <TextPressure
                    text="Trenza"
                    flex={true}
                    alpha={true}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor="#ffffff"
                    strokeColor="#ff0000"
                    minFontSize={32}
                />
            </div>
        </section>
    );
}
