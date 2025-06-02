// src/components/Contact.tsx
'use client';
import { useState, FormEvent } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');
        // Aquí es donde harías una llamada a tu API endpoint
        // Ejemplo:
        // try {
        //   const response = await fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData),
        //   });
        //   if (response.ok) {
        //     setStatus('Message sent successfully!');
        //     setFormData({ name: '', email: '', message: '' });
        //   } else {
        //     const errorData = await response.json();
        //     setStatus(`Error: ${errorData.message || 'Something went wrong.'}`);
        //   }
        // } catch (error) {
        //   setStatus('Error: Could not send message.');
        // }
        setTimeout(() => { // Simulación de envío
            setStatus(`Message from ${formData.name} would be sent! (This is a demo)`);
            // setFormData({ name: '', email: '', message: '' }); // Descomentar para limpiar
        }, 1000);
    };

    return (
        <section id="contact" className="bg-charcoal py-16 text-light-neutral">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12 text-center">
                    Get In Touch
                </h2>
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="w-full md:w-1/2">
                        <form onSubmit={handleSubmit} className="bg-dark-gray p-8 rounded-xl shadow-lg">
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-input w-full bg-charcoal p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-input w-full bg-charcoal p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald"
                                    placeholder="Your email"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-input w-full bg-charcoal p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald"
                                    placeholder="Your message"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-emerald text-white py-3 rounded-md hover:bg-amber transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald focus:ring-opacity-50"
                            >
                                Send Message
                            </button>
                            {status && <p className="mt-4 text-sm text-center">{status}</p>}
                        </form>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                            <p className="text-cool-gray mb-6">
                                Feel free to reach out to me through the form or using the
                                contact details below.
                            </p>
                            <div className="flex items-center mb-4">
                                <i className="fa-solid fa-envelope text-emerald text-xl w-8"></i>
                                <a href="mailto:john.doe@example.com" className="hover:text-emerald">john.doe@example.com</a>
                            </div>
                            <div className="flex items-center mb-4">
                                <i className="fa-solid fa-phone text-emerald text-xl w-8"></i>
                                <a href="tel:+15551234567" className="hover:text-emerald">+1 (555) 123-4567</a>
                            </div>
                            <div className="flex items-center">
                                <i className="fa-solid fa-location-dot text-emerald text-xl w-8"></i>
                                <span>San Francisco, CA</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
                            <div className="flex space-x-6">
                                <a href="#" aria-label="GitHub" className="social-icon text-light-neutral hover:text-emerald">
                                    <i className="fa-brands fa-github text-2xl"></i>
                                </a>
                                <a href="#" aria-label="LinkedIn" className="social-icon text-light-neutral hover:text-emerald">
                                    <i className="fa-brands fa-linkedin text-2xl"></i>
                                </a>
                                <a href="#" aria-label="Twitter" className="social-icon text-light-neutral hover:text-emerald">
                                    <i className="fa-brands fa-twitter text-2xl"></i>
                                </a>
                                <a href="#" aria-label="Dribbble" className="social-icon text-light-neutral hover:text-emerald">
                                    <i className="fa-brands fa-dribbble text-2xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}