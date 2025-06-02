// src/components/Skills.tsx
'use client';
import { useState } from 'react';

const skillsData = [
    { name: 'HTML5', icon: 'fa-brands fa-html5', tag: 'HTML5' },
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt', tag: 'CSS3' },
    { name: 'JavaScript', icon: 'fa-brands fa-js', tag: 'JavaScript' },
    { name: 'React', icon: 'fa-brands fa-react', tag: 'React' },
    { name: 'Node.js', icon: 'fa-brands fa-node-js', tag: 'Node.js' },
    { name: 'Vue.js', icon: 'fa-brands fa-vuejs', tag: 'Vue.js' },
    { name: 'MongoDB', icon: 'fa-solid fa-database', tag: 'MongoDB' },
    { name: 'Git', icon: 'fa-brands fa-git-alt', tag: 'Git' },
    { name: 'Sass', icon: 'fa-brands fa-sass', tag: 'Sass' },
    { name: 'Responsive Design', icon: 'fa-solid fa-mobile-screen', tag: 'Responsive Design' },
    { name: 'Accessibility', icon: 'fa-solid fa-universal-access', tag: 'Accessibility' },
    { name: 'Performance', icon: 'fa-solid fa-gauge-high', tag: 'Performance' },
];

interface SkillsProps {
    activeSkill: string | null;
    onSkillClick: (skillTag: string | null) => void;
}

export default function Skills({ activeSkill, onSkillClick }: SkillsProps) {
    const handleSkillClick = (skillTag: string) => {
        onSkillClick(activeSkill === skillTag ? null : skillTag);
    };

    return (
        <section id="skills" className="bg-charcoal py-16 text-light-neutral">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-4 text-center">My Skills</h2>
                <p className="text-center text-cool-gray mb-12">
                    Click a skill to filter projects
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {skillsData.map((skill) => (
                        <div
                            key={skill.name}
                            className={`skill-chip flex items-center p-4 bg-dark-gray rounded-lg cursor-pointer ${
                                activeSkill === skill.tag ? 'active' : ''
                            }`}
                            onClick={() => handleSkillClick(skill.tag)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && handleSkillClick(skill.tag)}
                        >
                            <i className={`${skill.icon} text-emerald text-2xl mr-3 w-6 text-center`}></i>
                            <span className="text-sm sm:text-base">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}