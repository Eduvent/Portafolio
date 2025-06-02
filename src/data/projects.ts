// src/data/projects.ts
export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    imageUrl: string; // Ejemplo: '/images/project-ecommerce.png'
    tags: string[];
    liveDemoUrl?: string;
    sourceCodeUrl?: string;
    features?: string[];
}

export const projectsData: Project[] = [
    {
        id: 'project-1',
        title: 'E-Commerce Platform',
        description: 'A full-featured online store with cart functionality, payment processing, and admin dashboard.',
        longDescription: 'Detailed information about the e-commerce platform. Built with a focus on user experience and scalability. Includes features like product search, filtering, user accounts, and order management.',
        imageUrl: '/images/ecommerce-dashboard.png', // REEMPLAZA ESTA RUTA
        tags: ['React', 'Node.js', 'MongoDB'],
        liveDemoUrl: '#',
        sourceCodeUrl: '#',
        features: ['User Authentication', 'Shopping Cart', 'Payment Gateway Integration', 'Admin Dashboard']
    },
    {
        id: 'project-2',
        title: 'Fitness Tracker App',
        description: 'A mobile application that helps users track workouts, set goals, and monitor progress over time.',
        longDescription: 'This React Native app allows users to log various types of workouts, visualize their progress with charts, and set daily or weekly fitness goals. Firebase is used for real-time data synchronization and authentication.',
        imageUrl: '/images/fitness-app-ui.png', // REEMPLAZA ESTA RUTA
        tags: ['React Native', 'Firebase', 'Chart.js'],
        features: ['Workout Logging', 'Progress Tracking', 'Goal Setting', 'Data Visualization']
    },
    {
        id: 'project-3',
        title: 'Photographer Portfolio',
        description: 'A responsive portfolio website for a professional photographer with gallery and booking system.',
        longDescription: 'A visually stunning portfolio for a photographer, featuring a masonry gallery, lazy loading for images, and an integrated booking form. Built with HTML5, CSS3, and vanilla JavaScript for optimal performance.',
        imageUrl: '/images/photographer-portfolio.png', // REEMPLAZA ESTA RUTA
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        liveDemoUrl: '#',
        sourceCodeUrl: '#',
        features: ['Responsive Gallery', 'Booking System', 'Contact Form', 'Optimized Images']
    },
    {
        id: 'project-4',
        title: 'Weather Dashboard',
        description: 'A weather application with interactive maps, forecasts, and historical data visualization.',
        longDescription: 'This Vue.js application fetches data from a weather API to display current conditions, hourly and daily forecasts. It includes interactive charts using D3.js and location search functionality.',
        imageUrl: '/images/weather-dashboard.png', // REEMPLAZA ESTA RUTA
        tags: ['Vue.js', 'D3.js', 'API Integration'],
        liveDemoUrl: '#',
        sourceCodeUrl: '#',
        features: ['Real-time Weather Data', 'Interactive Forecast Charts', 'Location Search', 'Historical Data View']
    },
    {
        id: 'project-5',
        title: 'Task Management App',
        description: 'A Kanban-style task management application with drag-and-drop functionality and team collaboration.',
        longDescription: 'A feature-rich task manager built with React and Redux for state management. Users can create boards, lists, and cards, assign tasks, and track progress. Real-time updates are handled with Socket.io.',
        imageUrl: '/images/task-management-ui.png', // REEMPLAZA ESTA RUTA
        tags: ['React', 'Redux', 'Socket.io'],
        liveDemoUrl: '#',
        sourceCodeUrl: '#',
        features: ['Kanban Boards', 'Drag & Drop', 'Real-time Collaboration', 'User Assignment']
    },
    {
        id: 'project-6',
        title: 'Personal Blog Platform',
        description: 'A custom blog platform with content management system, commenting, and social sharing features.',
        longDescription: 'A statically generated blog built with Next.js and Tailwind CSS. Content is written in Markdown and parsed to create blog posts. Features include categories, tags, and a responsive design for a great reading experience.',
        imageUrl: '/images/blog-design.png', // REEMPLAZA ESTA RUTA
        tags: ['Next.js', 'Tailwind CSS', 'Markdown'],
        liveDemoUrl: '#',
        sourceCodeUrl: '#',
        features: ['Markdown Support', 'Static Site Generation', 'Responsive Design', 'SEO Optimized']
    },
];