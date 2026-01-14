import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
    {
        title: "Real-Time Data Pipeline",
        description: "Built a streaming data pipeline using Kafka and Spark to process millions of events per day with sub-second latency.",
        tags: ["Kafka", "Spark", "Python"],
        github: "https://github.com/devinfloyd1/nfl-streaming-pipeline",
        demo: null, // No live demo link in original
        color: "from-orange-500 to-red-600"
    },
    {
        title: "Sports Analytics Dashboard",
        description: "Developed an interactive dashboard for analyzing player performance metrics and game statistics using real-time data.",
        tags: ["JavaScript", "API", "Visualization"],
        github: null, // Original was just an H3 link, assumes repo same as page or irrelevant main repo link? Original had href.
        // Actually original had <a href="https://devinfloyd1.github.io/nfl-analytics-dashboard"> so it's a demo link mainly.
        // Let's assume it's a demo.
        demo: "https://devinfloyd1.github.io/nfl-analytics-dashboard",
        color: "from-green-400 to-emerald-600"
    },
    {
        title: "NFL AI/ML Platform",
        description: "Coming Soon. Advanced machine learning platform for predictive game analysis.",
        tags: ["Python", "ML", "AWS"],
        github: null,
        demo: null,
        comingSoon: true,
        color: "from-blue-500 to-purple-600"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-32 px-4 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            >
                Featured Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col"
                    >
                        {/* Gradient Header */}
                        <div className={`h-48 bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-80 transition-opacity relative p-6 flex items-end`}>
                            <h3 className="text-2xl font-bold text-white drop-shadow-md">{project.title}</h3>
                        </div>

                        <div className="p-8 flex-1 flex flex-col">
                            <p className="text-gray-400 mb-6 flex-1">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-semibold px-3 py-1 bg-white/10 rounded-full text-gray-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-auto">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-gemini-blue transition-colors">
                                        <Github className="w-4 h-4" /> Code
                                    </a>
                                )}
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-gemini-blue transition-colors">
                                        <ExternalLink className="w-4 h-4" /> Live Demo
                                    </a>
                                )}
                                {project.comingSoon && (
                                    <span className="flex items-center gap-2 text-sm font-medium text-gray-500 cursor-not-allowed">
                                        Coming Soon
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
