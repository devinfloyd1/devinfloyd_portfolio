import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "Real-Time Sports Betting Odds Tracker",
        description: "Real-time streaming pipeline that ingests live NBA & NFL betting odds from 9+ sportsbooks, detects arbitrage opportunities, and displays them in a live dashboard. Built with AWS Kinesis for streaming, Lambda for processing, and DynamoDB for sub-millisecond queries.",
        tags: ["AWS Kinesis", "Lambda", "DynamoDB", "S3", "API Gateway", "EventBridge", "Terraform", "Next.js", "React", "Tailwind CSS", "Vercel"],
        github: null,
        demo: "https://sports-betting-pipeline.vercel.app/",
        color: "from-amber-500 to-orange-600",
        glow: "rgba(251,146,60,0.25)"
    },
    {
        title: "AWS Data Lakehouse Pipeline",
        description: "End-to-end data platform demonstrating modern lakehouse architecture. Ingests external API data via Lambda, stores in S3, transforms with Glue/PySpark to Iceberg format, serves through Redshift to a REST API for BI consumption.",
        tags: ["AWS", "PySpark", "Iceberg", "Redshift", "Terraform"],
        github: "https://github.com/devinfloyd1/data-lakehouse-project",
        demo: "https://fbi29ox3p0.execute-api.us-east-1.amazonaws.com/weather/summary",
        color: "from-cyan-500 to-blue-600",
        glow: "rgba(34,211,238,0.2)"
    },
    {
        title: "ClawGuard Security Scanner",
        description: "Python security scanner that detects malicious patterns in OpenClaw skills before installation. Uses multi-level analysis with AST parsing, pattern matching, and network detection across 70+ indicators of compromise. Assigns risk scores (0-100) with severity levels and supports console, JSON, and Markdown reporting.",
        tags: ["Python", "Security", "AST Analysis", "CLI", "Threat Detection"],
        github: "https://github.com/devinfloyd1/clawguard",
        demo: null,
        color: "from-rose-500 to-pink-600",
        glow: "rgba(244,63,94,0.22)"
    },
    {
        title: "Real-Time Data Pipeline",
        description: "Built a streaming data pipeline using Kafka and Spark to process millions of events per day with sub-second latency.",
        tags: ["Kafka", "Spark", "Python"],
        github: "https://github.com/devinfloyd1/nfl-streaming-pipeline",
        demo: null,
        color: "from-orange-500 to-red-600",
        glow: "rgba(249,115,22,0.2)"
    },
    {
        title: "Sports Analytics Dashboard",
        description: "Developed an interactive dashboard for analyzing player performance metrics and game statistics using real-time data.",
        tags: ["JavaScript", "API", "Visualization"],
        github: null,
        demo: "https://devinfloyd1.github.io/nfl-analytics-dashboard",
        color: "from-green-400 to-emerald-600",
        glow: "rgba(52,211,153,0.2)"
    },
    {
        title: "NFL AI/ML Platform",
        description: "Coming Soon. Advanced machine learning platform for predictive game analysis.",
        tags: ["Python", "ML", "AWS"],
        github: null,
        demo: null,
        comingSoon: true,
        color: "from-blue-500 to-purple-600",
        glow: "rgba(124,58,237,0.2)"
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        whileHover={{ y: -10, boxShadow: `0 24px 60px ${project.glow}` }}
                        className="group glass-card rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
                        style={{ '--glow': project.glow }}
                    >
                        {/* Gradient header with glass overlay */}
                        <div className={`relative h-44 bg-gradient-to-br ${project.color} flex items-end overflow-hidden`}>
                            {/* Animated shimmer on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                style={{
                                    background: 'linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.15) 50%, transparent 80%)',
                                    animation: 'none',
                                }} />
                            {/* Glass overlay at bottom of header */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-16"
                                style={{
                                    background: 'linear-gradient(to top, rgba(11,12,16,0.7), transparent)',
                                }}
                            />
                            <h3 className="relative z-10 text-xl font-bold text-white drop-shadow-md px-6 pb-5 leading-snug">
                                {project.title}
                            </h3>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            <p className="text-gray-400 mb-5 flex-1 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-6">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="text-xs font-medium px-2.5 py-1 rounded-full text-gray-300 glass-badge"
                                        style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4 mt-auto pt-4 border-t border-white/8">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors group/link">
                                        <Github className="w-3.5 h-3.5" />
                                        <span>Source</span>
                                    </a>
                                )}
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors group/link">
                                        <ExternalLink className="w-3.5 h-3.5" />
                                        <span>Live Demo</span>
                                    </a>
                                )}
                                {project.comingSoon && (
                                    <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 cursor-not-allowed">
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
