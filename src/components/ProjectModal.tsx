// src/components/ProjectModal.tsx
'use client';
import Image from 'next/image';
import type { Project } from '@/data/projects';
import { useEffect, useRef } from 'react';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
    isVisible: boolean;
}

export default function ProjectModal({ project, onClose, isVisible }: ProjectModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        if (isVisible) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        } else {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [isVisible, onClose]);


    if (!project) return null;

    return (
        <div
            id="project-modal"
            className={`fixed inset-0 bg-black bg-opacity-75 z-[60] flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
        >
            <div
                ref={modalRef}
                className={`modal-content-base bg-light-neutral text-charcoal rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-transform duration-300 ease-in-out ${isVisible ? 'active-modal scale-100' : 'scale-95'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-6">
                    <h3 id="project-modal-title" className="text-2xl font-bold">{project.title}</h3>
                    <button
                        className="text-cool-gray hover:text-charcoal text-2xl"
                        onClick={onClose}
                        aria-label="Close modal"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="mb-6">
                    <div className="relative w-full h-60 md:h-72 rounded-lg overflow-hidden mb-4 bg-gray-200">
                        <Image
                            src={project.imageUrl}
                            alt={`Screenshot of ${project.title}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <p className="mb-4">{project.longDescription || project.description}</p>

                    {project.features && project.features.length > 0 && (
                        <>
                            <h4 className="text-lg font-bold mb-2">Key Features</h4>
                            <ul className="list-disc list-inside mb-6 space-y-1">
                                {project.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </>
                    )}

                    <h4 className="text-lg font-bold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-emerald text-white text-xs rounded-full">
                {tag}
              </span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
                        <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-hover px-6 py-3 bg-emerald text-white rounded-lg hover:bg-amber transition-colors shadow-md hover:shadow-lg flex-1 text-center cursor-pointer"
                        >
                            Live Demo <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
                        </a>
                    )}
                    {project.sourceCodeUrl && project.sourceCodeUrl !== '#' && (
                        <a
                            href={project.sourceCodeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-hover px-6 py-3 bg-cool-gray text-white rounded-lg hover:bg-dark-gray transition-colors shadow-md hover:shadow-lg flex-1 text-center cursor-pointer"
                        >
                            Source Code <i className="fa-brands fa-github text-sm ml-1"></i>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}