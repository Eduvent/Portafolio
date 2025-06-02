// src/components/Projects.tsx
'use client';
import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projectsData, type Project } from '@/data/projects';

interface ProjectsProps {
    activeSkillFilter: string | null;
}

export default function Projects({ activeSkillFilter }: ProjectsProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);

    useEffect(() => {
        if (!activeSkillFilter) {
            setFilteredProjects(projectsData);
        } else {
            setFilteredProjects(
                projectsData.filter(p => p.tags.includes(activeSkillFilter))
            );
        }
    }, [activeSkillFilter]);

    const handleViewMore = (project: Project) => {
        setSelectedProject(project);
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
        // Delay setting project to null to allow for fade-out animation
        setTimeout(() => {
            setSelectedProject(null);
        }, 300); // Match modal transition duration
    };

    return (
        <section id="projects" className="bg-white py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12 text-charcoal text-center">
                    My Projects
                </h2>
                {filteredProjects.length === 0 && activeSkillFilter && (
                    <p className="text-center text-cool-gray mb-12">
                        No projects found for "{activeSkillFilter}". Showing all projects.
                    </p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {(filteredProjects.length > 0 ? filteredProjects : projectsData).map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onViewMore={handleViewMore}
                        />
                    ))}
                </div>
            </div>
            <ProjectModal
                project={selectedProject}
                onClose={handleCloseModal}
                isVisible={isModalVisible}
            />
        </section>
    );
}