// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                charcoal: '#111827',
                'light-neutral': '#E5E7EB',
                emerald: '#10B981',
                amber: '#F59E0B',
                'cool-gray': '#9CA3AF',
                'dark-gray': '#1F2937',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'], // Usaremos una variable CSS para Inter
            },
            keyframes: {
                slideInFromLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                modalScaleIn: { // Renombrado para evitar conflicto si se usa en más sitios
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
            },
            animation: {
                slideInFromLeft: 'slideInFromLeft 800ms ease-out forwards',
                scaleIn: 'scaleIn 800ms ease-out forwards',
                modalScaleIn: 'modalScaleIn 250ms ease-in-out forwards',
            },
        },
    },
    plugins: [
        // Aquí puedes añadir otros plugins de Tailwind si los usas,
        // por ejemplo, si tw-animate-css es compatible con v4:
        // require('tw-animate-css'),
    ],
};
export default config;