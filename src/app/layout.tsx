// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter', // Definimos una variable CSS para la fuente
});

export const metadata: Metadata = {
    title: 'John Doe - Portfolio',
    description: 'Frontend Developer – Crafting Beautiful Web Experiences.',
    // Puedes añadir más metadatos aquí (charset, viewport son manejados por Next.js por defecto)
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} font-sans`}> {/* Usamos la variable y la clase base de la fuente */}
        <head>
            {/* La configuración de FontAwesomeConfig puede no ser necesaria con la v6 JS,
            pero la incluimos si la tenías específicamente.
            Considera cargarla de manera asíncrona o solo si es necesaria.
        */}
            <Script id="fontawesome-config" strategy="beforeInteractive">
                {`window.FontAwesomeConfig = { autoReplaceSvg: 'nest' };`}
            </Script>
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
                strategy="lazyOnload" // Carga después de que la página sea interactiva
            />
        </head>
        <body className="bg-charcoal text-light-neutral">
        {children}
        </body>
        </html>
    );
}