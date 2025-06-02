// src/components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
    return (
        <section id="home" className="pt-16 min-h-[80vh] flex items-center bg-charcoal text-light-neutral">
            <div className="container mx-auto px-6 py-16">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 mb-10 md:mb-0 animate-slideInFromLeft"> {/* hero-text class removed, animation applied directly */}
                        <h1 className="text-5xl font-bold mb-4">John Doe</h1>
                        <h2 className="text-2xl mb-6">
                            Frontend Developer – Crafting Beautiful Web Experiences
                        </h2>
                        <p className="text-cool-gray mb-8 max-w-lg">
                            I specialize in building responsive, accessible, and performant
                            web applications using modern technologies.
                        </p>
                        <a
                            href="/cv-john-doe.pdf" // REEMPLAZA con la ruta a tu CV en /public
                            download
                            className="btn-hover inline-flex items-center px-6 py-3 bg-emerald text-white rounded-lg hover:bg-amber transition-colors shadow-md hover:shadow-lg cursor-pointer"
                        >
                            <i className="fa-solid fa-file-pdf mr-2"></i>
                            Download CV
                        </a>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center animate-scaleIn"> {/* hero-avatar class removed, animation applied directly */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-emerald">
                            <Image
                                className="object-cover" // next/image con fill necesita object-cover aquí
                                src="/images/hero-portrait.png" // REEMPLAZA ESTA RUTA (ej: /images/your-portrait.png)
                                alt="Professional portrait of John Doe"
                                fill
                                priority // Importante para LCP
                                sizes="(max-width: 768px) 256px, 320px" // w-64, md:w-80
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}