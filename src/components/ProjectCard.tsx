// src/components/ProjectCard.tsx
import Image from 'next/image';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
    project: Project;
    onViewMore: (project: Project) => void;
}

export default function ProjectCard({ project, onViewMore }: ProjectCardProps) {
    return (
        <div
            id={project.id}
            className="project-card bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
        >
            <div className="h-48 overflow-hidden relative">
                <Image
                    className="object-cover"
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-charcoal mb-2">{project.title}</h3>
                <p className="text-sm text-cool-gray mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-dark-gray text-amber text-xs rounded-full">
              {tag}
            </span>
                    ))}
                </div>
                <button // Cambiado de <span> a <button> para accesibilidad
                    onClick={() => onViewMore(project)}
                    className="text-emerald hover:text-amber text-sm font-medium flex items-center cursor-pointer self-start mt-auto"
                >
                    View More
                    <i className="fa-solid fa-arrow-right ml-1"></i>
                </button>
            </div>
        </div>
    );
}