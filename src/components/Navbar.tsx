// src/components/Navbar.tsx
'use client';
import { useState, useEffect }
    from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ];

    const handleScroll = () => {
        const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
        const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust offset as needed

        sections.forEach(section => {
            if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                setActiveSection(section.id);
            }
        });
        if (window.scrollY === 0) setActiveSection('home'); // Ensure home is active at top
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            // setActiveSection(targetId); // Set active section immediately on click
        }
    };

    return (
        <nav id="header" className="fixed top-0 w-full h-16 bg-dark-gray z-50 shadow-md">
            <div className="container mx-auto px-6 h-full flex items-center justify-between">
                <Link href="#home" onClick={(e) => handleNavLinkClick(e, '#home')} className="text-2xl font-bold text-light-neutral cursor-pointer">
                    John Doe
                </Link>
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={(e) => handleNavLinkClick(e, link.href)}
                            className={`nav-link text-light-neutral hover:text-emerald transition-colors cursor-pointer ${
                                activeSection === link.href.substring(1) ? 'text-emerald font-semibold' : ''
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="md:hidden">
                    <button
                        className="text-light-neutral focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
                    </button>
                </div>
            </div>
            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-dark-gray z-40 p-6 shadow-lg">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={(e) => handleNavLinkClick(e, link.href)}
                                className={`nav-link text-light-neutral hover:text-emerald transition-colors cursor-pointer text-lg py-2 ${
                                    activeSection === link.href.substring(1) ? 'text-emerald font-semibold' : ''
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}