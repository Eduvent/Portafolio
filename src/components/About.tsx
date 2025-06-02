// src/components/About.tsx
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="bg-white py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12 text-charcoal text-center">
                    About Me
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <p className="text-charcoal mb-6">
                            I'm a passionate frontend developer with over 5 years of
                            experience building modern web applications. My journey began
                            with a fascination for the intersection of design and
                            technology, which led me to pursue a career in web development.
                        </p>
                        <p className="text-charcoal mb-6">
                            Throughout my career, I've worked with various technologies
                            and frameworks, always staying up-to-date with the latest
                            industry trends. I pride myself on writing clean, maintainable
                            code and creating intuitive user interfaces that provide
                            exceptional user experiences.
                        </p>
                        <p className="text-charcoal mb-6">
                            When I'm not coding, you can find me exploring new hiking
                            trails, experimenting with photography, or contributing to
                            open-source projects. I believe in continuous learning and
                            pushing the boundaries of what's possible on the web.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="rounded-lg overflow-hidden shadow-lg relative aspect-[4/3]"> {/* aspect ratio for placeholder */}
                            <Image
                                className="object-cover"
                                src="/images/workspace-setup.png" // REEMPLAZA ESTA RUTA
                                alt="Web developer working on multiple screens"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-12 p-6 bg-light-neutral rounded-lg border-l-4 border-emerald">
                    <blockquote className="text-xl text-charcoal italic">
                        "The best way to predict the future is to create it. I'm
                        dedicated to crafting web experiences that make a positive impact
                        on users' lives."
                    </blockquote>
                </div>
            </div>
        </section>
    );
}